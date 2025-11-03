// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ACCESS_TOKEN } from '../constants';
import "../styles/Navbar.css"

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check initial login status
    const token = localStorage.getItem(ACCESS_TOKEN);
    setIsLoggedIn(!!token);

    // Listen for storage changes (when user logs in/out in another tab)
    const handleStorageChange = () => {
      const token = localStorage.getItem(ACCESS_TOKEN);
      setIsLoggedIn(!!token);
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events (when user logs in/out in same tab)
    const handleAuthChange = () => {
      const token = localStorage.getItem(ACCESS_TOKEN);
      setIsLoggedIn(!!token);
    };

    window.addEventListener('authChange', handleAuthChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#03A9F4' }}>
      <div className="container">
        {/* Logo and Brand */}
        <Link className="navbar-brand text-white fw-bold" to="/">
          MapMate
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/explore">Explore</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/suggest">Suggestions</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/liked">My Likes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/logout">Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
