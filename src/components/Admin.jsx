// src/components/Admin.jsx
import React, { useState } from 'react';
import '../styles/Admin.css'; // Import the CSS file

const Admin = ({ restaurants, setRestaurants }) => {
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantDescription, setRestaurantDescription] = useState('');
  const [restaurantImage, setRestaurantImage] = useState('');
  const [menuItemName, setMenuItemName] = useState('');
  const [menuItemPrice, setMenuItemPrice] = useState('');
  const [menuItemImage, setMenuItemImage] = useState('');

  const handleAddRestaurant = () => {
    const newRestaurant = {
      id: Date.now(),
      name: restaurantName,
      description: restaurantDescription,
      image: restaurantImage,
      menuItems: [],
    };
    setRestaurants((prev) => [...prev, newRestaurant]);
    setRestaurantName('');
    setRestaurantDescription('');
    setRestaurantImage('');
  };

  const handleAddMenuItem = (restaurantId) => {
    const newMenuItem = {
      id: Date.now(),
      name: menuItemName,
      price: parseFloat(menuItemPrice),
      image: menuItemImage,
    };

    setRestaurants((prev) =>
      prev.map((restaurant) =>
        restaurant.id === restaurantId
          ? {
              ...restaurant,
              menuItems: restaurant.menuItems ? [...restaurant.menuItems, newMenuItem] : [newMenuItem],
            }
          : restaurant
      )
    );

    setMenuItemName('');
    setMenuItemPrice('');
    setMenuItemImage('');
  };

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>
      
      <h3>Add New Restaurant</h3>
      <input
        type="text"
        placeholder="Restaurant Name"
        value={restaurantName}
        onChange={(e) => setRestaurantName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Restaurant Description"
        value={restaurantDescription}
        onChange={(e) => setRestaurantDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Restaurant Image URL"
        value={restaurantImage}
        onChange={(e) => setRestaurantImage(e.target.value)}
      />
      <button onClick={handleAddRestaurant}>Add Restaurant</button>

      <h3>Manage Restaurants</h3>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <h4>{restaurant.name}</h4>
          <p>{restaurant.description}</p>
          <img src={restaurant.image} alt={restaurant.name} width="100" />

          <h5>Add Menu Item</h5>
          <input
            type="text"
            placeholder="Menu Item Name"
            value={menuItemName}
            onChange={(e) => setMenuItemName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            value={menuItemPrice}
            onChange={(e) => setMenuItemPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={menuItemImage}
            onChange={(e) => setMenuItemImage(e.target.value)}
          />
          <button onClick={() => handleAddMenuItem(restaurant.id)}>Add Menu Item</button>

          <h5>Menu Items</h5>
          <ul>
            {restaurant.menuItems && restaurant.menuItems.length > 0 ? (
              restaurant.menuItems.map((item) => (
                <li key={item.id}>
                  {item.name} - ₹{item.price.toFixed(2)} <img src={item.image} alt={item.name} width="50" />
                </li>
              ))
            ) : (
              <p>No menu items available.</p>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Admin;
