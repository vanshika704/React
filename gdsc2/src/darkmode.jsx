import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load user preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      // If dark mode is saved, apply it
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []); // Empty dependency array to run only once on mount

  const handleToggle = () => {
    // Toggle dark mode
    const newDarkMode = !darkMode;
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    // Update state to reflect the current mode
    setDarkMode(newDarkMode);
  };

  return (
    <button onClick={handleToggle}>
      <FontAwesomeIcon icon={faMoon} />
    </button>
  );
};

export default ThemeToggle;
