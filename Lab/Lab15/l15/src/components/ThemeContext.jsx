 import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  // Define theme styles
  const themeStyles = {
    light: {
      backgroundColor: '#f7f9fc',
      color: '#333',
      transition: 'all 0.3s ease'
    },
    dark: {
      backgroundColor: '#222',
      color: '#f1f1f1',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={themeStyles[theme]} className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}