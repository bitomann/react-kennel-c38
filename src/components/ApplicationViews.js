import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "../modules/modules/animal/AnimalList";
//only include these once they are built - previous practice exercise
import LocationList from "../modules/modules/location/LocationList";
import EmployeeList from "../modules/modules/employee/EmployeeList";
import OwnerList from "../modules/modules/owner/OwnerList";

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
      <Route path="/animals" render={(props) => {
      return <AnimalList />
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