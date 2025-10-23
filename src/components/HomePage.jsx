import React, { useState } from 'react';
import { ArrowRightIcon, UserGroupIcon, ShieldCheckIcon, LightBulbIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Footer from './Footer';
import heroImage from '../assets/hero.png';
import emailjs from '@emailjs/browser';
import { useSEO } from '../hooks/useSEO';
const Homepage = () => {
  useSEO({
    title: 'AairaAssist | Financial Advisory & Banking Services in Dubai',
    description: 'Trusted financial advisory in Dubai. Personal loans, business loans, mortgage advice, and more. Start your financial journey with AairaAssist.',
    keywords: ['AairaAssist', 'Financial Advisory', 'Dubai', 'Loans', 'Mortgage'],
  });
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryProduct, setInquiryProduct] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const closeInquiry = () => {
    setIsInquiryOpen(false);
    setSubmitStatus(null);
    setInquiryName('');
    setInquiryPhone('');
    setInquiryEmail('');
    setInquiryProduct('');
    setInquiryMessage('');
  };

  const submitInquiry = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - Replace with your actual IDs
      // EmailJS configuration - Replace with your actual IDs
      const serviceId = 'service_van68sx';
      const templateId = 'template_vvqwg6g';
      const publicKey = 'lp3xlBpSGL1BpQm73';
      // Prepare template parameters
      const templateParams = {
        from_name: inquiryName,
        from_email: inquiryEmail,
        phone: inquiryPhone,
        service: inquiryProduct,
        message: inquiryMessage || `New inquiry from ${inquiryName} interested in ${inquiryProduct}`,
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
                <button onClick={() => setIsInquiryOpen(true)} className="inline-flex items-center px-8 py-4 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 active:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 touch-manipulation">
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

              <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mt-4 text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <LightBulbIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">98% Success</h3>
                <p className="text-gray-300 text-sm">Rate</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Financial Collaborations Hub Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full translate-x-48 -translate-y-48 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full -translate-x-40 translate-y-40 opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              Trusted Partners
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Financial
              <span className="text-primary-600 block mt-2">Collaborations Hub</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Partnering with the UAE's leading financial institutions to bring you the best solutions, 
              competitive rates, and exceptional service across all your banking and financing needs.
            </p>
          </div>

          {/* Partners Carousel - Auto-scrolling */}
          <div className="relative overflow-hidden mb-12">
            <style>{`
              @keyframes scroll-left {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-scroll {
                animation: scroll-left 30s linear infinite;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}</style>
            
            <div className="flex gap-6 lg:gap-8 animate-scroll">
              {/* First set of logos */}
              {[
                { name: 'Emirates NBD', logo: '/brands/Emirates_NBD_logo_arabic.png', darkBg: false },
                { name: 'First Abu Dhabi Bank', logo: '/brands/First%20Abu%20Dhabi%20Bank%20(Fab)%20Logo%20Vector.svg%20.png', darkBg: false },
                { name: 'Dubai Islamic Bank', logo: '/brands/Dubai%20Islamic%20Bank%20Logo%20Vector.svg%20.png', darkBg: false },
                { name: 'ADCB', logo: '/brands/Adcb-Bank-Abu-Dhabi-Commercial-Bank-New-Logo-Vector.jpg', darkBg: false },
                { name: 'Mashreq Bank', logo: '/brands/Mashreq-Bank-Logo-Vector.jpg', darkBg: false },
                { name: 'Emirates Islamic', logo: '/brands/Emirates%20Islamic%20Bank%20Logo%20Vector.svg%20.png', darkBg: true },
                { name: 'RAKBANK', logo: '/brands/RAKBANK_idbbPuaOyt_1.png', darkBg: false },
                { name: 'HSBC', logo: '/brands/Hsbc%20Bank%20Logo%20Vector.svg%20.png', darkBg: false },
                { name: 'Citi Bank', logo: '/brands/Citi-Bank-Logo-Vector.jpg', darkBg: false },
                { name: 'Commercial Bank of Dubai', logo: '/brands/Commercial%20Bank%20of%20Dubai_idUvYDR3Jv_1.png', darkBg: false },
                { name: 'Deem Finance', logo: '/brands/Deem%20Finance_idirMJ49jf_1.png', darkBg: true },
                { name: 'Ajman Bank', logo: '/brands/ajman.png', darkBg: false },
                { name: 'Financial Services', logo: '/brands/ide8sLvI-b_logos.png', darkBg: false },
                { name: 'Wio Bank', logo: '/brands/w.jpeg', darkBg: true },
                { name: 'Beehive', logo: '/brands/download.png', darkBg: false },
                { name: 'AAFAQ Islamic Finance', logo: '/brands/images.jpeg', darkBg: true },
              ].concat([
                // Duplicate set for seamless loop
                { name: 'Emirates NBD', logo: '/brands/Emirates_NBD_logo_arabic.png', darkBg: false },
                { name: 'First Abu Dhabi Bank', logo: '/brands/First%20Abu%20Dhabi%20Bank%20(Fab)%20Logo%20Vector.svg%20.png', darkBg: false },
                { name: 'Dubai Islamic Bank', logo: '/brands/Dubai%20Islamic%20Bank%20Logo%20Vector.svg%20.png', darkBg: false },
                { name: 'ADCB', logo: '/brands/Adcb-Bank-Abu-Dhabi-Commercial-Bank-New-Logo-Vector.jpg', darkBg: false },
                { name: 'Mashreq Bank', logo: '/brands/Mashreq-Bank-Logo-Vector.jpg', darkBg: false },
                { name: 'Emirates Islamic', logo: '/brands/Emirates%20Islamic%20Bank%20Logo%20Vector.svg%20.png', darkBg: true },
                { name: 'RAKBANK', logo: '/brands/RAKBANK_idbbPuaOyt_1.png', darkBg: false },
                { name: 'HSBC', logo: '/brands/Hsbc%20Bank%20Logo%20Vector.svg%20.png', darkBg: false },
                { name: 'Citi Bank', logo: '/brands/Citi-Bank-Logo-Vector.jpg', darkBg: false },
                { name: 'Commercial Bank of Dubai', logo: '/brands/Commercial%20Bank%20of%20Dubai_idUvYDR3Jv_1.png', darkBg: false },
                { name: 'Deem Finance', logo: '/brands/Deem%20Finance_idirMJ49jf_1.png', darkBg: true },
                { name: 'Ajman Bank', logo: '/brands/ajman.png', darkBg: false },
                { name: 'Financial Services', logo: '/brands/ide8sLvI-b_logos.png', darkBg: false },
                { name: 'Wio Bank', logo: '/brands/w.jpeg', darkBg: true },
                { name: 'Beehive', logo: '/brands/download.png', darkBg: false },
                { name: 'AAFAQ Islamic Finance', logo: '/brands/images.jpeg', darkBg: true },
              ]).map((partner, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-primary-300 flex-shrink-0 w-64"
                  style={{ minWidth: '16rem' }}
                >
                  <div className={`flex items-center justify-center h-20 lg:h-24 rounded-lg p-3 ${
                    partner.darkBg 
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
                      : 'bg-white'
                  }`}>
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-110"
                      onError={(e) => {
                        console.error(`Failed to load logo for ${partner.name}`);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stats/CTA */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary-100 shadow-lg">
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Banking Partners</div>
            </div>
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Trusted Institutions</div>
            </div>
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100 shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">UAE Wide</div>
              <div className="text-gray-600 font-medium">Coverage</div>
            </div>
          </div>

          {/* Call to Action
          <div className="text-center mt-12">
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 active:bg-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
            >
              Explore Our Solutions
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
          </div> */}
        </div>
      </section>

      {isInquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={closeInquiry}></div>
          <div className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl p-4 sm:p-8 mx-4 max-h-[95vh] overflow-y-auto">
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

            <form onSubmit={submitInquiry} className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="John Doe"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="+971 50 123 4567"
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="john.doe@example.com"
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                  <select
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={inquiryProduct}
                    onChange={(e) => setInquiryProduct(e.target.value)}
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Personal Loan">Personal Loan</option>
                    <option value="Business Loan">Business Loan</option>
                    <option value="Mortgage">Mortgage</option>
                    <option value="Business Account">Business Account</option>
                    <option value="Credit Cards">Credit Cards</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    rows={4}
                    placeholder="Tell us a bit about your needs..."
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeInquiry}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 min-h-[44px] rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 active:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 touch-manipulation"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto px-6 py-3 min-h-[44px] rounded-lg font-semibold flex items-center justify-center transition-colors duration-200 touch-manipulation ${isSubmitting
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800'
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
