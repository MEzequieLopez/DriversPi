const { Driver, Teams } = require("../db");
const { Op, Sequelize } = require("sequelize");

const postDriver = async (req, res) => {
  try {
    const { forename, surname, description, image, nationality, dob, teams } =
      req.body;

    if (
      !forename ||
      !surname ||
      !description ||
      !image ||
      !nationality ||
      !dob ||
      !teams
    ) {
      return res.status(400).json({ message: "Missing info" });
    } else {

      const newDriver = await Driver.create({
        forename,
        surname,
        image,
        description,
        nationality,
        dob,

      });
      if (teams) {
        const teamNames = teams.split(", ");

        console.log(teamNames)
  
        const searchTeam = await Teams.findAll({
          where: { name: { [Op.in]: teamNames } },
        });

        console.log(searchTeam)
         await newDriver.addTeams(searchTeam);
        
        return res.status(200).json(newDriver);
      }
    
    }

    
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  postDriver,
};