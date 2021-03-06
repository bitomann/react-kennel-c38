import React from "react";
import { firstLetterCase } from "../helpers";
import "./Location.css";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./dog-shelter-260nw-388594126.webp')} alt="Prison Dog" />
        </picture>
        <h3>Name: 
          <span className="card-locationName">
          {firstLetterCase(props.locationObject.name)}
          </span>
        </h3>
        <p>Address: {props.locationObject.address}</p>
        <button type="button" onClick={() => { props.history.push(`/locations/${props.locationObject.id}/details`) }}>
        Details
        </button>
        <button type="button" onClick={() => props.history.push(`/locations/${props.locationObject.id}/edit`)}>
        Edit
        </button>
        <button type="button" onClick={() => props.deleteLocation(props.locationObject.id)}>Closed</button>
      </div>
    </div>
  );
}

export default LocationCard;