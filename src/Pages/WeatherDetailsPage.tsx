// pages/WeatherDetailsPage.tsx
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import CityStore from '../Store/CityStore';
import WeatherDisplay from '../Components/WeatherDisplay';

const WeatherDetailsPage: React.FC = observer(() => {
  const { cityName } = useParams<{ cityName: string | any }>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    CityStore.fetchWeather(cityName)
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [cityName]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        <h1 className="text-3xl font-bold mb-4">Weather Details</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <WeatherDisplay cityName={cityName} />
        )}
      </div>
    </div>
  );
});

export default WeatherDetailsPage;
