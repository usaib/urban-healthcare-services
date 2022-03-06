module.exports = (sequelize, DataTypes) => {
	const user = sequelize.define(
		"user",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},

			email: {
				type: DataTypes.STRING,
				allowNull: false
			},
			role: {
				type: DataTypes.STRING,
				allowNull: false
			},
			password: {
				type: DataTypes.STRING
			}
		},
		{
			scopes: {
				withSecretColumns: {
					attributes: { include: ["password"] }
				}
			}
		}
	);
	user.associate = function (models) {
		// associations can be defined here
	};

	return user;
};
