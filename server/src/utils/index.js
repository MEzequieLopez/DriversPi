const { Teams } = require("../db");
   const clearDetailDbId = (data) => {
   const clearDetailDb = {
    id: data.id,
    forename: data.forename,
    surname: data.surname,
    description: data.description,
    image: data.image,
    nationality: data.nationality,
    dob: data.dob,
    teams: data.Teams.map((team)=>team.name).join(", "),
    
  }
   return clearDetailDb
   }

const dbDriversClear = (dataDriv) => {
    const driverArray = Object.values(dataDriv).map((driver) => ({
        id: driver.id,
        forename: driver?.forename,
        surname: driver?.surname,
        description: driver.description,
        image: driver.image,
        nationality: driver.nationality,
        teams: driver.Teams.map((team)=>team.name).join(", "),
        dob: driver.dob,
      }));
      return driverArray
}


const apiNameDriverClear =  (dataDrivApi) => {
     const clearDriversName = dataDrivApi.map((driver) => ({
    id: driver.id,
    forename: driver?.name?.forename,
    surname: driver?.name?.surname,
    description: driver.description,
    image:
      driver.image?.url ||
      "https://hips.hearstapps.com/autoweek/assets/s3fs-public/DPkZATWXUAAnsCz.jpg",
    nationality: driver.nationality,
    teams: driver.teams,
    dob: driver.dob,
    created: false,
}));

return clearDriversName
};

const clearDbDriver = (dbDrivers) => {
   const clearAllDb = dbDrivers.map((driver) => ({
          id: driver.id,
          forename: driver.forename,
          surname: driver.surname,
          description: driver.description,
          image: driver.image,
          nationality: driver.nationality,
          dob: driver.dob,
          teams: driver.Teams.map((team)=>team.name).join(", "),
          created: true,
          
        }))
      return  clearAllDb
}

const clearApiDriver = (apiDrivers) => {
   const clearAllApi = apiDrivers.map((driver) => ({
          id: driver.id,
          forename: driver?.name?.forename,
          surname: driver?.name?.surname,
          description: driver.description,
          image:
            driver?.image?.url ||
            "https://hips.hearstapps.com/autoweek/assets/s3fs-public/DPkZATWXUAAnsCz.jpg",
          nationality: driver.nationality,
          dob: driver.dob,
          teams: driver.teams,
          created: false,
      }));
    return clearAllApi
}



module.exports = {
    dbDriversClear,
    apiNameDriverClear,
    clearDbDriver,
    clearApiDriver,
    clearDetailDbId
  };