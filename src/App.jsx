import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CurrentWeatherCard from './components/CurrentWeatherCard';
import ForecastCard from './components/ForecastCard';
import './styles.css';

function App() {
  const [selectedDay, setSelectedDay] = useState(null); // State for the day selected by the user
  const [weatherData, setWeatherData] = useState(null); // State for current weather data
  const [forecastData, setForecastData] = useState(null); // State for forecast data
  const [city, setCity] = useState("New Delhi"); // State for the city name, default is New Delhi
  const [unit, setUnit] = useState("metric"); // State for the unit system ("metric" for Celsius, "imperial" for Fahrenheit)
  const [error, setError] = useState(null); // State for handling errors

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        setError(null); // Reset error state before fetching data
        const apiKey = "d108aae0babdb35b400816312a190376";
        
        // Fetch current weather data
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
        );
        if (!weatherResponse.ok) throw new Error("City not found"); // Handle errors
        const weatherJson = await weatherResponse.json();
        setWeatherData(weatherJson); // Set current weather data

        // Fetch 5-day forecast data
        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${unit}`
        );
        if (!forecastResponse.ok) throw new Error("City not found"); // Handle errors
        const forecastJson = await forecastResponse.json();
        setForecastData(forecastJson); // Set forecast data
      } catch (err) {
        setError(err.message); // Update error state if any error occurs
      }
    }

    fetchWeatherData(); // Fetch data when city or unit changes
  }, [city, unit]); // Dependency array: effect runs when either city or unit changes

  const handleUnitToggle = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric")); // Toggle between metric and imperial units
  };

  return (
    <div className="App">
      <Navbar setCity={setCity} handleUnitToggle={handleUnitToggle} /> {/* Pass setCity and handleUnitToggle to Navbar */}
      <main>
        {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
        <div className="main-content">
          {weatherData && (
            <CurrentWeatherCard 
              weatherData={weatherData} 
              selectedDay={selectedDay} 
              unit={unit} 
            />
          )}
          {forecastData && (
            <ForecastCard 
              forecastData={forecastData} 
              onSelectDay={setSelectedDay} 
              unit={unit} 
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
