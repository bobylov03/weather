import axios from 'axios';

const API_KEY = '5065476828b8c7892c2726584eeba628';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const fetchWeatherData = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data', error);
    throw error;
  }
};

export const fetchHourlyWeatherData = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.error('Error fetching hourly weather data', error);
    throw error;
  }
};
