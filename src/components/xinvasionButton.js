import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy } from 'lucide-react';

const XInvasionButton = () => {
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
      to="/xinvasion"
      className={`fixed bottom-8 left-8 z-50 bg-gradient-to-r from-blue-600 to-blue-500 
        text-white px-6 py-3 rounded-full shadow-lg flex items-center
        hover:shadow-xl transition-all duration-300 ${isAnimating ? 'scale-105' : 'scale-100'}`}
    >
      <Trophy className="mr-2 h-5 w-5" />
      <span className="font-bold">X Invasion</span>
      <ArrowRight className="ml-2 h-5 w-5" />
    </Link>
  );
};

export default XInvasionButton;