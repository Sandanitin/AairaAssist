import React from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import { useSEO } from '../hooks/useSEO';

const AboutPage = () => {
  useSEO({
    title: 'About AairaAssist | Financial Advisory in Dubai',
    description: 'Learn about AairaAssist—your trusted financial advisory partner in Dubai with 10+ years of proven results.',
    keywords: ['AairaAssist', 'About', 'Financial Advisory', 'Dubai'],
  });

  return (
    <div className="min-h-screen">
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
