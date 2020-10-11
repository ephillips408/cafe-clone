import React from "react";

import "../styles/Locations.css";
import LocationCard from "./LocationCard";

import locationData from "../locationData"

const Locations = () => {
  return (
    <div className="locations-container">
      <h1>Locations</h1>
      <div className="locations-container">
        <div className="locations-wrapper">
          <ul className="locations-list">
            {locationData.map((loc) => (
              <li>
                <LocationCard
                  neighborhood={loc.neighborhood}
                  address={loc.address}
                  location={loc.location}
                  hours={loc.hours}
                  image={loc.image}
                  alt={loc.alt}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Locations;
