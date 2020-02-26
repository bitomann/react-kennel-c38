import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
// vvv Animals vvv //
import AnimalList from "../modules/animal/AnimalList";
import AnimalDetail from "../modules/animal/AnimalDetail";
// vvv Locations vvv //
import LocationList from "../modules/location/LocationList";
import LocationDetail from "../modules/location/LocationDetail"
// vvv Employees vvv //
import EmployeeList from "../modules/employee/EmployeeList";
// vvv Owners vvv //
import OwnerList from "../modules/owner/OwnerList";

// vvv routes each listed component to the proper URL to be displayed vvv // 
const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      {/* vvv Without the 'exact' keyword, the second route would also handle /animals/:animalId vvv  */}
     <Route exact path="/animals" render={(props) => {
  return <AnimalList />
}} />
<Route path="/animals/:animalId(\d+)" render={(props) => {
  // Pass the animalId to the AnimalDetailComponent
  return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
  // vvv {...props} = 'Spread Operator' - for <AnimalDetail> to have access 
  // to the router history, we need to pass those props to the component. 
  // All of the 'props' are copied onto the component's props. vvv //
  {...props}/>
  //  ^^^  This is a new route to handle a URL with the following pattern:
  // http://localhost:3000/animals/1 or what ever the id is

  // It will not handle the following URL because the `(\d+)`
  // matches only numbers after the final slash in the URL
  // // http://localhost:3000/animals/jack ^^^ 
}} />
      <Route
        path="/employees"
        render={props => {
          return <EmployeeList />;
        }}
      />
      <Route
        exact path="/locations"
        render={props => {
          return <LocationList />;
        }}
      />
      <Route path="/locations/:locationId(\d+)"
      render={(props) => {
        return <LocationDetail locationId={parseInt(props.match.params.locationId)}
       {...props}/>
      }} />
      <Route
        path="/owners"
        render={props => {
          return <OwnerList />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;