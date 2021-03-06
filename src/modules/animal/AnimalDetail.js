import React, { useState, useEffect } from 'react';
import AnimalManager from './AnimalManager';
import './AnimalDetail.css'
import {firstLetterCase} from '../helpers'

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", imageUrl: "dog.svg" });
  const [isLoading, setIsLoading] = useState(true);

const handleDelete = () => {
  //invoke the delete function in AnimalManger and re-direct to the animal list.
setIsLoading(true);
AnimalManager.delete(props.animalId)
.then(() => props.history.push("/animals")
);
};

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId)
      .then(animal => {
        setAnimal({
          name: animal.name,
          breed: animal.breed,
          imageUrl: animal.imageUrl
        });
        setIsLoading(false);
      });
  }, [props.animalId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require(`./dogImages/${animal.imageUrl}`)} alt="My Dog" /> */}
          <img src={require(`./dogImages/dog.svg`)} alt="My Dog" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{firstLetterCase(animal.name)}</span></h3>
        <p>Breed: {firstLetterCase(animal.breed)}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
}

export default AnimalDetail;