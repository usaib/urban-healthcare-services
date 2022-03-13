"use strict";

const inventory = require("./inventory");

module.exports = (sequelize, DataTypes) => {
	const dispense_in_records = sequelize.define(
		"dispense_in_records",
		{
			inventoryId: {
				type: DataTypes.INTEGER,
				references: {
					model: inventory,
					key: "id"
				}
			},
			quantityUpdated: DataTypes.INTEGER,
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE
		},
		{}
	);
	dispense_in_records.associate = function (models) {
		// associations can be defined here
	};
	return dispense_in_records;
};
