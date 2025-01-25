import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  orderDrivers,
  orderDriversDob,
  filterTeams,
  filterDrivers,
} from "../../redux/actions";
import style from "./order.module.css";

const Order = () => {
  const allTeams = useSelector((state) => state.allTeams);
  const dispatch = useDispatch();

  const [team, setTeam] = useState([]);

  const handleOrder = (e) => {
    const orderType = e.target.value;
    dispatch(
      orderType === "Asc" || orderType === "Desc"
        ? orderDriversDob(orderType)
        : orderDrivers(orderType)
    );
  };

  const handleFilter = (e) => {
    setTeam(e.target.value);
    dispatch(filterTeams(e.target.value));
  };

  const handleFilterDrivers = (e) => {
    dispatch(filterDrivers(e.target.value));
  };

  return (
    <div className={style.filtercontainer}>
      <select onChange={handleOrder} className={style.orderselect}>
        <option value="All drivers">DRIVERS</option>
        <option value="A">A-Z</option>
        <option value="D">Z-A</option>
        <option value="Asc">OLDER</option>
        <option value="desc">YOUNGER</option>
      </select>

      <select onChange={handleFilter} className={style.teamselect}>
        <option value="All teams">ALL TEAMS</option>
        {allTeams?.map((t) => (
          <option value={t.name} key={t.id}>
            {t.name}
          </option>
        ))}
      </select>

      <select  onChange={handleFilterDrivers} className={style.driverselect}>
        <option  value="All drivers">DRIVERS</option>
        <option  value="DB">DRIVERS CREATED</option>
        <option  value="API">API DRIVERS</option>
      </select>
    </div>
  );
};

export default Order;
