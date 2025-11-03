import React from 'react';
import LocationCard from './Liked';
import { ACCESS_TOKEN } from '../constants';
import "../styles/Location.css"

function Location({place}) {
  const UserToken = localStorage.getItem(ACCESS_TOKEN);
    return (
        <div className="col-md-4 mb-4">
        <div className="card shadow">
          <img src={`https://raw.githubusercontent.com/anujkaran027/TRS-assets/7c8330dd18be449adf7d863248175356223fbf0d/assets/${place.id-1}.jpeg`} className="card-img-top sizeimg" alt="Destination 1" />
          <div className="card-body">
            <h5 className="card-title">{place.name}, {place.state}</h5>
            <p className="card-text">{place.description}, {place.city}</p>
            <LocationCard location={place} userToken={UserToken}></LocationCard>
          </div>
        </div>
      </div>
    );
}
export default Location