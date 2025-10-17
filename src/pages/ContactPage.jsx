import React from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useSEO } from '../hooks/useSEO';

const ContactPage = () => {
  useSEO({
    title: 'Contact AairaAssist | Visit Our Office in Dubai',
    description: 'Get in touch with AairaAssist. Office Tower, Bank Street - 4th Floor, Fahidi Heights near Sharaf DG Metro, Dubai. Business hours Mon–Sat 9AM–5PM.',
    keywords: ['Contact', 'AairaAssist', 'Dubai', 'Financial Advisory'],
  });

  return (
    <div className="min-h-screen">
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
