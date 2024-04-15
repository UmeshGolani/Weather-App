// components/WeatherDisplay.tsx
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import CityStore from '../Store/CityStore';
import WeatherData from '../Interfaces/WeatherData';

interface Props {
  cityName: string;
}

const WeatherDisplay: React.FC<Props> = observer(({ cityName }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await CityStore.fetchWeather(cityName);
      setWeatherData(data);
    };
    fetchWeatherData();
  }, [cityName]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { coord } = weatherData;

  return (
    <div>
      <h2>Weather for {cityName}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Description: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      <p>Pressure: {weatherData.main.pressure} hPa</p>

      <div style={{ width: '100%', height: '400px' }}>
        {/* Display Map */}
      </div>
    </div>
  );
});

export default WeatherDisplay;
