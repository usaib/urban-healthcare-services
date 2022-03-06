"use strict";

const user = require("./user");

module.exports = (sequelize, DataTypes) => {
	const token = sequelize.define(
		"token",
		{
			token: { type: DataTypes.TEXT },
			userId: {
				type: DataTypes.INTEGER,
				references: {
					model: user,
					key: "id"
				}
			}
		},
		{}
	);
	token.associate = function (models) {
		// associations can be defined here
	};
	return token;
};
