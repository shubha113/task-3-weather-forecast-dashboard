import React from 'react';

const CurrentWeatherCard = ({ weatherData, selectedDay, unit }) => {
  const tempUnit = unit === "metric" ? "°C" : "°F"; // Determine temperature unit
  const windSpeedUnit = unit === "metric" ? "km/h" : "mph"; // Determine wind speed unit

  // Use current weather data if no day is selected
  const dataToDisplay = selectedDay || weatherData; 
  const selectedDate = selectedDay ? new Date(selectedDay.dt_txt).toLocaleDateString("en-US") : null;

  return (
    <div className="current-weather-card">
      <div className="weather-header">
        <h1 className="city-name">{weatherData.name}</h1> {/* To show city name */}
        <img
          className="weather-icon"
          src={`http://openweathermap.org/img/wn/${dataToDisplay.weather[0].icon}@2x.png`} {/* To show current weather icon */}
          alt="Weather Icon"
        />
      </div>
      <h1 className="temperature">{dataToDisplay.main.temp}{tempUnit}</h1> {/* To show current temperature */}
      <div className="weather-details">
        <div className="detail-item">
          <p className='paragraph'>Min/Max Temp:</p>
          <p>{dataToDisplay.main.temp_min}{tempUnit} / {dataToDisplay.main.temp_max}{tempUnit}</p>
        </div>
        <div className="detail-item">
          <p className='paragraph'>Humidity:</p>
          <p>{dataToDisplay.main.humidity}%</p>
        </div>
        <div className="detail-item">
          <p className='paragraph'>Wind:</p>
          <p>{dataToDisplay.wind.speed} {windSpeedUnit} from {dataToDisplay.wind.deg}°</p>
        </div>
        <div className="detail-item">
          <p className='paragraph'>Description:</p>
          <p>{dataToDisplay.weather[0].description}</p>
        </div>
      </div>
      {selectedDate && (
        <div className="selected-date">
          <p className='paragraph'>Viewing Data for: {selectedDate}</p>
        </div>
      )}
    </div>
  );
};

export default CurrentWeatherCard;
