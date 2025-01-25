import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDrivers, getAllTeams, goback, setCurrentPage } from "../../redux/actions";
import Pages from "../../components/pagees/pages";
import style from "./home.module.css";
import Card from "../../components/card/card";

const Home = () => {
  const dispatch = useDispatch();
  
  const driversPerPage = 14;
  
  const allDrivers = useSelector((state) => state.allDrivers);
  const allTeams = useSelector((state) => state.allTeams);
  const currentPage = useSelector((state) => state.currentPage);

  const lastIndex = currentPage * driversPerPage;
  const firstIndex = lastIndex - driversPerPage;

  const totalDrivers = allDrivers.length;

  useEffect(() => {
    if (!allDrivers.length) dispatch(getAllDrivers());
    if (!allTeams.length) dispatch(getAllTeams());
  }, []);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page)); // Cambiar de página.
  };

  const handleBack = () => {
    console.log("esta funciona?");
    
    dispatch(goback());
  };
  
  return (
    <div className={style.container}>
      <button className={style.backButton } onClick={handleBack} > Back </button>
      <div className={style.contentWrapper}>
        {allDrivers
          .slice(firstIndex, lastIndex)
          .map(({ id, forename, surname, image, teams }) => (
            <Card
              key={id}
              id={id}
              name={forename}
              surname={surname}
              image={image}
              teams={teams}
              className={style.card}
            />
          ))}
      </div>
      <div className={style.pageContent}>
        <Pages
          driversPerPage={driversPerPage}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          totalDrivers={totalDrivers}
        />
      </div>
      <footer> {"este es el footer"} </footer>
    </div>
  );
};
export default Home;
