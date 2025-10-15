import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      {/* Top Accent Line */}
      <div className="h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-primary-700"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Logo className="h-12" size="medium" width="32" />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base mb-6">
              Your trusted financial advisory partner in Dubai. We simplify the
              complex and guide you toward lasting financial success with clarity
              and confidence.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {[
                {
                  href: "#",
                  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
                {
                  href: "#",
                  path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                },
                {
                  href: "#",
                  path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                },
              ].map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center 
                             hover:bg-primary-500/30 hover:scale-110 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 text-gray-300 hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={icon.path}
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 border-l-4 border-primary-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-all duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 border-l-4 border-primary-500 pl-3">
              Contact Info
            </h4>
            <div className="space-y-4 text-gray-400 text-sm sm:text-base">
              <div className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-primary-400 mr-3 mt-1" />
                <span>Dubai, UAE</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="w-5 h-5 text-primary-400 mr-3" />
                <span>+971 4353 5218</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 text-primary-400 mr-3" />
                <span>info@aairaassist.ae</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {currentYear} <span className="text-primary-400 font-semibold">AairaAssist.ae</span>. 
            All rights reserved. | Trusted Financial Advisory Services in Dubai
          </p>
        </div>
      </div>

      {/* Subtle glow */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
    </footer>
  );
};

export default Footer;
