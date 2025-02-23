import React from 'react';
import { Camera, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import slide1 from '../images/chair.jpg';
import slide2 from '../images/incenerators.jpg';
import slide3 from '../images/solarfix.jpg';
import slide4 from '../images/solarpanel.jpg';
import slide5 from '../images/teach.jpg';
import biogas from '../images/Biogas.jpg';

const GallerySection = () => {
  const previewImages = [
    { src: slide1, title: "Innovative Furniture Solutions" },
    { src: slide2, title: "Eco-friendly Incinerators" },
    { src: slide3, title: "Solar Technology" },
    { src: slide4, title: "Renewable Energy Projects" },
    { src: slide5, title: "STEM Education" },
    { src: biogas, title: "Biogas Systems" }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(251, 146, 60, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(251, 146, 60, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 60%)
          `,
          backgroundSize: '100% 100%',
          backgroundColor: '#fff8f3'
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block relative mb-4">
              <Camera className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h2 className="text-5xl font-bold text-orange-800 mb-6">
                Explore Our Gallery
              </h2>
            </div>
            <p className="text-xl mb-8 text-orange-700 leading-relaxed max-w-3xl mx-auto">
              Step into our visual journey of innovation and creativity. Experience firsthand the 
              remarkable projects, engaging workshops, and vibrant events that showcase our 
              students' innovative spirit in action.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {previewImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    <ExternalLink className="text-orange-400 h-5 w-5 mt-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              View Full Gallery
              <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Decorative Line */}
          <div className="mt-16 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          </div>
        </div>
      </div>

      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(#fb923c 1px, transparent 1px), linear-gradient(to right, #fb923c 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }}
      />
    </section>
  );
};

export default GallerySection;