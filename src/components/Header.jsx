import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      hasDropdown: true,
      subItems: [
        { name: 'Personal Loan Advisory', href: '/services#personal-loan' },
        { name: 'Business Loan Advisory', href: '/services#business-loan' },
        { name: 'Mortgage Advisory', href: '/services#mortgage' },
        { name: 'Business Account Advisory', href: '/services#business-account' },
        { name: 'Credit Card Advisory', href: '/services#credit-card' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <nav className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
            <Logo className="h-16" showText={false} size="large" width="64" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative group">
                      <Link
                        to={item.href}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center ${
                          location.pathname === item.href
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-gray-700 hover:text-primary-500'
                        }`}
                      >
                        {item.name}
                        <ChevronDownIcon className="ml-1 w-4 h-4" />
                      </Link>
                      
                      {/* Desktop Dropdown */}
                      <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        location.pathname === item.href
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-500'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-md text-gray-700 hover:text-primary-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 active:scale-95"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`w-full flex items-center justify-between px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                          location.pathname === item.href
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-gray-700 hover:text-primary-500'
                        }`}
                      >
                        <span>{item.name}</span>
                        {isServicesOpen ? (
                          <ChevronUpIcon className="w-5 h-5" />
                        ) : (
                          <ChevronDownIcon className="w-5 h-5" />
                        )}
                      </button>
                      
                      {isServicesOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-primary-500 hover:bg-gray-50 transition-colors duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                        location.pathname === item.href
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-500'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Login Button */}
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full bg-primary-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
