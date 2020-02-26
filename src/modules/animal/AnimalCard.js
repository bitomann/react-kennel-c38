import React from "react";
import { Link } from "react-router-dom";
import { firstLetterCase } from '../helpers'
import "../animal/Animal.css";

const AnimalCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* vvv this follows the path to the "imageUrl" in the JSON file. path needs to be from the 
          same level as the folder. In turn renders a unique image on each card vvv */}
          <img src={require(`./dogImages/${props.animal.imageUrl}`)} alt="My Dog" />
        </picture>
        {/* vvv pulls in props from AnimalList vvv */}
        <h3>Name: <span className="card-petname">
          {firstLetterCase(props.animal.name)}
        </span></h3>
        <p>Breed: {firstLetterCase(props.animal.breed)}</p>
        <Link to={`/animals/${props.animal.id}`}>
        <button>Details</button>
        </Link>
        <button type="button" onClick={() => props.deleteAnimal(props.animal.id)}>Discharge</button>
      </div>
    </div>
  );
}

export default AnimalCard