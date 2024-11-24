// src/components/RestaurantList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RestaurantList.css'; // Import your CSS file

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="restaurant-list">
      <h2>Restaurants</h2>
      {restaurants.map((restaurant) => (
        <div className="restaurant-card" key={restaurant.id}>
          <h3>{restaurant.name}</h3>
          <p>{restaurant.description}</p>
          {restaurant.image && <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />}
          
          <Link to={`/menu/${restaurant.id}`}>
            <button className="menu-button">View Menu</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
