import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
// vvv Animals vvv //
import AnimalList from "../modules/animal/AnimalList";
import AnimalDetail from "../modules/animal/AnimalDetail";
import AnimalForm from "../modules/animal/AnimalForm";
// vvv Employees vvv //
import EmployeeList from "../modules/employee/EmployeeList";
import EmployeeForm from "../modules/employee/EmployeeForm";
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
          return <Home />;
        }}
      />
      <Route path="/login" component={Login} />
      {/* vvv Without the 'exact' keyword, the second route would also handle /animals/:animalId vvv  */}
      <Route exact path="/animals" render={props => {
        if (isAuthenticated()) {
        return <AnimalList {...props} />
        } else {
        return <Redirect to="/login" />
        }
        }} 
      />
      <Route path="/animals/:animalId(\d+)" render={(props) => {
  // Pass the animalId to the AnimalDetailComponent
     return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
        {...props}/>
   /* ^^^ {...props} = 'Spread Operator' - for <AnimalDetail> to have access 
    to the router history, we need to pass those props to the component. 
    All of the 'props' are copied onto the component's props. ^^^ //
    ^^^  This is a new route to handle a URL with the following pattern:
    http://localhost:3000/animals/1 or what ever the id is

    It will not handle the following URL because the `(\d+)`
    matches only numbers after the final slash in the URL
    http://localhost:3000/animals/jack ^^^ */
    }}
      />
      <Route path="/animals/new" render={(props) => {
        return <AnimalForm {...props} />
    }}
      />
      <Route exact path="/employees" render={(props) => {
        return <EmployeeList {...props} />
    }} 
      />
      <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
    }} />
      <Route exact path="/locations" render={(props) => {
          return <LocationList {...props} />
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
      <Route exact path="/owners" render={(props) => {
        return <OwnerList {...props} />
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