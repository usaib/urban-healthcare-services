const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const user = require("./user");
const token = require("./token");

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(`${__dirname}/../config/config.js`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, {
		username: "root",
		password: "root",
		database: "order_manager",
		host: "localhost",
		dialect: "mysql"
	});
}

// sequelize.sync({ force: true });

fs.readdirSync(__dirname)
	.filter(
		(file) =>
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
	)
	.forEach((file) => {
		const model = sequelize.import(path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// relationships for models

//= ==============================
// Define all relationships here below
//= ==============================
// db.User.hasMany(db.Role);
// db.Role.belongsTo(db.User);

db.user.hasMany(db.token);
db.token.belongsTo(db.user);
db.inventory.hasMany(db.dispense_in_records);
db.dispense_in_records.belongsTo(db.inventory);
module.exports = db;
