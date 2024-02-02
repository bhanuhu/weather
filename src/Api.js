import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('shimla');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';

  const getWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=730a8e9a44eabe53edbe9477cd0bfb50`);
      
      setWeatherData(response.data);
      console.log(weatherData)
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  return (
    <div>
      <label htmlFor="cityInput">Enter City:</label>
      <input
        type="text"
        id="cityInput"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {weatherData && (
        <div>
          <h2>{weatherData.city.name}</h2>
          
        </div>
      )}

      {!weatherData && city && (
        <p>No weather data available for {city}</p>
      )}
    </div>
  );
};

export default Weather;