// src/components/Notification.jsx
import React from 'react';
import '../styles/Notification.css'; // Ensure you have this CSS file

const Notification = ({ message, onClose }) => {
  return (
    <div className="notification">
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Notification;
