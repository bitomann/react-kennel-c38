import React from "react";
import "../animal/Animal.css";

const AnimalCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./2018-03-17 16.26.31-1.jpg')} alt="My Dog" />
        </picture>
        {/* vvv pulls in props from AnimalList vvv */}
        <h3>Name: <span className="card-petname">
          {props.animal.name}
        </span></h3>
        <p>Breed: {props.animal.breed}</p>
        <button type="button" onClick={() => props.deleteAnimal(props.animal.id)}>Discharge</button>
      </div>
    </div>
  );
}

export default AnimalCard