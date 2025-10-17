import React from 'react';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { useSEO } from '../hooks/useSEO';

const ServicesPage = () => {
  useSEO({
    title: 'Financial Services | Personal, Business, Mortgage | AairaAssist',
    description: 'Explore AairaAssist’s financial services: personal loans, business loans, mortgage, business accounts, and credit cards in Dubai.',
    keywords: ['Financial Services', 'Loans', 'Mortgage', 'Dubai', 'AairaAssist'],
  });

  return (
    <div className="min-h-screen">
      <main>
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
