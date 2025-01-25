import style from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, surname, image, teams }) => {

  return (
    <div className={style.container} >
      <Link to={`/detail/${id}`} className={style.link} >
        <p  className={style.name} >
          {name} {surname}
        </p>
        
      </Link>

      <Link to={`/detail/${id}`}>
        <img  src={image} alt="" className={style.image} />
      </Link>
     
      {/* <h4 className={style.teams} >{teams}</h4> */}
     
    </div>
  );
};

export default Card;