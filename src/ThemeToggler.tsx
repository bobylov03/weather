// ThemeToggler.tsx
import React, { useState, useEffect } from 'react';

const ThemeToggler: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Сохраняем тему в localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Переключение темы
  const toggleTheme = () => {
    setIsDarkMode(prevState => {
      const newTheme = !prevState ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme); // Сохраняем тему в localStorage
      return !prevState;
    });
  };

  // Применяем тему
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button onClick={toggleTheme} className="theme-toggler">
      {isDarkMode ? 'Светлая тема' : 'Темная тема'}
    </button>
  );
};

// Экспорт по умолчанию
export default ThemeToggler;
