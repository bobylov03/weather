// src/components/ThemeSwitcher.tsx
import React, { useState } from 'react';
import '../styles/components/ThemeSwitcher.scss';

const ThemeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark-theme', isDark);
    document.body.classList.toggle('light-theme', !isDark);
  };

  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeSwitcher;
