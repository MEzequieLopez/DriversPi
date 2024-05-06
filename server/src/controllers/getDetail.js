const { Driver, Teams } = require("../db");
const axios = require("axios");
const { clearDetailDbId } = require("../utils");

const getDriversById = async (id, source) => {
    if (source === "db") {
      // Consultar en la base de datos
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
    //   if (!foundId) {
    //       return res.status(404).json({ message: "Driver not found" });
    //     }

      return foundId;
    } else (source === "api");{
      // Si no es un UUID, asumimos que es un ID de la API externa

      const { data } = await axios.get(`http://localhost:5000/drivers/${id}`);

      return data
    }
  } 

module.exports = {
    getDriversById,
};
