const { Team } = require("../db");
// const URL = "http://localhost:5000/drivers";
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const URL = process.env.URL_API;

const getAllTeams = async () => {
  const teamCount = await Team.count();
  if (teamCount === 0) {
    const { data } = await axios.get(`${URL}`);

    const teamsApi = [];
    data.forEach((driver) => {
      if (driver && driver.teams) {
        //hay 508 drivers y hay 4 que no tienen la propiedad "teams"
        if (!driver.teams.includes(",")) {
          teamsApi.push(driver.teams);
        } else {
          const teamsArray = driver.teams.split(",").map((team) => team.trim());
          teamsApi.push(...teamsArray);
        }
      }
    });
    // Remover duplicados si es necesario
    const uniqueTeams = [...new Set(teamsApi)];
    // Crea instancias de Team
    for (const team of uniqueTeams) {
      await Team.create({
        name: team,
      });
    }
  }

  const teamsBDD = await Team.findAll();
  return teamsBDD;
};

module.exports = { getAllTeams };


//Este controlador se encarga de obtener todos los equipos de la base de datos local y, en caso de que no haya equipos, los recopila de la API externa y los guarda en la base de datos local. Veamos algunos puntos relevantes:

//Método getAllTeams:
//Verifica si hay equipos en la base de datos local.
//Si no hay equipos, realiza una solicitud a la API externa para obtener datos de conductores.
//Filtra y procesa la información obtenida de la API, extrayendo los equipos de los conductores.
//Elimina duplicados y crea instancias de Team en la base de datos local.