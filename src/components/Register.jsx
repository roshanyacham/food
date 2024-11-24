import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css'; // Ensure this path is correct

const Register = ({ users, setUsers }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      alert('User already exists');
      return;
    }

    setUsers((prevUsers) => [...prevUsers, { username, password }]);
    alert('Registration successful!');
    navigate('/login'); // Redirect to login after registration
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
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
      <button onClick={handleRegister} className="btn">Register</button>
      <p className="login-link">
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Register;
