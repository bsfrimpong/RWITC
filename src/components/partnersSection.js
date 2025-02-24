import tekdevisal from '../images/Partners/td.png';
import toddlerwalks from '../images/Partners/tw.png';
import mpact from '../images/Partners/mpact.jpg';
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PartnersSection = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Sample partner data - replace with your actual partners
  const partners = [
    {
      name: "Tech Partner",
      logo: tekdevisal,
      description: "Tech Training and Mentorship"
    },
    {
      name: "Training Partner",
      logo: toddlerwalks,
      description: "Career development and mentorship"
    },
    {
      name: "Training Partner",
      logo: mpact,
      description: "Curriculum Design and Entrepreneurship training"
    },
    {
      name: "Training Partner",
      logo: mpact,
      description: "Curriculum Design and Entrepreneurship training"
    },
   
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Partners</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Collaborating with industry leaders and educational institutions to deliver innovative STEM solutions
        </p>
        
        <div className="relative">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-orange-500 p-2 rounded-full text-white shadow-lg hover:bg-orange-600 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-none w-72 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-32 object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                  <p className="text-gray-600">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-orange-500 p-2 rounded-full text-white shadow-lg hover:bg-orange-600 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;