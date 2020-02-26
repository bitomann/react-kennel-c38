import React, { useState, useEffect } from 'react';
//import the components we will need
import OwnerCard from './OwnerCard';
import OwnerManager from './OwnerManager';

const OwnerList = () => {
  // The initial state is an empty array
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    // After the data comes back from the API, we
    //  use the setOwners function to update state
    return OwnerManager.getAll().then(ownersFromAPI => {
      setOwners(ownersFromAPI)
    });
  };

  const deleteOwner = id => {
    OwnerManager.delete(id)
      .then(() => OwnerManager.getAll().then(setOwners));
  };

  // got the owners from the API on the component's first render
  useEffect(() => {
    getOwners();
    // vvv The empty array argument tells React to call the function 
    // vvv on the first render of the component vvv //
  }, []);

  // Finally we use map() to "loop over" the owners array to show a list of owner cards
  return (
    <div className="container-cards">
      {owners.map(owner =>
        <OwnerCard
          key={owner.id}
          owner={owner}
          deleteOwner={deleteOwner} />)}
    </div>
  );
};

export default OwnerList