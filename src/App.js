// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantList from './components/RestaurantList';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin'; // Import Admin component
import Notification from './components/Notification'; // Import Notification component
import Checkout from './components/Checkout';

import './styles/Header.css';
import './styles/Footer.css';
import './styles/RestaurantList.css';
import './styles/Menu.css';
import './styles/Cart.css';
import './styles/Checkout.css';
import './styles/Notification.css'; // Import Notification styles

// Dummy data for restaurants
const dummyRestaurants = [
    {
        id: 1,
        name: 'Pizza Palace',
        image: 'https://via.placeholder.com/150',
        description: 'Best pizza in town!',
        menuItems: [],
    },
    {
        id: 2,
        name: 'Burger House',
        image: 'https://via.placeholder.com/150',
        description: 'Delicious burgers for everyone!',
        menuItems: [],
    },
];

const App = () => {
    const [cartItems, setCartItems] = useState({});
    const [users, setUsers] = useState([]);
    const [restaurants, setRestaurants] = useState(dummyRestaurants); // State to manage restaurants
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [notification, setNotification] = useState(''); // State for notification

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const newItems = { ...prevItems };
            if (newItems[item.id]) {
                newItems[item.id].quantity += 1;
            } else {
                newItems[item.id] = { ...item, quantity: 1 };
            }
            return newItems;
        });

        // Show notification
        setNotification(`${item.name} added to cart!`);
        setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => {
            const newItems = { ...prevItems };
            delete newItems[itemId];
            return newItems;
        });
    };

    const updateQuantity = (itemId, quantity) => {
        setCartItems((prevItems) => {
            const newItems = { ...prevItems };
            if (quantity <= 0) {
                delete newItems[itemId];
            } else if (newItems[itemId]) {
                newItems[itemId].quantity = quantity;
            }
            return newItems;
        });
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserName('');
    };

    const handleCloseNotification = () => {
        setNotification(''); // Clear notification on close
    };

    return (
        <Router>
            <Header isLoggedIn={isLoggedIn} userName={userName} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={
                    <>
                        {isLoggedIn ? (
                            <Admin restaurants={restaurants} setRestaurants={setRestaurants} />
                        ) : (
                            <RestaurantList restaurants={restaurants} />
                        )}
                    </>
                } />
                <Route path="/menu/:restaurantId" element={<Menu restaurants={restaurants} addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
                <Route path="/login" element={<Login users={users} setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} />
                <Route path="/register" element={<Register users={users} setUsers={setUsers} />} />
                <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
            </Routes>
            <Footer />
            {notification && ( // Render Notification if message exists
                <Notification message={notification} onClose={handleCloseNotification} />
            )}
        </Router>
    );
};

export default App;
