import { inventory } from "../models";
import crypto from "crypto";
import { dispense_in_records } from "../models";

export const getInventory = async (params) => {
	try {
		const inventoryData = await inventory.findAndCountAll({
			order: [
				["createdAt", "DESC"],
				["name", "ASC"]
			],
			offset: params.offset,
			limit: params.limit
		});
		return {
			success: true,
			data: inventoryData
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};

export const create = async (params) => {
	try {
		console.log(params);

		const Medicines = await inventory.create({
			...params
		});

		return {
			success: true,
			data: Medicines.id
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};

export const remove = async (params) => {
	try {
		const medicines = await inventory.destroy({
			where: {
				id: params.id
			}
		});
		return {
			success: true,
			data: medicines
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};

export const update = async (params) => {
	try {
		console.log(params);
		const previousRecord = await inventory.findAll({
			where: {
				id: params.id
			}
		});
		if (params.quantity) {
			const quantityUpdatedRecord = await dispense_in_records.create({
				medicineId: params.id,
				quantityUpdated: params.quantity
			});
			console.log(quantityUpdatedRecord);
		}
		params.quantity =
			previousRecord[0].dataValues.quantity + parseInt(params.quantity);
		console.log(params);

		const Medicines = await inventory.update(
			{ ...params },
			{
				where: {
					id: params.id
				}
			}
		);

		return {
			success: true,
			data: Medicines
		};
	} catch (error) {
		return {
			success: false,
			data: error
		};
	}
};

export const dispense = async (params) => {
	try {
		console.log(params);
		const previousRecord = await inventory.findAll({
			where: {
				id: params.id[0]
			}
		});
		console.log("this is ", previousRecord[0].dataValues);
		params.quantity =
			previousRecord[0].dataValues.quantity + parseInt(params.amount);
		params.consumed =
			previousRecord[0].dataValues.consumed - parseInt(params.amount);

		const Medicines = await inventory.update(
			{ ...params },
			{
				where: {
					id: params.id
				}
			}
		);
		return {
			success: true,
			data: Medicines
		};
	} catch (error) {
		console.log(error);
		return {
			success: false,
			data: error
		};
	}
};
