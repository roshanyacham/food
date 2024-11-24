import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Ensure this path is correct

const Login = ({ users, setIsLoggedIn, setUserName }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // New state for admin login
  const navigate = useNavigate();

  const handleLogin = () => {
    // Static admin credentials
    const adminUsername = 'admin';
    const adminPassword = 'admin123';

    // Check for admin login
    if (isAdmin) {
      if (username === adminUsername && password === adminPassword) {
        setIsLoggedIn(true);
        setUserName(username);
        alert('Admin logged in successfully!');
        navigate('/'); // Redirect to home after admin login
      } else {
        alert('Invalid admin credentials');
      }
      return;
    }

    // Check for user login
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setIsLoggedIn(true);
      setUserName(username);
      alert('User logged in successfully!');
      navigate('/'); // Redirect to home after user login
    } else {
      alert('Invalid user credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button onClick={handleLogin} className="btn">Login</button>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isAdmin}
            onChange={() => setIsAdmin(!isAdmin)}
          />
          Admin Login
        </label>
      </div>
      <p className="register-link">
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login;
