import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const XFoundryButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Animation effect that pulses every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Link 
      to="/xfoundry"
      className={`fixed bottom-8 right-8 z-50 bg-gradient-to-r from-orange-600 to-orange-500 
        text-white px-6 py-3 rounded-full shadow-lg flex items-center
        hover:shadow-xl transition-all duration-300 ${isAnimating ? 'scale-105' : 'scale-100'}`}
    >
      <Sparkles className="mr-2 h-5 w-5" />
      <span className="font-bold">X Foundry 2.0</span>
      <ArrowRight className="ml-2 h-5 w-5" />
    </Link>
  );
};

export default XFoundryButton;