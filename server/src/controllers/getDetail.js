const { Driver, Teams } = require("../db");
const axios = require("axios");
const { clearDetailDbId } = require("../utils");

const getDriversById = async (id, source) => {
    if (source === "db") {
     
      const find = await Driver.findByPk(id, {
        include: [
          {
            model: Teams,
            as: "Teams",
            attributes: ["name"],
            through: { attributes: [] },
          },
        ],
      });

      const foundId = clearDetailDbId(find);
      return foundId;
    } else (source === "api");{
    

      const { data } = await axios.get(`http://localhost:5000/drivers/${id}`);

      return data
    }
  } 

module.exports = {
    getDriversById,
};
