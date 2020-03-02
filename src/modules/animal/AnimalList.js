import React, { useState, useEffect } from 'react';
//import the components we will need //
// vvv AnimalCard data is pulled to populate the return vvv // 
import AnimalCard from './AnimalCard';
import AnimalManager from './AnimalManager';

const AnimalList = (props) => {
  // The initial state is an empty array //
  const [animals, setAnimals] = useState([]);
  console.log("inside useState()")
  //  Hooks begin with 'use' useXXX //

  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return AnimalManager.getAll().then(animalsFromAPI => {
      console.log("about to call setAnimals()")
      setAnimals(animalsFromAPI)
    });
  };

  const deleteAnimal = id => {
    AnimalManager.delete(id)
      .then(() => AnimalManager.getAll().then(setAnimals));
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
    console.log("Inside useEffect()")
    // vvv The empty array argument tells React to call the function 
    // vvv on the first render of the component vvv //
  }, []);
console.log("About to return JSX", animals);

  // vvv Finally we use map() to "loop over" the animals array to show a list of animal cards vvv //
  return (
  <>
    <section className="section-content">
      <button type="button"
      className="btn"
      onClick={() => {props.history.push("/animals/new")}}>
      Admit Animal
      </button>
    </section>
    
    <div className="container-cards">
      {animals.map(animal =>
        <AnimalCard
          key={animal.id}
          animal={animal}
          deleteAnimal={deleteAnimal}
          {...props}
          />)}
    </div>
  </>
  );
};

export default AnimalList