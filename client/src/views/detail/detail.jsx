import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDriverId } from "../../redux/actions";

// import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const driver = useSelector((state) => state.driver);

  useEffect(() => {
    dispatch(getDriverId(id));
  }, [id]);

  console.log("Render with driver data:", driver);

  return (
    <div >
      <div>
        <h2>
          NAME | {isNaN(Number(id)) ? driver?.forename : driver.name?.forename}{" "}
          {isNaN(Number(id)) ? driver?.surname : driver.name?.surname}
        </h2>

        {driver.dob && <p>DOB | {driver.dob}</p>}
        {driver.nationality && <p>NATIONALITY | {driver.nationality}</p>}
        {driver.teams && <p>TEAMS | {driver.teams}</p>}
        {driver.description && <p>DESCRIPTION | {driver.description}</p>}
      </div>

      {driver.image && (
        <img
          src={isNaN(Number(id)) ? driver.image : driver.image.url}
          alt={driver.name}
        />
      )}
    </div>
  );
};

export default Detail;