import React from "react";
import "./TopDestinations.css";

export const TopDestinations = () => {
  return (
    <React.Fragment>
      <h1 className="topTitle">Top Destinations</h1>
      <div className="destinationsGrid">
        <div className="destination">
          <h2>Bucuresti</h2>
        </div>
        <div className="destination">
          <h2>Paris</h2>
        </div>
        <div className="destination">
          <h2>Lisabona</h2>
        </div>
        <div className="destination">
          <h2>Berlin</h2>
        </div>
        <div className="destination">
          <h2>Amsterdam</h2>
        </div>
        <div className="destination">
          <h2>Madrid</h2>
        </div>
        <div className="destination">
          <h2>Berna</h2>
        </div>
        <div className="destination">
          <h2>NYC</h2>
        </div>
        <div className="destination">
          <h2>Sacramento</h2>
        </div>
        <div className="destination">
          <h2>Mexico City</h2>
        </div>
      </div>
    </React.Fragment>
  );
};
