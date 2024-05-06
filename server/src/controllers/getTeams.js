const { Teams } = require("../db");
const axios = require("axios");

const getAllTeams = async (req, res) => {
  try {
    const { data } = await axios.get("http://localhost:5000/drivers");

    const foundTeam = await Teams.findAll();

    if (foundTeam.length > 0) {
      return res.status(200).json(foundTeam);
    }

    const teamSet = new Set();

    for (let i = 0; i < data.length; i++) {
      if (data[i].teams) {
        let teamDriver = data[i].teams.split(",");
        for (let j = 0; j < teamDriver.length; j++) {
          teamSet.add(teamDriver[j].trim());
        }
      }
    }
    const teamsArray = [...teamSet];

    for (let team of teamsArray) {
      await Teams.create({ name: team });
    }

    const found = await Teams.findAll();

    return res.status(200).json(found);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllTeams,
};
