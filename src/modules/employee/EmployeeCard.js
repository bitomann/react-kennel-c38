import React from "react";
import { firstLetterCase } from "../helpers"
import "../employee/Employee.css";

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./9cb357ad1ea1387fa4706d8583e36781.png')} alt="SlenderMan" />
        </picture>
        <h3>Name: 
          <span className="card-employeeName">
          {firstLetterCase(props.employee.name)}
        </span>
        </h3>
        <p>Position: {firstLetterCase(props.employee.position)}</p>
        <button type="button" onClick={() => props.history.push(`/employees/${props.employee.id}/edit`)}>
        Edit
        </button>
        <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fire</button>
        <button type="button" onClick={() => { props.history.push(`/employees/${props.employee.id}/details`) }}>
        Details
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;