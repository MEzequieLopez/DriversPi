const { getDriversById } = require("../controllers/getDetail");
const { getDriverName, getAllDrivers} = require("../controllers/getDriver");


const getDriver = async (req, res) => {
    const { name } = req.query;
  
    if (name) {
      try {
        const driversforName = await getDriverName(name)
        return res.status(200).json(driversforName);
    } catch (error) {
      res.status(500).send(error.message);
    }
  } else {
    try {
      const allDrivers = await getAllDrivers()
      return res.status(200).json(allDrivers);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
};

const getDetail = async (req, res) => {

    const { id } = req.params;
    const source = isNaN(id) ? "db" : "api";
    try {
      const response = await getDriversById(id, source);
    
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };
module.exports = {
  getDriver,
  getDetail,
} 