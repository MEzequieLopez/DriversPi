import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllTeams, postDriver } from "../../redux/actions";
import validation from "./validation";
import style from "./form.module.css";

const Form = () => {
  const dispatch = useDispatch();

  const allTeams = useSelector((state) => state.allTeams);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllTeams());
  }, []);

  const [driverData, setDriverData] = useState({
    forename: "",
    surname: "",
    nationality: "",
    dob: "",
    description: "",
    image: "",
    teams: [],
  });

  const [errors, setErrors] = useState({
    forename: "",
    surname: "",
    nationality: "",
    dob: "",
    description: "",
    image: "",
    teams: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "teams") {
      if (value === "Escuderías") {
        return;
      }
    
    if (!driverData.teams.includes(value)) {
      setDriverData((prevState) => ({
        ...prevState,
        teams: [...prevState.teams, value],
      }));
      setErrors(
        validation({
          ...driverData,
          teams: [...driverData.teams, value],
        })
      );
    } else {
      setDriverData({
        ...driverData,
        [name]: value,
      });

      setErrors(
        validation({
          ...driverData,
          [name]: value,
        })
      );
    }}
  };

  console.log(driverData);

  const handleRemove = (team) => (e) => {
    e.preventDefault();
    setDriverData((prevState) => ({
      ...prevState,
      teams: prevState.teams.filter((escuderia) => escuderia !== team),
    }));

    setErrors(
      validation({
        ...driverData,
        teams: driverData.teams.filter((escuderia) => escuderia !== team),
      })
    );
  };

  const handleDisable = () => {
    let hasErrors = false;
    let hasEmptyFields = false;

    for (let err in errors) {
      if (errors[err] !== "") {
        hasErrors = true;
        break;
      }
    }
    for (let data in driverData) {
      if (driverData[data] === "") {
        hasEmptyFields = true;
        break;
      }
    }

    return hasErrors || hasEmptyFields;
  };

  const handleSubmit = async () => {
    try {
      const teamsAsString = driverData.teams.join(", ");
      const formWithTeamsAsString = {
        ...driverData,
        teams: teamsAsString,
      };
      dispatch(await postDriver(formWithTeamsAsString));
      alert("Driver created successfully");
    } catch (error) {
      alert(`Error creating driver: ${error.message}`);
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.formContainer}>
        <div className={style.formrow}>
          <div className={style.columnn}>
            <label>FORENAME</label>
            <input onChange={handleChange} name="forename" type="text" />
            {errors.forename ? <label>{errors.forename}</label> : null}

            <div className={style.columnn}>
              <label>SURNAME</label>
              <input onChange={handleChange} name="surname" type="text" />
              {errors.surname ? <label>{errors.surname}</label> : null}
            </div>
          </div>

          <div className={style.formrow}>
            <div className={style.columnn}>
              <label>NATIONALITY</label>
              <input onChange={handleChange} name="nationality" type="text" />
              {errors.nationality ? <label>{errors.nationality}</label> : null}

              <div className={style.columnn}></div>
              <label>IMAGE</label>
              <input onChange={handleChange} name="image" type="text" />
              {errors.image ? <label>{errors.image}</label> : null}
            </div>
          </div>

          <div className={style.formrow}>
            <div className={style.column}></div>
            <label>DATE OF BIRTH</label>
            <input onChange={handleChange} name="dob" type="date" />
            {errors.dob ? <label>{errors.dob}</label> : null}
          </div>

          <div className={style.column}>
            <label>TEAMS</label>
            <select onChange={handleChange} name="teams">
              <option value="Escuderías">ALL TEAMS</option>
              {[...allTeams]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((team) => (
                  <option key={team.id} value={team.name}>
                    {team.name}
                  </option>
                ))}
            </select>

            <div className={style.teamContainer}>
              {driverData.teams.map((team, index) => (
                <div key={index}>
                  <p>{team}</p>
                  <button onClick={handleRemove(team)} className={style.button}>
                    X
                  </button>
                </div>
              ))}
              {errors.teams ? <label>{errors.teams}</label> : null}
            </div>
          </div>
        </div>

        <div className={style.column}>
          <label>DESCRIPTION</label>
          <textarea onChange={handleChange} name="description" type="text" />
          {errors.description ? <label>{errors.description}</label> : null}
        </div>

        <button type="submit" disabled={handleDisable()}>
          CREATE
        </button>
      </form>
    </div>
  );
};

export default Form;
