import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./searchBar.module.css";
import { getDriverByName } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const allDrivers = useSelector((state) => state.allDrivers);
  console.log(allDrivers);

  const [name, setName] = useState("");
  

  const handleSearch = () => {
    if (!name || /\d/.test(name)) {
      alert("Enter a valid name");
    } else {
      dispatch(getDriverByName(name));
    }
  };
 
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className={style.filtercontainer}>
      <input
        type="search"
        value={name}
        onChange={handleChange}
        className={style.searchInput}
        placeholder="Search by name..."
       
      />
      <button className={style.searchbutton} onClick={handleSearch}>SEARCH</button>
    </div>
  );
};

export default SearchBar;
