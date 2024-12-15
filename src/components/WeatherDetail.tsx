import React from 'react';
import { useParams } from 'react-router-dom';

const WeatherDetail: React.FC = () => {
  const { cityName } = useParams<{ cityName: string }>();

  return (
    <div>
      <h1>{cityName}</h1>
    </div>
  );
};

export default WeatherDetail;
