// src/components/Checkout.jsx
import React, { useState } from 'react';
import '../styles/Checkout.css'; // Make sure you have some basic styling

const Checkout = ({ cartItems }) => {
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  // Calculate the total amount for the cart items
  const calculateTotal = () => {
    return Object.values(cartItems).reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const totalAmount = calculateTotal();

  // Handle the payment logic
  const handlePayment = () => {
    // Add your payment processing logic here, e.g., interacting with a payment API.
    alert(`Payment of ₹${totalAmount.toFixed(2)} made using ${paymentMethod}!`);
    setIsPaymentSuccessful(true);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <h3>Your Cart Items:</h3>
      {Object.keys(cartItems).length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul className="cart-items">
          {Object.values(cartItems).map((item) => (
            <li key={item.id}>
              {item.name} - ₹{item.price.toFixed(2)} x {item.quantity}
            </li>
          ))}
        </ul>
      )}

      <h3>Total Amount: ₹{totalAmount.toFixed(2)}</h3>

      {isPaymentSuccessful ? (
        <div className="payment-success">
          <p>Thank you for your payment! Your order has been placed successfully.</p>
        </div>
      ) : (
        <div className="payment-form">
          <h3>Choose Payment Method:</h3>
          <label>
            <input
              type="radio"
              value="credit"
              checked={paymentMethod === 'credit'}
              onChange={() => setPaymentMethod('credit')}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              value="debit"
              checked={paymentMethod === 'debit'}
              onChange={() => setPaymentMethod('debit')}
            />
            Debit Card
          </label>
          <label>
            <input
              type="radio"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={() => setPaymentMethod('paypal')}
            />
            PayPal
          </label>
          <button onClick={handlePayment} className="pay-now-button">Pay Now</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
