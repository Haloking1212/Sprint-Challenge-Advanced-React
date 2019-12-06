import React, { useState } from 'react';
import useChangeColor from "../hooks/useChangeColor";

const Navbar = () => {
  const [darkMode, setDarkMode] = useChangeColor(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;