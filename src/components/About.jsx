import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
import { 
  ShieldCheckIcon, 
  UserGroupIcon, 
  GlobeAltIcon, 
  BoltIcon,
  FlagIcon
} from '@heroicons/react/24/outline';

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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Who We Are
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are a trusted financial advisory and banking solutions partner, delivering innovative strategies and expert guidance to individuals, families, and businesses.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are known for build a reputation for excellence, helping individuals and businesses navigate complex financial decisions with confidence. Our team combines deep local market knowledge with international best practices.
                </p>
              </div>
              
              {/* Feature Highlight */}
              <div className="flex items-center pt-6">
                <CheckIcon className="w-6 h-6 text-green-500 mr-3" />
                <span className="text-lg font-bold text-gray-900">10+ Years of Excellence</span>
              </div>
            </div>

            {/* Right Column - Professional Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-w-4 aspect-h-3">
                  <div className="w-full h-96 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                    {/* Professional Office Scene */}
                    <div className="relative w-full h-full bg-white">
                      {/* Office Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
                      
                      {/* Desk */}
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white"></div>
                      
                      {/* Professional Consultation Scene */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                            <UserGroupIcon className="w-12 h-12 text-primary-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional financial advisors in Dubai office</h3>
                          <p className="text-gray-600">Expert financial advisors ready to serve you</p>
                        </div>
                      </div>
                      
                      {/* Desk Items */}
                      <div className="absolute bottom-8 left-8 flex space-x-4">
                        <div className="w-8 h-8 bg-pink-300 rounded"></div>
                        <div className="w-8 h-8 bg-blue-300 rounded"></div>
                        <div className="w-12 h-8 bg-orange-200 rounded-full"></div>
                      </div>
                      
                      {/* Certificates on Wall */}
                      <div className="absolute top-8 right-8 flex space-x-2">
                        <div className="w-16 h-12 bg-white border border-gray-200 rounded shadow-sm"></div>
                        <div className="w-16 h-12 bg-white border border-gray-200 rounded shadow-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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