import React from 'react';
import { Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const GallerySection = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-orange-800">Explore Our Gallery</h2>
        <p className="text-xl mb-12 text-orange-700 max-w-2xl mx-auto">
          Discover the amazing projects, workshops, and events that showcase our students' innovation and creativity in action.
        </p>
        <Link 
          to="/gallery"
          className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
        >
          <Camera className="h-6 w-6" />
          View Gallery
        </Link>
      </div>
    </section>
  );
};

export default GallerySection;