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

const initialState = {
  allDrivers: [],
  copyOrigiDrivers: [],
  filteredDrivers: [],
  allTeams: [],
  filteredTeams: [],
  driver: {},
  currentPage: 1,
  driversName: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DRIVERS:
      return {
        ...state,
        allDrivers: action.payload,
        copyOrigiDrivers: action.payload,
        filteredDrivers: action.payload,
      };

    case GET_ALL_TEAMS:
      return {
        ...state,
        allTeams: action.payload,
      };

    case GET_DRIVER_BY_NAME:
      return {
        ...state,
        allDrivers: action.payload,
      };

    case GET_DRIVER_ID:
      return {
        ...state,
        driver: action.payload,
      };

    case ORDER_DRIVERS:
      switch (action.payload) {
        case "All drivers":
          return {
            ...state,
            allDrivers: state.filteredDrivers,
          };
        case "A":
          return {
            ...state,
            allDrivers: [...state.allDrivers].sort((a, b) =>
              a.surname.localeCompare(b.surname)
            ),
          };
        case "D":
          return {
            ...state,
            allDrivers: [...state.allDrivers].sort((a, b) =>
              b.surname.localeCompare(a.surname)
            ),
          };
      }

    case ORDER_DRIVERS_DOB:
      const filterAgeOlder = [...state.allDrivers].sort(
        (a, b) => new Date(a.dob) - new Date(b.dob)
      );
      if (action.payload === "Asc") {
        return {
          ...state,
          allDrivers: filterAgeOlder,
        };
      }
      const filterAgeYounger = [...state.allDrivers].sort(
        (a, b) => new Date(b.dob) - new Date(a.dob)
      );
      if (action.payload === "desc") {
        return {
          ...state,
          allDrivers: filterAgeYounger,
        };
      }

    case FILTER_DRIVERS:
      switch (action.payload) {
        case "All drivers":
          return {
            ...state,
            allDrivers: state.filteredDrivers,
          };
        case "DB":
          return {
            ...state,
            allDrivers: state.filteredDrivers.filter(
              (driver) => driver.created
            ),
          };
        case "API":
          return {
            ...state,
            allDrivers: state.filteredDrivers.filter(
              (driver) => !driver.created
            ),
          };
      }

    case FILTER_TEAMS:
      const filteredDrivers = action.payload.drivers.filter((driv) => {
        if (driv.teams) {
          return driv.teams.includes(action.payload.selectedTeam);
        }
        return false;
      });
      if (action.payload.selectedTeam === "All teams") {
        return {
          ...state,
          allDrivers: state.filteredDrivers,
        };
      } else {
        return {
          ...state,
          allDrivers: filteredDrivers,
        };
      }

      case  SET_CURRENT_PAGE:
        return {
          ...state,
          currentPage: action.payload
        }

    case GO_BACK:
      return {
        ...state,
        allDrivers: [...state.filteredDrivers],
        currentPage: 1,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
