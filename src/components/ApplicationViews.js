import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "../modules/animal/AnimalList";
import AnimalDetail from "../modules/animal/AnimalDetail";
//only include these once they are built - previous practice exercise
import LocationList from "../modules/location/LocationList";
import EmployeeList from "../modules/employee/EmployeeList";
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
     <Route exact path="/animals" render={(props) => {
  return <AnimalList />
}} />
<Route path="/animals/:animalId(\d+)" render={(props) => {
  // Pass the animalId to the AnimalDetailComponent
  return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
  {...props}
  />
}} />
      <Route
        path="/employees"
        render={props => {
          return <EmployeeList />;
        }}
      />
      <Route
        path="/locations"
        render={props => {
          return <LocationList />;
        }}
      />
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