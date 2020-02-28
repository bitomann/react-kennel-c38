import React, { useState, useEffect } from 'react';
import EmployeeManager from './EmployeeManager';
import './EmployeeDetail.css'
import {firstLetterCase} from '../helpers'

const EmployeeDetail = props => {
  const [employee, setEmployee] = useState({ name: "", position: "" });
  const [isLoading, setIsLoading] = useState(true);

const handleDelete = () => {
  //invoke the delete function in EmployeeManger and re-direct to the Employee list.
setIsLoading(true);
EmployeeManager.delete(props.employeeId)
.then(() => props.history.push("/employees")
);
};

  useEffect(() => {
    //get(id) from EmployeeManager and hang on to the data; put it into state
    EmployeeManager.get(props.employeeId)
      .then(employee => {
        setEmployee({
          name: employee.name,
          position: employee.position,
        });
        setIsLoading(false);
      });
  }, [props.employeeId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./9cb357ad1ea1387fa4706d8583e36781.png')} alt="SlenderMan" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{firstLetterCase(employee.name)}</span></h3>
        <p>position: {firstLetterCase(employee.position)}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
}

export default EmployeeDetail;