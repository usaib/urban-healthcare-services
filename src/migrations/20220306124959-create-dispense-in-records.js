"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("dispense_in_records", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			medicineId: {
				type: Sequelize.INTEGER,
				references: {
					model: "inventories",
					key: "id"
				},
				onUpdate: "CASCADE",
				onDelete: "SET NULL"
			},
			quantityUpdated: {
				type: Sequelize.INTEGER
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
		return queryInterface.dropTable("dispense_in_records");
	}
};
