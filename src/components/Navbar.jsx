import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Define nav items
  const navItems = [
    { path: "/", label: "Home", exact: true },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
              onClick={handleNavClick}
            >
              <img 
                src="/logo.png" 
                alt="Aaira Assist Logo" 
                className="w-36 h-18 object-contain"
                onError={(e) => {
                  console.error('Logo failed to load:', e);
                  e.target.onerror = null;
                  e.target.src = '/vite.svg';
                }}
              />
              {/* <span className="text-lg font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                ANOWER LOGISTICS
              </span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  (item.exact ? location.pathname === item.path : location.pathname.startsWith(item.path))
                    ? "text-red-600 bg-red-50 font-semibold"
                    : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                }`}
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              ref={buttonRef}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-colors duration-200 min-h-[44px] min-w-[44px] touch-manipulation"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg" ref={menuRef}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-nav-link block px-3 py-3 rounded-md text-base font-medium min-h-[44px] flex items-center justify-center text-center touch-manipulation transition-colors duration-200 ${
                  (item.exact ? location.pathname === item.path : location.pathname.startsWith(item.path))
                    ? "text-red-600 bg-red-50 font-semibold"
                    : "text-gray-700 hover:text-red-600 hover:bg-red-50 active:bg-gray-100"
                }`}
                onClick={(e) => {
                  console.log('Mobile menu link clicked:', item.label, item.path);
                  e.preventDefault();
                  e.stopPropagation();
                  
                  // Close menu first
                  setIsMenuOpen(false);
                  
                  // Navigate programmatically
                  setTimeout(() => {
                    navigate(item.path);
                  }, 50);
                }}
                onTouchStart={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  console.log('Touch end on:', item.label, item.path);
                  e.preventDefault();
                  e.stopPropagation();
                  
                  // Close menu first
                  setIsMenuOpen(false);
                  
                  // Navigate programmatically
                  setTimeout(() => {
                    navigate(item.path);
                  }, 50);
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
