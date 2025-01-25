import { Link, useLocation } from "react-router-dom";
import style from "./navBar.module.css";
import SearchBar from "../searchBar/searchBar";
import Order from "../orderFilter/orderFilter";

const Nav = () => {
  const location = useLocation();

  return (
    <div className={style.navbar}>
      <nav className={style.navContent}>
        <div className={style.links}>
          <Link to="/"  >
            <button className= {style.button}>LANDING</button>
          </Link>
          <Link to="/home">
            <button className= {style.button}>HOME</button>
          </Link>
          <Link to="/form">
            <button className= {style.button} >NEW DRIVER</button>
          </Link>
        </div>
        <div className={style.search}>
          <SearchBar />
        </div>
        <div className={style.order}>
          <Order />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
{
  /* <div className={style.navbar}>
    //   <Link to="/">
    //     <button>LANDING</button>
    //   </Link>

    //   <Link to="/home">
    //     <button>HOME</button>
    //   </Link>

    //   <Link to="/form">
    //     <button>NEW DRIVER</button>
    //   </Link>

    //   <SearchBar />

    //   <Order />
    // </div> */
}
