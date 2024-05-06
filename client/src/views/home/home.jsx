import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDrivers, getAllTeams, goback } from "../../redux/actions";
import Pages from "../../components/pagees/pages";
import Cards from "../../components/cards/cards";
import style from "./home.module.css";

const Home = () => {
  const [driversPerPage, setDriversPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentOrder, setCurrentOrder] = useState("A");

  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers);
  const allTeams = useSelector((state) => state.allTeams);
  
  const lastIndex = currentPage * driversPerPage;
  const firstIndex = lastIndex - driversPerPage;
  
  const totalDrivers = allDrivers.length;
  
  useEffect(() => {
    if (!allDrivers.length) dispatch(getAllDrivers());
    if (!allTeams.length) dispatch(getAllTeams());
  }, [allDrivers]);

  const handleBack = () => {
    dispatch(goback());
  };
  // className={style.button}
  return (
    <div className={style.container}>
      <button onClick={handleBack} className={style.button}>
        ALL DRIVERS
      </button>
      <Cards allDrivers={allDrivers}
      firstInde={firstIndex}
      lastIndex={lastIndex}
   
      />

      <Pages
        driversPerPage={driversPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalDrivers={totalDrivers}
      />
    </div>
  );
};
export default Home;