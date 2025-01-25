import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDriverId } from "../../redux/actions";
import style from "./detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const driver = useSelector((state) => state.driver);

  useEffect(() => {
    dispatch(getDriverId(id));
  }, [id]);



  return (
    <div className={style.generalContent} >
    <div className={style.cont} >
      <div>
        <h2>
          NAME | {isNaN(Number(id)) ? driver?.forename : driver.name?.forename}{" "}
          {isNaN(Number(id)) ? driver?.surname : driver.name?.surname}
        </h2>
        <br />
        {driver.dob && <p>DOB | {driver.dob}</p>}
        <br />
        {driver.nationality && <p>NATIONALITY | {driver.nationality}</p>}
        <br />
        {driver.teams && <p>TEAMS | {driver.teams}</p>}
        <br />
        {driver.description && <p>DESCRIPTION | {driver.description}</p>}
      
      </div>

      {driver.image && (
        <img
          src={isNaN(Number(id)) ? driver.image : driver.image.url}
          alt={driver.name}
        />
      )}
      </div>
    </div>
  );
};

export default Detail;