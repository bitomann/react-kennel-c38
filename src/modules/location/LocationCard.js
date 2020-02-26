import React from "react";
import "./Location.css";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./dog-shelter-260nw-388594126.webp')} alt="Prison Dog" />
        </picture>
        <h3>Name: <span className="card-locationName">
          {props.location.name}
        </span></h3>
        <p>Address: {props.location.address}</p>
        <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Closed</button>
      </div>
    </div>
  );
}

export default LocationCard;