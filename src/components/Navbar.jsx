import React from 'react';

const Navbar = () => {
  return (
    <header>
      <div className="search-section">
        <input type="text" id="city-input" placeholder="Enter city name" />
        <button id="search-button">Search</button>
        <button id="unit-toggle">°C/°F</button>
      </div>
    </header>
  );
};

export default Navbar;
