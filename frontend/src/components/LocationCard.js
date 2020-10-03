import React from "react";

import "../styles/LocationCard.css";

const LocationCard = (props) => {
  return (
    <div className="location-info">
      <ul>
        <li>{props.neighborhood}</li>
        <li>{props.address}</li>
        <li>{props.location}</li>
        <li>{props.hours}</li>
      </ul>
      <div className="image-container">
        <img src={props.image} alt={props.alt} />
      </div>
    </div>
  );
};

export default LocationCard;
