import Card from "../card/card";
import style from "./cards.module.css";
const Cards = ({firstIndex, lastIndex,allDrivers}) => {
    return (
        <div className = {style.container} >
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
            className = {style.cards}
          />
        ))}
        </div>
    )
}

export default Cards