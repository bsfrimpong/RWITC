import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../images/logoss.png'; 

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
      };
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
       <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-12" />
            <span className={`ml-2 font-bold text-xl ${
              isScrolled ? 'text-orange-800' : 'text-white'
            }`}>
              STEM Initiative
            </span>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'success-stories', label: 'Success Stories' },
              { id: 'programs', label: 'Programs' },
              { id: 'experts', label: 'Elevate' },
              { id: 'community', label: 'Donate' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-orange-800 hover:text-orange-600' 
                    : 'text-white hover:text-orange-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-orange-800' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-orange-800' : 'text-white'} />
            )}
          </button>
        </div>

         {/* Mobile Menu */}
         {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            {[
              { id: 'home', label: 'Home' },
              { id: 'success-stories', label: 'Success Stories' },
              { id: 'programs', label: 'Programs' },
              { id: 'experts', label: 'Scale' },
              { id: 'community', label: 'Donate' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full py-2 text-orange-800 hover:text-orange-600 text-left"
              >
                {item.label}
              </button>
            ))}
            <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition duration-300">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;