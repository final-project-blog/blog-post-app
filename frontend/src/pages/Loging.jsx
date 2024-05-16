import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Welcome Back!</h2>
      <p>Please login to continue.</p>
      <Link to="/login" className="login-link">
        Login
      </Link>
    </div>
  );
};

export default Login;
