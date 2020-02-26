import React from "react";
import "./Owner.css";

const ownerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./jrGQI0U.jpg')} alt="Dumb Dog Owner" />
        </picture>
        <h3>Name: <span className="card-ownerName">
          {props.owner.name}
        </span></h3>
        <p>Phone: {props.owner.phone}</p>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Banned</button>
      </div>
    </div>
  );
}

export default ownerCard;