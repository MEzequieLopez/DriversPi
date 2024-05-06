const { Router } = require("express");
const { getDriver, getDetail } = require("../handlers.js/DriverHandler");
const { postDriver } = require("../controllers/postDriver");
const { getAllTeams } = require("../controllers/getTeams");

const router = Router();

router.get("/drivers", getDriver);

router.get("/drivers/:id", getDetail);

router.post("/drivers", postDriver); 

router.get("/teams", getAllTeams);

module.exports =  router ;