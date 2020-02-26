import React from "react";
import "./Employee.css";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./9cb357ad1ea1387fa4706d8583e36781.png')} alt="SlenderMan" />
        </picture>
        <h3>Name: <span className="card-employeeName">
          {props.employee.name}
        </span></h3>
        <p>Position: {props.employee.position}</p>
        <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fired</button>
      </div>
    </div>
  );
}

export default EmployeeCard;