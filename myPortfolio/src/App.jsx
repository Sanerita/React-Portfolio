import React from 'react';
import Navbar from './components/navbar';
import HomePage from './components/HomePage';
import './index.css';
import AboutPage from './components/AboutPage';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
// import Route from 'react-router-dom';

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

      {/* <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/Experience" component={Experience} />
          <Route path="/Projects" component={Projects} />
          <Route path="/ContactMe" component={ContactMe} />
        </Switch>
      </div>
    </Router> */}

    

    </div>
    
  );
};

export default App;


