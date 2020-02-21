import React from "react";

const EmployeeCard = () => {
    return (
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={require("./cropped-cropped-Untitled-1-150x150.png")} alt="Devil Dude" />
            </picture>
            <h3>
              Name: <span className="card-employeeName">David Devillle</span>
            </h3>
            <p>Breed: Demon</p>
          </div>
        </div>
      );
};

export default EmployeeCard;