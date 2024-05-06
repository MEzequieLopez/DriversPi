import style from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, surname, image, teams }) => {

  return (
    <div className={style.container} >
      <Link to={`/detail/${id}`}>
        <h2  className={style.name} >
          {name} {surname}
        </h2>
        
      </Link>

      <Link to={`/detail/${id}`}>
        <img  src={image} alt="" className={style.image} />
      </Link>

      <h4 className={style.teams} >{teams}</h4>
    </div>
  );
};

export default Card;