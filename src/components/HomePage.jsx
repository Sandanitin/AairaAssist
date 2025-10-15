import React, { useState } from 'react';
import { ArrowRightIcon, UserGroupIcon, ShieldCheckIcon, LightBulbIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Footer from './Footer';
import heroImage from '../assets/hero.png';
import emailjs from '@emailjs/browser';
const Homepage = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryProduct, setInquiryProduct] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const closeInquiry = () => {
    setIsInquiryOpen(false);
    setSubmitStatus(null);
    setInquiryName('');
    setInquiryPhone('');
    setInquiryEmail('');
    setInquiryProduct('');
  };

  const submitInquiry = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
       // EmailJS configuration - Replace with your actual IDs
       const serviceId = 'service_j1it8n7';
       const templateId = 'template_uvnmczx';
       const publicKey = 'h7cnMVE1nufu98OC7';
      // Prepare template parameters
      const templateParams = {
        from_name: inquiryName,
        from_email: inquiryEmail,
        phone: inquiryPhone,
        product: inquiryProduct,
        message: `New inquiry from ${inquiryName} interested in ${inquiryProduct}`,
        to_email: 'info@aairaassist.ae',
        reply_to: inquiryEmail
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      // Auto-close modal after 3 seconds on success
      setTimeout(() => {
        closeInquiry();
      }, 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  const expertiseDescription = "At AairaAssist, every conversation starts with your vision. Every strategy ends in measurable success. We combine experience, integrity, and innovation to create results that endure. Your financial story deserves to be written with purpose — and we're here to help you write it, one confident step at a time.";
  const expertiseFeatures = ["Vision-Driven Results", "Measurable Success", "Purposeful Strategy"];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen with Split Layout */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-primary-600">
        <img src={heroImage} alt="AairaAssist hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-primary-500/20 rounded-full text-primary-200 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary-400 rounded-full mr-2"></span>
                Trusted Financial Partner
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Empowering Your
                <span className="text-primary-400 block">Financial Journey</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                In a world where finance moves fast and opportunity demands clarity, AairaAssist stands as your dedicated partner — simplifying the complex, personalizing the professional, and guiding you toward lasting success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => setIsInquiryOpen(true)} className="inline-flex items-center px-8 py-4 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Your Journey
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
               
              </div>
            </div>

            {/* Right Column - Visual Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-4">
                  <UserGroupIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">500+ Clients</h3>
                <p className="text-gray-300 text-sm">Happy customers</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 -mt-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <ShieldCheckIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">10+ Years</h3>
                <p className="text-gray-300 text-sm">Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mt-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <LightBulbIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">98% Success</h3>
                <p className="text-gray-300 text-sm">Rate</p>



                
              </div>
            </div>
          </div>
        </div>
      </section>

      {isInquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={closeInquiry}></div>
          <div className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl p-8 mx-4">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Inquire Now</h3>
                <p className="text-gray-600 mt-1">Fill out the form below to start your financial journey with us.</p>
              </div>
              <button onClick={closeInquiry} aria-label="Close" className="text-gray-400 hover:text-gray-600">✕</button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-green-700 font-medium">
                  Thank you! Your inquiry has been sent successfully. We'll contact you soon.
                </span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                <ExclamationTriangleIcon className="w-5 h-5 text-red-500 mr-3" />
                <span className="text-red-700 font-medium">
                  Sorry, there was an error sending your inquiry. Please try again or contact us directly.
                </span>
            </div>
            )}

            <form onSubmit={submitInquiry} className="space-y-5">
              <div className="grid grid-cols-1 gap-5">
                <label className="grid grid-cols-4 gap-4 items-center">
                  <span className="text-gray-700 font-medium col-span-1">Name</span>
                  <input
                    type="text"
                    className="col-span-3 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="John Doe"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    required
                  />
                </label>

                <label className="grid grid-cols-4 gap-4 items-center">
                  <span className="text-gray-700 font-medium col-span-1">Phone</span>
                  <input
                    type="tel"
                    className="col-span-3 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="+971 50 123 4567"
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    required
                  />
                </label>

                <label className="grid grid-cols-4 gap-4 items-center">
                  <span className="text-gray-700 font-medium col-span-1">Email</span>
                  <input
                    type="email"
                    className="col-span-3 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="john.doe@example.com"
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    required
                  />
                </label>

                <label className="grid grid-cols-4 gap-4 items-center">
                  <span className="text-gray-700 font-medium col-span-1">Product Interested In</span>
                  <select
                    className="col-span-3 w-full rounded-lg border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={inquiryProduct}
                    onChange={(e) => setInquiryProduct(e.target.value)}
                    required
                  >
                    <option value="" disabled>Select a product</option>
                    <option value="personal-banking">Personal Banking</option>
                    <option value="wealth-advisory">Wealth Advisory</option>
                    <option value="corporate-solutions">Corporate Solutions</option>
                    <option value="investment-planning">Investment Planning</option>
                  </select>
                </label>
                  </div>
                  
              <div className="flex justify-end gap-3 pt-2">
                <button 
                  type="button" 
                  onClick={closeInquiry} 
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-lg font-semibold flex items-center ${
                    isSubmitting 
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Submit Inquiry'
                  )}
                </button>
                </div>
            </form>
          </div>
        </div>
      )}

      

      

      {/* Section 3 - Hexagon Grid Layout */}
      <section className="py-20 bg-white relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full translate-y-48 -translate-x-48 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Vision.
              <span className="text-primary-500 block">Our Expertise.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{expertiseDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseFeatures.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                    <LightBulbIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature}</h3>
                  <p className="text-white/90 leading-relaxed">
                    At AairaAssist, every conversation starts with your vision. Every strategy ends in measurable success.
                  </p>
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  );
};

export default Homepage;
