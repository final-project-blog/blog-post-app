import React from 'react';
import Loging from '../pages/Loging';
import Register from '../pages/Register';
import Post from '../components/Post';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to our Website!</h1>
      <div className="components-container">
        <Loging />
        <Register />
        <Post />
      </div>
    </div>
  );
};

export default HomePage;
