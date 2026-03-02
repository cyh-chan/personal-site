import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';

const ThemeToggle = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label="Toggle Dark Mode"
      style={{
        background: 'none',
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
        cursor: 'pointer',
        fontSize: '1.2rem',
        padding: '0',
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
