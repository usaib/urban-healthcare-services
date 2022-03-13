import { inventory, Sequelize } from "../models";
import crypto from "crypto";
import { dispense_in_records } from "../models";
const Op = Sequelize.Op;

export const getInventory = async (params) => {
	try {
		let where;
		if (params.filters) {
			if (params.filters.name) {
				where = {
					name: params.filters.name
				};
			}
		}
		const inventoryData = await inventory.findAndCountAll({
			order: [
				["createdAt", "DESC"],
				["name", "ASC"]
			],
			offset: params.offset,
			limit: params.limit,
			where: where
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
export const getDispenseInRecords = async (params) => {
	try {
		let where;
		if (params.filters) {
			if (params.filters.name) {
				where = {
					name: params.filters.name
				};
			}
		}
		const inventoryData = await dispense_in_records.findAndCountAll({
			order: [["createdAt", "DESC"]],
			include: {
				model: inventory,
				attributes: ["name", "type", "quantity"],
				where: where
			},
			offset: params.offset,
			limit: params.limit,
			where: {
				createdAt: {
					[Op.lt]: params.endDate,
					[Op.gt]: params.startDate
				}
			}
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
				inventoryId: params.id,
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

		if (params.quantity < 0) {
			return {
				success: false,
				data: {
					message: "Quantity can never be negative"
				}
			};
		}

		params.consumed =
			previousRecord[0].dataValues.consumed - parseInt(params.amount);
		console.log(params.quantity, params.consumed);
		if (params.quantity < params.consumed) {
			console.log(params.quantity, params.consumed, "truecase");

			return {
				success: false,
				data: {
					message: "Please increase quantity of this stock"
				}
			};
		}
		delete params.quantity;

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
