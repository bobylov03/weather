import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { fetchCityWeather, removeCity } from '../redux/weatherSlice';
import '../styles/CityCard.scss';  // Путь к стилям

interface CityCardProps {
  cityName: string;
}

const CityCard: React.FC<CityCardProps> = ({ cityName }) => {
  const dispatch = useDispatch();
  const cityWeather = useSelector((state: any) => state.weather.cityWeather[cityName]);
  const loading = useSelector((state: any) => state.weather.loading);

  useEffect(() => {
    if (!cityWeather) {
      dispatch(fetchCityWeather(cityName));
    }
  }, [dispatch, cityName, cityWeather]);

  return (
    <Card className="city-card">
      {loading ? (
        <Typography variant="h6">Загрузка...</Typography>
      ) : (
        <CardContent>
          <Typography variant="h5">{cityName}</Typography>
          {cityWeather && (
            <>
              <Typography variant="body1">Температура: {cityWeather.main.temp}°C</Typography>
              <Typography variant="body2">Влажность: {cityWeather.main.humidity}%</Typography>
              <Button variant="contained" color="primary" onClick={() => dispatch(removeCity(cityName))}>
                Удалить
              </Button>
            </>
          )}
        </CardContent>
      )}
    </Card>
  );
};

export default CityCard;
