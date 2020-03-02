import React, { useState, useEffect } from 'react';
//import the components we will need
import EmployeeCard from './EmployeeCard';
import EmployeeManager from './EmployeeManager';

const EmployeeList = (props) => {
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    // After the data comes back from the API, we
    //  use the setEmployees function to update state
    return EmployeeManager.getAll().then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
    });
  };

  const deleteEmployee = id => {
    EmployeeManager.delete(id)
      .then(() => EmployeeManager.getAll().then(setEmployees));
  };

  // got the employees from the API on the component's first render
  useEffect(() => {
    getEmployees();
    // vvv The empty array argument tells React to call the function 
    // vvv on the first render of the component vvv //
  }, []);

  // Finally we use map() to "loop over" the employees array to show a list of employee cards
  return (
  <>
    <section className="section-content">
      <button type="button" 
      className="btn"
      onClick={() => {props.history.push("/employees/new")}}>
      Add Employee
      </button>
    </section>

    <div className="container-cards">
      {employees.map(employee =>
        <EmployeeCard
          key={employee.id}
          employee={employee}
          deleteEmployee={deleteEmployee}
          {...props}
          />)}
    </div>
  </>
  );
};

export default EmployeeList