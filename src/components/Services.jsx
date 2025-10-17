import React, { useState } from 'react';
import { 
  CreditCardIcon, 
  BuildingOfficeIcon, 
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon,
  XMarkIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import emailjs from '@emailjs/browser';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Inquiry form state
  const [inquiryData, setInquiryData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const openServiceModal = (service) => {
    setSelectedService(service);
    setInquiryData((prev) => ({ ...prev, service: service?.title || '' }));
    setIsModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    setSubmitStatus(null);
  };

  const handleInquiryChange = (e) => {
    const { name, value } = e.target;
    setInquiryData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceId = 'service_j1it8n7';
      const templateId = 'template_uvnmczx';
      const publicKey = 'h7cnMVE1nufu98OC7';

      const templateParams = {
        from_name: inquiryData.name,
        from_email: inquiryData.email,
        phone: inquiryData.phone,
        service: inquiryData.service || selectedService?.title || 'General',
        message: inquiryData.message,
        to_email: 'info@aairaassist.ae',
        reply_to: inquiryData.email
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSubmitStatus('success');
      setInquiryData({ name: '', phone: '', email: '', service: selectedService?.title || '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: UserIcon,
      title: 'Personal Loan',
      description: 'Flexible personal loans to meet your individual needs, from emergency expenses to personal projects.',
      features: ['Competitive Interest Rates', 'Flexible Repayment Terms', 'Quick Approval Process', 'Minimal Documentation']
    },
    {
      icon: BriefcaseIcon,
      title: 'Business Loan',
      description: 'Fuel your business growth with our tailored business loan solutions for expansion, working capital, and more.',
      features: ['Working Capital Finance', 'Term Loans', 'Equipment Financing', 'SME-focused Solutions']
    },
    {
      icon: HomeIcon,
      title: 'Mortgage',
      description: 'Navigate the property market with ease. We offer mortgage solutions for buying or refinancing your home.',
      features: ['Home Purchase Loans', 'Refinancing Options', 'Expert Guidance', 'Attractive Rates']
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Business Account',
      description: 'Manage your company finances efficiently with our comprehensive business bank accounts.',
      features: ['Multiple Currency Accounts', 'Online Banking Platform', 'Dedicated Relationship Manager', 'Trade Finance Services']
    },
    {
      icon: CreditCardIcon,
      title: 'Credit Cards',
      description: 'Choose from a range of credit cards that offer rewards, travel benefits, and financial flexibility.',
      features: ['Reward & Cashback Programs', 'Travel & Lifestyle Perks', 'Contactless Payments', 'Enhanced Security']
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We start with a comprehensive discussion about your financial goals and current situation.'
    },
    {
      number: '02',
      title: 'Analysis & Planning',
      description: 'Our experts analyze your needs and create a customized financial strategy.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We implement the agreed-upon solutions with careful attention to detail.'
    },
    {
      number: '04',
      title: 'Ongoing Support',
      description: 'Continuous monitoring and adjustments to ensure optimal performance.'
    }
  ];

  const whyChooseUs = [
    {
      icon: UserGroupIcon,
      title: 'Expert Team',
      description: 'Certified financial professionals with deep market knowledge'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Personalized Solutions',
      description: 'Tailored strategies that align with your unique goals'
    },
    {
      icon: ClockIcon,
      title: 'Proven Track Record',
      description: '10+ years of successful client relationships and results'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Comprehensive Support',
      description: 'End-to-end financial services under one roof'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Financial Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Comprehensive banking and financial advisory solutions tailored to meet your unique needs in Dubai
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary-200"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary-500" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => openServiceModal(service)}
                  className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-600 transition-colors duration-200"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional financial services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Our Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-w-4 aspect-h-3">
                  <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6">
                        <UserGroupIcon className="w-16 h-16 text-primary-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Professional Consultation</h3>
                      <p className="text-gray-600 text-lg">Expert financial advisors in our Dubai office</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={closeServiceModal}></div>
          <div className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl p-8 mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <selectedService.icon className="w-8 h-8 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                  <p className="text-gray-600">Detailed Information</p>
                </div>
              </div>
              <button 
                onClick={closeServiceModal} 
                aria-label="Close" 
                className="text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Service Overview</h4>
                <p className="text-gray-600 leading-relaxed">{selectedService.description}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquire Now Form */}
              <div className="pt-4 border-t">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Inquire Now</h4>

                {submitStatus === 'success' && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-green-700 text-sm font-medium">Thank you! Your inquiry has been sent.</span>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center">
                    <ExclamationTriangleIcon className="w-5 h-5 text-red-500 mr-2" />
                    <span className="text-red-700 text-sm font-medium">Sorry, there was an error. Please try again.</span>
                  </div>
                )}

                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={inquiryData.name}
                        onChange={handleInquiryChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={inquiryData.phone}
                        onChange={handleInquiryChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="+971 50 123 4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={inquiryData.email}
                        onChange={handleInquiryChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                      <select
                        name="service"
                        value={inquiryData.service}
                        onChange={handleInquiryChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">Select a service</option>
                        <option>Personal Loan</option>
                        <option>Business Loan</option>
                        <option>Mortgage</option>
                        <option>Business Account</option>
                        <option>Credit Cards</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={inquiryData.message}
                      onChange={handleInquiryChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                      placeholder="Tell us a bit about your needs..."
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <button 
                      type="button"
                      onClick={closeServiceModal}
                      className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Services;