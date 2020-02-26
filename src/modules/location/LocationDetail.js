import React, { useState, useEffect } from 'react';
import LocationManager from './LocationManager';
import './LocationDetail.css';

const LocationDetail = props => {
    const [location, setLocation] = useState({ name: "", address: "" });
    const [isLoading, setIsLoading] = useState(true);

const handleDelete = () => {
    setIsLoading(true);
    LocationManager.delete(props.locationId)
    .then(() =>
    props.history.push("/locations"))
}

    useEffect(() => {
    //get(id) from locationManager and hang on to the data; put it into state
    LocationManager.get(props.locationId)
    .then(location => {
        setLocation({
            name: location.name,
            address: location.address
        });
        setIsLoading(false)
    });
    }, 
    [props.locationId]);

    return (
        <div className="card">
      <div className="card-content">
        <picture>
        <img src={require('./dog-shelter-260nw-388594126.webp')} alt="Prison Dog" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
        <p>Address: {location.address}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
        Close Location
        </button>
    </div>
    </div>
  );
}

export default LocationDetail;