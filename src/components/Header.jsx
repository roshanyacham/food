import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, userName, onLogout }) => {
  return (
    <header>
      <h1>Food Delivery App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        {isLoggedIn ? (
                    <>
                        <span>Welcome, {userName}!</span>
                        <button onClick={onLogout}>Logout</button> {/* Logout button */}
                    </>
                ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
