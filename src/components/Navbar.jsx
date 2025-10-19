import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

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
        setMobileDropdownOpen(null);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside, {
        passive: true,
      });
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: "Home", href: "/", hasDropdown: false },
    { name: "About", href: "/about", hasDropdown: false },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      subItems: [
        { name: "Personal Loan", href: "/services#personal-loan" },
        { name: "Business Loan", href: "/services#business-loan" },
        { name: "Mortgage", href: "/services#mortgage" },
        { name: "Business Account", href: "/services#business-account" },
        { name: "Credit Cards", href: "/services#credit-cards" },
      ],
    },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="w-36 h-18 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/vite.svg";
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item, idx) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setMobileDropdownOpen(idx)}
                    onMouseLeave={() => setMobileDropdownOpen(null)}
                  >
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-medium rounded-md flex items-center transition-colors duration-200 ${
                        location.pathname.startsWith(item.href)
                          ? "text-red-600 bg-red-50 font-semibold"
                          : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                      }`}
                    >
                      {item.name}
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>
                    {mobileDropdownOpen === idx && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
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
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      location.pathname.startsWith(item.href)
                        ? "text-red-600 bg-red-50 font-semibold"
                        : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              ref={buttonRef}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-colors duration-200 min-h-[44px] min-w-[44px] touch-manipulation"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
            >
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-white shadow-lg rounded-b-lg"
          ref={menuRef}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item, idx) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() =>
                        setMobileDropdownOpen(
                          mobileDropdownOpen === idx ? null : idx
                        )
                      }
                      className={`w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                        location.pathname.startsWith(item.href)
                          ? "text-red-600 bg-red-50 font-semibold"
                          : "text-gray-700 hover:text-red-600 hover:bg-red-50 active:bg-gray-100"
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`h-4 w-4 transform transition-transform duration-200 ${
                          mobileDropdownOpen === idx ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {mobileDropdownOpen === idx && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors duration-200"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setMobileDropdownOpen(null);
                            }}
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
                      location.pathname.startsWith(item.href)
                        ? "text-red-600 bg-red-50 font-semibold"
                        : "text-gray-700 hover:text-red-600 hover:bg-red-50 active:bg-gray-100"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
