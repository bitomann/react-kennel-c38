import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
// vvv Animals vvv //
import AnimalList from "../modules/animal/AnimalList";
import AnimalDetail from "../modules/animal/AnimalDetail";
import AnimalForm from "../modules/animal/AnimalForm";
import AnimalEditForm from "../modules/animal/AnimalEditForm";
// vvv Employees vvv //
import EmployeeList from "../modules/employee/EmployeeList";
import EmployeeDetail from "../modules/employee/EmployeeDetail";
import EmployeeForm from "../modules/employee/EmployeeForm";
import EmployeeEditForm from "../modules/employee/EmployeeEditForm";
// vvv Locations vvv //
import LocationList from "../modules/location/LocationList";
import LocationDetail from "../modules/location/LocationDetail";
import LocationForm from "../modules/location/LocationForm";
// vvv Owners vvv //
import OwnerList from "../modules/owner/OwnerList";
import OwnerForm from "../modules/owner/OwnerForm";

// vvv routes each listed component to the proper URL to be displayed vvv // 
const ApplicationViews = () => {
  // Check if credentials are in session storage returns true/false
const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  return (
    <React.Fragment>
      <Route exact path="/" render={props => {
          return <Home {...props} /> ;
    }}
      />
      <Route path="/login" component={Login} 
      />
      {/* vvv Without the 'exact' keyword, the second route would also handle /animals/:animalId vvv  */}
      <Route exact path="/animals" render={props => {
        if (isAuthenticated()) {
        return <AnimalList {...props} />
        } else {
        return <Redirect to="/login" />
        }
    }} 
      />
      <Route path="/animals/:animalId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
        return <AnimalEditForm {...props} />
      } else {
        return <Redirect to="/login" />
      }
    }}
      />
      <Route exact path="/animals/:animalId(\d+)" render={props => {
        if (isAuthenticated()) {
        return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
      } else {
        return <Redirect to="/login" />
      }
    }}
      />
      <Route path="/animals/new" render={(props) => {
        return <AnimalForm {...props} />
    }}
      />
      <Route exact path="/employees" render={props => {
        if (isAuthenticated()) {
        return <EmployeeList {...props} />
        } else {
        return <Redirect to="/login" />
    }
    }}
      />
      <Route path="/employees/:employeeId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
        return <EmployeeEditForm {...props} />
      } else {
        return <Redirect to="/login" />
    }
    }}
      />
      <Route exact path="/employees/:employeeId(\d+)" render={props => {
        if (isAuthenticated()) {
        return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} {...props} />
      } else {
        return <Redirect to="/login" />
      }
    }}
      />
      <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
    }} />
      <Route exact path="/locations" render={props => {
        if (isAuthenticated()) {
        return <LocationList {...props} />
        } else {
        return <Redirect to="/login" />
    }
    }}
      />
      <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
    }}
      />
      <Route path="/locations/:locationId(\d+)"
      render={(props) => {
        return <LocationDetail locationId={parseInt(props.match.params.locationId)}
       {...props}/>
    }} />
      <Route exact path="/owners" render={props => {
        if (isAuthenticated()) {
        return <OwnerList {...props} />
        } else {
        return <Redirect to="/login" />
    }
    }}
      />
      <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
    }}
      />
      <Route exact path="/locations/:locationId(\d+)" render={props => {
        if (isAuthenticated()) {
        return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
      } else {
        return <Redirect to="/login" />
      }
    }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;