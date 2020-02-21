import React from "react";

const OwnerCard = () => {
    return (
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={require("./090916-sheffieldAL-1a.jpg")} alt="Dumb Dog Owner" />
            </picture>
            <h3>
              Name: <span className="card-ownerName">Joe Dip-sh**</span>
            </h3>
            <p>Breed: Idiot</p>
          </div>
        </div>
      );
};

export default OwnerCard;