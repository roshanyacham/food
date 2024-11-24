// src/components/Menu.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Menu.css'; // Import CSS here

const Menu = ({ restaurants, addToCart }) => {
    const { restaurantId } = useParams();
    
    // Find the restaurant based on the restaurantId
    const restaurant = restaurants.find(restaurant => restaurant.id === parseInt(restaurantId));
    
    // Get the menu items for the found restaurant
    const itemsForRestaurant = restaurant ? restaurant.menuItems : [];

    return (
        <div className="menu-container">
            <h2>{restaurant ? restaurant.name : 'Restaurant Not Found'}</h2>
            {itemsForRestaurant.length > 0 ? (
                itemsForRestaurant.map(item => (
                    <div key={item.id} className="menu-item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>Price: ₹{item.price.toFixed(2)}</p>
                        <button onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))
            ) : (
                <p>No items found for this restaurant.</p>
            )}
        </div>
    );
};

export default Menu;
