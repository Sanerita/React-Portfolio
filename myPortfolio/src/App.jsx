import React from 'react';
import Navbar from './components/navbar';
import HomePage from './components/HomePage';
import './index.css';
import AboutPage from './components/AboutPage';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HomePage />
      <AboutPage />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;

