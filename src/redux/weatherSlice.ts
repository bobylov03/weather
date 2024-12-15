import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '5065476828b8c7892c2726584eeba628'; 

interface WeatherState {
  cityWeather: Record<string, any>;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  cityWeather: {},
  loading: false,
  error: null,
};

export const fetchCityWeather = createAsyncThunk(
  'weather/fetchCityWeather',
  async (cityName: string) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    return { cityName, data: response.data };
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    removeCity: (state, action) => {
      delete state.cityWeather[action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCityWeather.fulfilled, (state, action) => {
        state.cityWeather[action.payload.cityName] = action.payload.data;
        state.loading = false;
      })
      .addCase(fetchCityWeather.rejected, (state, action) => {
        state.error = action.error.message || 'Ошибка';
        state.loading = false;
      });
  },
});

export const { removeCity } = weatherSlice.actions;

export default weatherSlice.reducer;
