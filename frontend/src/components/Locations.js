import React from "react";

import "../styles/Locations.css";
import LocationCard from "./LocationCard";

const Locations = () => {
  return (
    <div className="locations-container">
      <h1>Locations</h1>
      <div className="locations-container">
        <div className="locations-wrapper">
          <ul className="locations-list">
            <li>
              <LocationCard
                neighborhood="Neighborhood"
                address="123 Street Name St."
                location="Anywhere, Country"
                hours="6:00 AM - 6:00 PM, Seven Days a Week"
                image="../images/locations-1.jpg"
                alt="cafe-1"
              />
            </li>
            <li>
              <LocationCard
                neighborhood="Neighborhood"
                address="251 Avenue Name Ave."
                location="Anywhere, Country"
                hours="7:00 AM - 5:00 PM, Seven Days a Week"
                image="../images/locations-2.jpg"
                alt="cafe-2"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Locations;
