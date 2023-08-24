import React from 'react';
import Navbar from './components/navbar';
import HomePage from './components/HomePage';
import './index.css';
import AboutPage from './components/AboutPage';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HomePage />
      <AboutPage />
    </div>
  );
};

export default App;

