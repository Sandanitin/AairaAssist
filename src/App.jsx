import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppToggle from './components/WhatsAppToggle';
import HomePage from './components/HomePage';

import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <React.StrictMode>
      <ScrollToTop />
      <Header />
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
   
      {/* <WhatsAppToggle /> */}
    </React.StrictMode>
  );
}

export default App;
