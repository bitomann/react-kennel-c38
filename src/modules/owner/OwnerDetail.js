import React, { useState, useEffect } from 'react';
import OwnerManager from './OwnerManager';
import './OwnerDetail.css'
import {firstLetterCase} from '../helpers'

const OwnerDetail = props => {
  const [owner, setOwner] = useState({ name: "", phone: "" });
  const [isLoading, setIsLoading] = useState(true);

const handleDelete = () => {
  //invoke the delete function in OwnerManger and re-direct to the Owner list.
setIsLoading(true);
OwnerManager.delete(props.ownerId)
.then(() => props.history.push("/owners")
);
};

  useEffect(() => {
    //get(id) from OwnerManager and hang on to the data; put it into state
    OwnerManager.get(props.ownerId)
      .then(owner => {
        setOwner({
          name: owner.name,
          phone: owner.phone,
        });
        setIsLoading(false);
      });
  }, [props.ownerId]);

  return (
    <div className="card">
      <div className="card-content">
        {/* <picture>
          <img src={require(`./dogImages/dog.svg`)} alt="My Dog" />
        </picture> */}
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{firstLetterCase(owner.name)}</span></h3>
        <p>phone: {firstLetterCase(owner.phone)}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
}

export default OwnerDetail;