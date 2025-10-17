import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppToggle from './components/WhatsAppToggle';

import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <WhatsAppToggle />
      </div>
    </Router>
  );
}

export default App;

