import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCityWeather } from '../redux/weatherSlice';
import CityCard from './CityCard';
import '../styles/CityList.scss';

const CityList: React.FC = () => {
  const dispatch = useDispatch();
  const cityWeather = useSelector((state: any) => state.weather.cityWeather);
  const loading = useSelector((state: any) => state.weather.loading);

  const [cityName, setCityName] = useState('');

  const handleAddCity = () => {
    if (cityName) {
      dispatch(fetchCityWeather(cityName));
      setCityName('');
    }
  };

  return (
    <div className="city-list">
      <input
        type="text"
        placeholder="Введите название города"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button onClick={handleAddCity}>Добавить город</button>

      <div className="city-list__cards">
        {Object.keys(cityWeather).map((cityName) => (
          <CityCard key={cityName} cityName={cityName} />
        ))}

        {loading && <p>Загрузка...</p>}
      </div>
    </div>
  );
};

export default CityList;
