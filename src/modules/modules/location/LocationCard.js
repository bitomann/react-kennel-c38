import React from "react";
import "./Location.css";

const locationCard = (props) => {
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
      </div>
    </div>
  );
}

export default locationCard;