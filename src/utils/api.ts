import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.VITE_API_URL;

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
