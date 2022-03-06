"use strict";
module.exports = (sequelize, DataTypes) => {
	const inventory = sequelize.define(
		"inventory",
		{
			name: DataTypes.STRING,
			type: DataTypes.STRING,
			quantity: DataTypes.INTEGER,
			status: DataTypes.ENUM("Dispense In", "Dispense Out"),
			company: DataTypes.STRING,
			distributor: DataTypes.STRING,
			consumed: DataTypes.INTEGER,
			expiryDate: DataTypes.INTEGER
		},
		{}
	);
	inventory.associate = function (models) {
		// associations can be defined here
	};
	return inventory;
};
