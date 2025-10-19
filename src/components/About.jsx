import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
import { 
  ShieldCheckIcon, 
  UserGroupIcon, 
  GlobeAltIcon, 
  BoltIcon,
  FlagIcon
} from '@heroicons/react/24/outline';
import aboutImage from '../assets/about.png';

const About = () => {
  const coreValues = [
    {
      icon: ShieldCheckIcon,
      title: "Excellence",
      description: "We strive for excellence in every financial solution we provide to our clients."
    },
    {
      icon: UserGroupIcon,
      title: "Client-Centric",
      description: "Your financial success is our priority. We tailor solutions to your unique needs."
    },
    {
      icon: GlobeAltIcon,
      title: "Global Perspective",
      description: "Local expertise with global insights to maximize your financial opportunities."
    },
    {
      icon: BoltIcon,
      title: "Innovation",
      description: "Leveraging cutting-edge financial technologies and strategies for optimal results."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner/Header Section */}
      <section className="bg-primary-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="text-white">AairaAssist Advisory</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Your trusted financial partner in Dubai for over 10 years, providing expert banking and investment advisory services
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-semibold mb-4">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  About AairaAssist
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Who We Are
                </h2>
                
                <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
              </div>
              
              <div className="space-y-8">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                  We are a trusted financial advisory and banking solutions partner, delivering innovative strategies and expert guidance to individuals, families, and businesses.
                </p>
                
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  We are known for building a reputation for excellence, helping individuals and businesses navigate complex financial decisions with confidence. Our team combines deep local market knowledge with international best practices.
                </p>
              </div>
              
              {/* Enhanced Feature Highlights */}
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <CheckIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <span className="text-xl font-bold text-gray-900">10+ Years of Excellence</span>
                    <p className="text-gray-600 text-sm">Proven track record in Dubai</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <UserGroupIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-xl font-bold text-gray-900">Professional financial advisors in Dubai office</span>
                    <p className="text-gray-600 text-sm">Expert financial advisors ready to serve you</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Professional Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-w-4 aspect-h-3">
                  <div className="w-full h-96 relative">
                    <img 
                      src={aboutImage} 
                      alt="Professional financial advisors in Dubai office" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      {/* <div className="text-center p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Professional financial advisors in Dubai office</h3>
                        <p className="text-lg">Expert financial advisors ready to serve you</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              Our Foundation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-primary-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The principles that guide everything we do at AairaAssist Advisory.
            </p>
          </div>

          {/* Core Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <FlagIcon className="w-8 h-8 text-primary-600" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
            To empower individuals and businesses in Dubai with expert financial guidance, innovative solutions, and personalized service that drives sustainable growth and financial success. We are committed to building long-term relationships based on trust, transparency, and exceptional results.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;