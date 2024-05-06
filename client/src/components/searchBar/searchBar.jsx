import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './searchBar.module.css';
import { getDriverByName } from "../../redux/actions";


const SearchBar = () => {

    const dispatch = useDispatch();

    const allDrivers = useSelector((state) => state.allDrivers)


    const [name, setName] = useState("");

    const handleSearch = () => {
        if (!name || !isNaN(name))
          return alert("Enter a valid name");
        dispatch(getDriverByName(name));
      };

const handleChange = (event) => {
   setName(event.target.value)
};
    return(
        <div className= {style.filtercontainer} >

            <input type= 'search' value= {name} onChange={handleChange} className={style.searchInput}    placeholder="Search by name..." />
            <button onClick={handleSearch} >SEARCH</button>

        </div>
    )
};


export default SearchBar;