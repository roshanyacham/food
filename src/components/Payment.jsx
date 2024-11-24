// src/components/Payment.jsx
import React, { useState } from 'react';
import '../styles/Payment.css'; // Add CSS for styling

const Payment = ({ cartItems, totalAmount }) => {
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const handlePayment = () => {
    // Here you can handle payment processing
    alert(`Payment of ₹${totalAmount.toFixed(2)} made using ${paymentMethod}!`);
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <p>Total Amount: ₹{totalAmount.toFixed(2)}</p>
      <div>
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
      </div>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;
