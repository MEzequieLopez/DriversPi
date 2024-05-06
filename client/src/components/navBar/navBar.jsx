import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import style from "./navBar.module.css"
import SearchBar from "../searchBar/searchBar";
import Order from "../orderFilter/orderFilter";

const Nav = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const handleOrderChange = (order) => {
    // setCurrentOrder(order);
    if (order === "Asc" || order === "Desc") {
      dispatch(orderDriversDob(order));
    } else {
      dispatch(orderDrivers(order));
    }
  };

  return (
    <div
    className={style.navbar}
      style={{
        position: location.pathname === "/detail/:id" ? "relative" : "fixed",
      }}
    >
      
      <Link to= '/'>
        <button>LANDING</button>
      </Link>

      <Link to="/home">
        <button>HOME</button>
      </Link>

      <Link to="/form">
        <button>NEW DRIVER</button>
      </Link>

      <SearchBar />

      <Order handleOrderChange={handleOrderChange} />
    </div>
  );
};

export default Nav;