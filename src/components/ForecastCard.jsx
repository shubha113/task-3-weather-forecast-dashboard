import React from 'react';

const ForecastCard = ({ forecastData, onSelectDay, unit}) => {
  // Get a 5-day forecast by filtering the data (one entry per day, e.g., at 12:00 PM)
  const dailyForecasts = forecastData.list.filter((reading) =>
    reading.dt_txt.includes("12:00:00")
  );

  const tempUnit = unit === "metric" ? "°C" : "°F";

  return (
    <div className="forecast-card">
      {dailyForecasts.map((day, index) => (
        <div
          key={index}
          className='forecast-day'
          onClick={() => onSelectDay(day)}
        >
          <p>{new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: 'short', day: 'numeric' })}</p>
          <img
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
            alt="Weather Icon"
          />
          <p>{day.main.temp}{tempUnit}</p>
          <p>{day.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastCard;
