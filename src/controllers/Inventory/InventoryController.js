const Service = require("../../Services/Inventory");
export const getInventory = async (request, response) => {
	try {
		const resp = await Service.getInventory(request.body, request.user);
		if (resp.success) {
			response.status(200).json({
				message: "Order Fetched Successfully",
				success: true,
				data: resp
			});
		} else {
			response.status(200).json({
				message: "Failed to get getInventory",
				success: false,
				data: resp
			});
		}
	} catch (e) {
		response.status(400).json({
			...e
		});
	}
};
export const OrdersById = async (request, response) => {
	try {
		const resp = await Service.OrdersById(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "Order Fetched Successfully",
				success: true,
				data: resp
			});
		} else {
			response.status(200).json({
				message: "Failed to get orders",
				success: false,
				data: resp
			});
		}
	} catch (e) {
		response.status(400).json({
			...e
		});
	}
};

export const sendEmail = async (request, response) => {
	try {
		const resp = await email.sendMail(request.body);
		if (resp) {
			response.status(200).json({
				message: "Sent Successfully",
				success: true,
				data: resp
			});
		} else {
			response.status(200).json({
				message: "failed",
				success: false,
				data: resp
			});
		}
	} catch (e) {
		response.status(400).json({
			...e
		});
	}
};
export const sendEmailToVendors = async (request, response) => {
	try {
		const resp = await ordersEmail.trigger(request.body);
		if (resp) {
			response.status(200).json({
				message: "Sent Successfully",
				success: true,
				data: resp
			});
		} else {
			response.status(200).json({
				message: "failed",
				success: false,
				data: resp
			});
		}
	} catch (e) {
		response.status(400).json({
			...e
		});
	}
};
export const sendEmailToManagement = async (request, response) => {
	try {
		const resp = await statusEmail.trigger(request.body);
		if (resp) {
			response.status(200).json({
				message: "Sent Successfully",
				success: true,
				data: resp
			});
		} else {
			response.status(200).json({
				message: "failed",
				success: false,
				data: resp
			});
		}
	} catch (e) {
		response.status(400).json({
			...e
		});
	}
};

export const UpdateOmsStatus = async (request, response) => {
	try {
		const resp = await Service.UpdateOmsStatus(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "OMS status updated Successfully",
				success: true,
				data: resp
			});
		} else {
			response.status(200).json({
				message: "Failed to update OMS Status",
				success: false,
				data: resp
			});
		}
	} catch (e) {
		response.status(400).json({
			...e
		});
	}
};

export const UpdatePreviewNumber = async (request, response) => {
	try {
		const resp = await Service.UpdatePreviewNumber(request.body);
		if (resp.success) {
			response.status(200).json({
				message: "Preview Number updated Successfully",
				success: true,
				data: resp
			});
		} else {
			response.status(200).json({
				message: "Failed to update Preview Number",
				success: false,
				data: resp
			});
		}
	} catch (e) {
		response.status(400).json({
			...e
		});
	}
};
