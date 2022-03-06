"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("inventories", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING
			},
			type: {
				type: Sequelize.STRING
			},
			quantity: {
				type: Sequelize.INTEGER
			},
			status: {
				type: Sequelize.ENUM("Dispense In", "Dispense Out")
			},
			company: {
				type: Sequelize.STRING
			},
			distributor: {
				type: Sequelize.STRING
			},
			consumed: {
				type: Sequelize.INTEGER
			},

			expiryDate: {
				type: Sequelize.DATE
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("inventories");
	}
};
