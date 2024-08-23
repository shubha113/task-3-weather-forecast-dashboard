import React, { useState } from 'react';

const Navbar = ({ setCity, handleUnitToggle }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (inputValue.trim()) {
      setCity(inputValue);
    }
  };

  return (
    <header>
      <div className="search-section">
        <input
          type="text"
          id="city-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter city name..."
        />
        <button id="search-button" onClick={handleSearch}>
          Search
        </button>
        <button id="unit-toggle" onClick={handleUnitToggle}>
          °C/°F
        </button>
      </div>
    </header>
  );
};

export default Navbar;
