import React from "react";

const LocationCard = () => {
    return (
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={require("./dog-shelter-260nw-388594126.webp")} alt="Prison Dog" />
            </picture>
            <h3>
              Name: <span className="card-locationName">Dog Jail</span>
            </h3>
            <p>Breed: Prison</p>
          </div>
        </div>
      );
};

export default LocationCard;