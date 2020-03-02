import React from "react";
import { firstLetterCase } from "../helpers";
import { formatPhoneNumber } from "../helpers"
import "./Owner.css";

const ownerCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./jrGQI0U.jpg')} alt="Dumb Dog Owner" />
        </picture>
        <h3>Name: <span className="card-ownerName">
          {firstLetterCase(props.owner.name)}
        </span></h3>
        <p>Phone: {formatPhoneNumber(props.owner.phone)}</p>
        <button type="button" onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}>
        Edit
        </button>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Banned</button>
      </div>
    </div>
  );
}

export default ownerCard;