import React, { useState } from 'react';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const totalAmount = Object.values(cartItems).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle the payment logic
  const handlePayment = () => {
    // Here, you'd integrate with your payment processing logic/API
    alert(`Payment of ₹${totalAmount.toFixed(2)} made using ${paymentMethod}!`);
    setIsPaymentSuccessful(true);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {Object.keys(cartItems).length > 0 ? (
        Object.values(cartItems).map((item) => (
          <div className="cart-item" key={item.id}>
            <p>{item.name} - ₹{item.price} x {item.quantity}</p>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <span style={{ margin: '0 10px' }}>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      <h3>Total Amount: ₹{totalAmount.toFixed(2)}</h3>

      {isPaymentSuccessful ? (
        <p>Thank you for your payment! Your order has been placed successfully.</p>
      ) : (
        <div className="payment-section">
          <h3>Select Payment Method:</h3>
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
          <button onClick={handlePayment} className="pay-now-button">
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
