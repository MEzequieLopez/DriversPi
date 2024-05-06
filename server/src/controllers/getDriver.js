const axios = require("axios");
const { Driver, Teams } = require("../db");
const { Op, Sequelize } = require("sequelize");
const {dbDriversClear, apiNameDriverClear, clearDbDriver,clearApiDriver} = require("../utils")

const getDriverName = async (name) => {
 
      const driverDB = await Driver.findAll({
        where: {
          [Sequelize.Op.or]: [
            { forename: { [Sequelize.Op.iLike]: `%${name}%` } },
            { surname: { [Sequelize.Op.iLike]: `%${name}%` } },
          ],
        },
        include: [
          {
            model: Teams,
            as: "Teams",
            attributes: ["name"],
            through: { attributes: [] },
          },
        ]
      });

      const driverArray = dbDriversClear(driverDB);

      const { data } = await axios(`http://localhost:5000/drivers`);

      const nameStr = name.toLowerCase();

      const filteredDrivers = data.filter((driver) =>
      driver.name?.forename.toLowerCase().includes(nameStr)
    );
    const driversClearApi =  apiNameDriverClear(filteredDrivers)
  

      if (!driversClearApi.length && !driverArray.length)
        throw new Error("No driver found");

    const driverFiltrados = [...driversClearApi, ...driverArray];
    const  driverLimit = driverFiltrados.slice(0, 14);
    return  driverLimit
  }
      const getAllDrivers = async () => {
      const dbDrivers = await Driver.findAll({
        include: [
          {
            model: Teams,
            as: "Teams",
            attributes: ["name"],
            through: { attributes: [] },
          },
        ],
      });

      const driversClearDb = clearDbDriver(dbDrivers);

      const result = (await axios.get("http://localhost:5000/drivers")).data;

      const driversClearApi = clearApiDriver(result)
      const total = [...driversClearDb, ...driversClearApi];
      return total;
    }


module.exports = {
  getDriverName,
  getAllDrivers
};