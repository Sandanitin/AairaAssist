import React, { useState } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const services = [
    'Personal Loan',
    'Business Loan',
    'Mortgage',
    'Business Account',
    'Credit Cards',
    'Other'
  ];

  const faqs = [
    {
      question: 'How do I schedule a consultation?',
      answer: 'You can schedule a consultation by filling out our contact form, calling us directly, or visiting our office during business hours.'
    },
    {
      question: 'What documents should I bring?',
      answer: 'Please bring valid ID, recent bank statements, investment portfolios, and any relevant financial documents for your consultation.'
    },
    {
      question: 'Are consultations free?',
      answer: 'Yes, we offer complimentary initial consultations to understand your needs and explain how our services can benefit you.'
    },
    {
      question: 'Do you serve international clients?',
      answer: 'Yes, we serve both UAE residents and international clients looking for banking and investment opportunities in Dubai.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Ready to take control of your financial future? Contact our expert team for personalized banking and financial advisory services
          </p>
        </div>
      </section>

       {/* Contact Information Section */}
       <section className="py-16 md:py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
             {/* Our Location */}
             <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 text-center hover:shadow-xl transition-shadow duration-300">
               <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <MapPinIcon className="w-8 h-8 text-primary-500" />
               </div>
               <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Location</h3>
               <div className="space-y-1">
                 <p className="text-gray-700 font-medium">Dubai Financial District</p>
                 <p className="text-gray-600">Dubai, United Arab Emirates</p>
               </div>
             </div>

             {/* Phone Number */}
             <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 text-center hover:shadow-xl transition-shadow duration-300">
               <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <PhoneIcon className="w-8 h-8 text-secondary-500" />
               </div>
               <h3 className="text-lg font-semibold text-gray-900 mb-3">Phone Number</h3>
               <p className="text-gray-700 font-medium">+971-43535218</p>
             </div>

             {/* Email Address */}
             <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 text-center hover:shadow-xl transition-shadow duration-300">
               <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <EnvelopeIcon className="w-8 h-8 text-primary-500" />
               </div>
               <h3 className="text-lg font-semibold text-gray-900 mb-3">Email Address</h3>
               <div className="space-y-1">
                 <p className="text-gray-700 font-medium">info@aairaassist.ae</p>
                 <p className="text-gray-700 font-medium">hr@aairaassist.ae</p>
               </div>
             </div>

             {/* Business Hours */}
             <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 text-center hover:shadow-xl transition-shadow duration-300">
               <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <ClockIcon className="w-8 h-8 text-secondary-500" />
               </div>
               <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Hours</h3>
               <div className="space-y-1">
                 <p className="text-gray-700 font-medium">Monday to Friday: 9:00AM - 6:00PM</p>
                 <p className="text-gray-700 font-medium">Sunday: Closed</p>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Contact Form Section */}
       <section className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             {/* Left Column - Contact Form */}
             <div className="bg-white rounded-2xl shadow-lg p-8">
               <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
               
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                     Full Name *
                   </label>
                   <input
                     type="text"
                     id="name"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     required
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                     placeholder="Your full name"
                   />
                 </div>
                 
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                     Email Address *
                   </label>
                   <input
                     type="email"
                     id="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     required
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                     placeholder="your.email@example.com"
                   />
                 </div>

                 <div>
                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                     Phone Number
                   </label>
                   <input
                     type="tel"
                     id="phone"
                     name="phone"
                     value={formData.phone}
                     onChange={handleChange}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                     placeholder="+971 XX XXX XXXX"
                   />
                 </div>
                 
                 <div>
                   <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                     Service Interest
                   </label>
                   <select
                     id="service"
                     name="service"
                     value={formData.service}
                     onChange={handleChange}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                   >
                     <option value="">Select a service</option>
                     {services.map((service, index) => (
                       <option key={index} value={service}>
                         {service}
                       </option>
                     ))}
                   </select>
                 </div>

                 <div>
                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                     Message *
                   </label>
                   <textarea
                     id="message"
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     required
                     rows={5}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                     placeholder="Tell us about your financial goals and how we can help..."
                   />
                 </div>

                 <button
                   type="submit"
                   className="w-full bg-primary-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200 flex items-center justify-center"
                 >
                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                   </svg>
                   Send Message
                 </button>
               </form>
             </div>

             {/* Right Column - Office Information */}
             <div className="space-y-8">
               {/* Visit Our Office */}
               <div className="bg-white rounded-xl shadow-lg p-6">
                 <div className="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                   <div className="text-center">
                     <MapPinIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                     <p className="text-gray-500">Dubai Skyline</p>
                   </div>
                 </div>
                 <h3 className="text-xl font-semibold text-gray-900 mb-3">Visit Our Office</h3>
                 <p className="text-gray-600 leading-relaxed">
                   Located in the heart of Dubai's Financial District, our office is easily accessible and equipped with modern facilities for client consultations.
                 </p>
               </div>

               {/* Quick Contact */}
               <div className="bg-white rounded-xl shadow-lg p-6">
                 <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
                 <div className="space-y-3">
                   <div className="flex items-center">
                     <PhoneIcon className="w-5 h-5 text-gray-500 mr-3" />
                     <span className="text-gray-700">+971-43535218</span>
                   </div>
                   <div className="flex items-center">
                     <EnvelopeIcon className="w-5 h-5 text-gray-500 mr-3" />
                     <span className="text-gray-700">info@aairaassist.ae</span>
                   </div>
                   <div className="flex items-center">
                     <ClockIcon className="w-5 h-5 text-gray-500 mr-3" />
                     <span className="text-gray-700">Mon-Fri: 9AM-6PM, Sun: Closed</span>
                   </div>
                 </div>
               </div>

              {/* Emergency Support */}
              <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-xl shadow-lg p-6 text-white">
                 <h3 className="text-xl font-semibold mb-3">Emergency Support</h3>
                <p className="text-primary-100 mb-4">
                   For urgent financial matters outside business hours, our emergency support team is available 24/7.
                 </p>
                <button className="bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 w-full sm:w-auto">
                   Emergency Contact +971-43535218
                 </button>
               </div>
             </div>
           </div>
         </div>
       </section>


       {/* FAQ Section */}
       <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
             <p className="text-lg text-gray-600">Quick answers to common questions about our services</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {faqs.map((faq, index) => (
               <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                 <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                 <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
    </div>
  );
};

export default Contact;