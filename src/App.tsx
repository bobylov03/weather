import React from 'react';
import ThemeToggler from './ThemeToggler'; 
import CityList from './components/CityList';
const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Прогноз погоды</h1>
      <ThemeToggler />
      <CityList />
    </div>
  );
};

export default App;
