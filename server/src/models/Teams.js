const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  const Teams = sequelize.define(
    "Teams",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING(70),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  return Teams;
};