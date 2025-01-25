import axios from "axios";
import {
  GET_ALL_DRIVERS,
  GET_ALL_TEAMS,
  GET_DRIVER_BY_NAME,
  GET_DRIVER_ID,
  ORDER_DRIVERS,
  ORDER_DRIVERS_DOB,
  FILTER_TEAMS,
  FILTER_DRIVERS,
  GO_BACK,
  SET_CURRENT_PAGE,
} from "../actionTypes";

export const getAllDrivers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios("http://localhost:3001/drivers");
      return dispatch({
        type: GET_ALL_DRIVERS,
        payload: data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const getAllTeams = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios("http://localhost:3001/teams");
      return dispatch({
        type: GET_ALL_TEAMS,
        payload: data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const getDriverByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/drivers?name=${name}`
      );
      return dispatch({ type: GET_DRIVER_BY_NAME, payload: data });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const getDriverId = (id) => {
  return async (dispatch) => {
    try {
      let response = (await axios.get(`http://localhost:3001/drivers/${id}`))
        .data;

      return dispatch({ type: GET_DRIVER_ID, payload: response });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const postDriver = (driverData) => {
  return async (dispatch) => {
    try {
      await axios.post("http://localhost:3001/drivers", driverData);
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const orderDrivers = (orden) => {
  return { type: ORDER_DRIVERS, payload: orden };
};

export const orderDriversDob = (dob) => {
  return { type: ORDER_DRIVERS_DOB, payload: dob };
};

export const filterTeams = (selectedTeam) => {
  return async (dispatch) => {
    try {
      console.log(selectedTeam);
      const { data } = await axios.get("http://localhost:3001/drivers");

      return dispatch({
        type: FILTER_TEAMS,
        payload: { drivers: data, selectedTeam: selectedTeam },
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const filterDrivers = (driver) => {
  return { type: FILTER_DRIVERS, payload: driver };
};

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
};

export const goback = () => {
  return { type: GO_BACK };
};
