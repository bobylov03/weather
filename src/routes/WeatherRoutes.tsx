import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CityList from '../components/CityList';
import WeatherDetail from '../components/WeatherDetail';

const WeatherRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CityList />} />
        <Route path="/weather/:cityName" element={<WeatherDetail />} />
      </Routes>
    </Router>
  );
};

export default WeatherRoutes;
