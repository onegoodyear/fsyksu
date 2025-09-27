import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: "/", label: "الرئيسية" },
    { path: "/about", label: "من نحن" },
  ];

  return (
    <nav
      className="bg-gradient-to-r from-blue-900 to-purple-800 shadow-lg fixed w-full top-0 z-50"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* 2030 Vision Logo - Left Side */}
          <div className="flex items-center">
            <div className="bg-white bg-opacity-20 p-2 rounded-lg backdrop-blur-sm">
              <img
                src="/2030vision.svg"
                alt="رؤية 2030"
                className="h-8 w-auto md:h-10"
              />
            </div>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center flex-1 justify-center">
            <ul className="flex space-x-6 space-x-reverse">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                      isActive(item.path)
                        ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                        : "text-blue-100 hover:text-white hover:bg-white hover:bg-opacity-10 backdrop-blur-sm"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* KSU Logo and Mobile Menu Button */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* KSU Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                onClick={closeMenu}
                className="flex items-center"
              >
                <div className="bg-white p-2 rounded-lg shadow-lg">
                  <img
                    src="/ksulogo.png"
                    alt="جامعة الملك سعود"
                    className="h-8 w-auto md:h-10"
                  />
                </div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-blue-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-white p-3 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm"
                aria-label="قائمة التنقل"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 pb-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 space-y-2 bg-blue-800 bg-opacity-50 backdrop-blur-lg rounded-xl mt-2 border border-white border-opacity-20">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`block px-6 py-4 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                    : "text-blue-100 hover:text-white hover:bg-white hover:bg-opacity-10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
