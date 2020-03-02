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
import EmployeeWithAnimals from "../modules/employee/EmployeeWithAnimals";
// vvv Locations vvv //
import LocationList from "../modules/location/LocationList";
import LocationDetail from "../modules/location/LocationDetail";
import LocationForm from "../modules/location/LocationForm";
import LocationEditForm from "../modules/location/LocationEditForm";
// vvv Owners vvv //
import OwnerList from "../modules/owner/OwnerList";
import OwnerDetail from "../modules/owner/OwnerDetail";
import OwnerForm from "../modules/owner/OwnerForm";
import OwnerEditForm from "../modules/owner/OwnerEditForm";


// vvv routes each listed component to the proper URL to be displayed vvv // 
const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <React.Fragment>
      <Route exact path="/" render={props => {
          return <Home {...props} /> ;
    }}
      />
      <Route path="/login" render={props => {
    return <Login setUser={setUser} {...props} />
  }} />
      {/* vvv Without the 'exact' keyword, the second route would also handle /animals/:animalId vvv  */}
      {/* Animals */}
      <Route exact path="/animals" render={props => {
        if (hasUser) {
        return <AnimalList {...props} />
        } else {
        return <Redirect to="/login" />
        }
    }} 
      />
      <Route path="/animals/:animalId(\d+)/edit" render={props => {
        if (hasUser) {
        return <AnimalEditForm {...props} />
      } else {
        return <Redirect to="/login" />
      }
    }}
      />
      <Route exact path="/animals/:animalId(\d+)" render={props => {
        if (hasUser) {
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
      {/* Employees */}
      <Route exact path="/employees" render={props => {
        if (hasUser) {
        return <EmployeeList {...props} />
        } else {
        return <Redirect to="/login" />
    }
    }}
      />
      <Route path="/employees/:employeeId(\d+)/edit" render={props => {
        if (hasUser) {
        return <EmployeeEditForm {...props} />
      } else {
        return <Redirect to="/login" />
    }
    }}
      />
      <Route exact path="/employees/:employeeId(\d+)" render={props => {
        if (hasUser) {
        return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} {...props} />
      } else {
        return <Redirect to="/login" />
      }
    }}
      />
      <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
    }}
      />
      <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
          return <EmployeeWithAnimals {...props} />
    }}
      />
      {/* Locations */}
      <Route exact path="/locations" render={props => {
        return <LocationList {...props} />
    }}
      />
      <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
    }}
      />
      <Route path="/locations/:locationId(\d+)/edit" render={props => {
        if (hasUser) {
        return <LocationEditForm {...props} />
        } else {
        return <Redirect to="/login" />
    }
    }}
      />
      <Route path="/locations/:locationId(\d+)"
      render={(props) => {
        return <LocationDetail locationId={parseInt(props.match.params.locationId)}
       {...props}/>
    }} />
      {/* Owners */}
      <Route exact path="/owners" render={props => {
        if (hasUser) {
        return <OwnerList {...props} />
        } else {
        return <Redirect to="/login" />
    }
    }}
      />
      <Route path="/owners/:ownerId(\d+)/edit" render={props => {
      if (hasUser) {
      return <OwnerEditForm {...props} />
      } else {
      return <Redirect to="/login" />
    }
    }}
      />
      <Route exact path="/owners/:ownerId(\d+)" render={props => {
      if (hasUser) {
      return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} {...props} />
      } else {
      return <Redirect to="/login" />
    }
    }}
      />
      <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
    }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;