import React from 'react';
import { ArrowRightIcon, UserGroupIcon, ShieldCheckIcon, ChartBarIcon, LightBulbIcon, RocketLaunchIcon, CheckIcon } from '@heroicons/react/24/outline';
import Footer from './Footer';

const Homepage = () => {
  const sections = [
    {
      id: 1,
      icon: RocketLaunchIcon,
      headline: "Empowering Your Financial Journey with Clarity and Confidence",
      description: "In today's fast-paced financial world, success depends on more than access — it depends on insight. At AairaAssist, we bring expertise, strategy, and precision to your financial life. Whether personal or corporate, our approach is simple: understand your goals deeply, and design solutions that bring them within reach.",
      features: ["Expert Financial Strategy", "Personalized Solutions", "Market Insight"]
    },
    {
      id: 2,
      icon: UserGroupIcon,
      headline: "Where Personalized Banking Meets Trusted Advisory",
      description: "Your financial ambitions deserve more than a standard service. They deserve a partner who listens, understands, and acts with your best interests at heart. AairaAssist blends personalized banking guidance with strategic financial advisory, creating a seamless experience where every solution is tailored — never templated.",
      features: ["Tailored Banking Solutions", "Strategic Advisory", "Personal Partnership"]
    },
    {
      id: 3,
      icon: ShieldCheckIcon,
      headline: "Beyond Advice — We Build Lifelong Partnerships",
      description: "We don't just offer recommendations; we offer relationships. From your first consultation to ongoing financial support, AairaAssist becomes an extension of your vision. Our experts walk beside you through every milestone — guiding, refining, and ensuring your financial decisions create lasting value.",
      features: ["Long-term Relationships", "Ongoing Support", "Milestone Guidance"]
    },
    {
      id: 4,
      icon: ChartBarIcon,
      headline: "Redefining Simplicity in Complex Financial Landscapes",
      description: "Finance doesn't have to be overwhelming. With AairaAssist, complexity becomes clarity. We handle the fine details — from banking coordination and strategic planning to wealth optimization — so you can focus on what truly matters: growth, stability, and peace of mind.",
      features: ["Complexity Simplified", "Wealth Optimization", "Peace of Mind"]
    },
    {
      id: 5,
      icon: LightBulbIcon,
      headline: "Your Vision. Our Expertise. One Unified Future.",
      description: "At AairaAssist, every conversation starts with your vision. Every strategy ends in measurable success. We combine experience, integrity, and innovation to create results that endure. Your financial story deserves to be written with purpose — and we're here to help you write it, one confident step at a time.",
      features: ["Vision-Driven Results", "Measurable Success", "Purposeful Strategy"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen with Split Layout */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-primary-600">
        <div className="absolute inset-0 bg-black/20"></div>
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
                <button className="inline-flex items-center px-8 py-4 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Your Journey
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-200">
                  Speak to an Expert
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
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mt-8">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                  <ChartBarIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">AED 50M+</h3>
                <p className="text-gray-300 text-sm">Assets managed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 -mt-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <ShieldCheckIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">15+ Years</h3>
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

      {/* Section 1 - Zigzag Layout */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full -translate-y-48 translate-x-48 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500 rounded-full opacity-10"></div>
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 relative z-10">
                <div className="w-20 h-20 bg-primary-500 rounded-2xl flex items-center justify-center mb-6">
                  <RocketLaunchIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {sections[0].headline}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {sections[0].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {sections[0].features.map((feature, index) => (
                    <span key={index} className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="text-right">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Empowering Your
                  <span className="text-primary-500 block">Financial Journey</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Five pillars that define how we transform your financial journey with precision and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Timeline Layout */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
              <span className="text-primary-500 block">Together</span>
            </h2>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-green-500"></div>
            
            <div className="space-y-16">
              {sections.slice(1, 4).map((section, index) => (
                <div key={section.id} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className={`bg-white rounded-2xl shadow-lg p-8 border-t-4 ${
                      index === 0 ? 'border-primary-500' : 
                      index === 1 ? 'border-green-500' : 'border-blue-500'
                    }`}>
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                        index === 0 ? 'bg-primary-100' : 
                        index === 1 ? 'bg-green-100' : 'bg-blue-100'
                      }`}>
                        <section.icon className={`w-8 h-8 ${
                          index === 0 ? 'text-primary-500' : 
                          index === 1 ? 'text-green-500' : 'text-blue-500'
                        }`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {section.headline}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                      index === 0 ? 'bg-primary-500' : 
                      index === 1 ? 'bg-green-500' : 'bg-blue-500'
                    }`}></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Hexagon Grid Layout */}
      <section className="py-20 bg-white relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full translate-y-48 -translate-x-48 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Vision.
              <span className="text-primary-500 block">Our Expertise.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {sections[4].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections[4].features.map((feature, index) => (
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
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-900">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Design */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="block text-yellow-300">Financial Future?</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Let's redefine what financial partnership means. Let's build your future — together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-primary-500 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Your Journey Today
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-500 transition-all duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
