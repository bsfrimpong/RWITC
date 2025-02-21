import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  X,
  Heart,
  Share2,
  Download
} from 'lucide-react';

// Import your images
import slide1 from '../../images/chair.jpg';
import slide2 from '../../images/incenerators.jpg';
import slide3 from '../../images/solarfix.jpg';
import slide4 from '../../images/solarpanel.jpg';
import slide5 from '../../images/teach.jpg';
import biogas from '../../images/Biogas.jpg';
import securityfix from '../../images/solarlight.jpg';
import studentsPresenting from '../../images/Wasteseg.jpg';
import videoThumbnail from '../../images/table.jpg';
import expert from '../../images/experts.jpg';
import kids from '../../images/kids.jpg';
import shs from '../../images/shs.jpg';
import community from '../../images/community.jpg';
import scanroll from '../../images/scanroll.jpg';
import scanrollTalk from '../../images/scanrolltalk.jpg';
import water from '../../images/Water.jpg';
import watertalk from '../../images/watertalk.jpg';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'innovations', name: 'Student Innovations' },
    { id: 'training', name: 'Training Sessions' },
    { id: 'projects', name: 'School Projects' },
    { id: 'community', name: 'Community Impact' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'innovations',
      title: 'Innovative Furniture Design',
      description: 'Students created adjustable furniture from recycled materials',
      image: slide1,
      date: '2024'
    },
    {
      id: 2,
      category: 'innovations',
      title: 'Eco-Friendly Incinerator',
      description: 'Sustainable waste management solution developed by students',
      image: slide2,
      date: '2024'
    },
    {
      id: 3,
      category: 'projects',
      title: 'Solar Panel Installation',
      description: 'Students working on renewable energy solutions',
      image: slide3,
      date: '2024'
    },
    {
      id: 4,
      category: 'projects',
      title: 'Solar Energy Project',
      description: 'Implementing solar solutions for sustainable power',
      image: slide4,
      date: '2024'
    },
    {
      id: 5,
      category: 'training',
      title: 'STEM Education Session',
      description: 'Interactive learning session with students',
      image: slide5,
      date: '2024'
    },
    {
      id: 6,
      category: 'innovations',
      title: 'Biogas System',
      description: 'Students developing renewable energy solutions',
      image: biogas,
      date: '2024'
    },
    {
      id: 7,
      category: 'projects',
      title: 'Solar Security Lighting',
      description: 'Implementation of solar-powered security systems',
      image: securityfix,
      date: '2024'
    },
    {
      id: 8,
      category: 'training',
      title: 'Waste Segregation Project',
      description: 'Students presenting their environmental solutions',
      image: studentsPresenting,
      date: '2024'
    },
    {
      id: 9,
      category: 'training',
      title: 'Expert Mentorship',
      description: 'Professional guidance for student projects',
      image: expert,
      date: '2024'
    },
    {
      id: 10,
      category: 'community',
      title: 'Youth Engagement',
      description: 'Engaging young minds in STEM education',
      image: kids,
      date: '2024'
    },
    {
      id: 11,
      category: 'community',
      title: 'Community Development',
      description: 'Working with local communities',
      image: community,
      date: '2024'
    },
    {
      id: 12,
      category: 'innovations',
      title: 'ScanRoll Attendance System',
      description: 'Digital solution for attendance tracking',
      image: scanroll,
      date: '2024'
    },
    {
      id: 13,
      category: 'training',
      title: 'ScanRoll Presentation',
      description: 'Students presenting their attendance monitoring system',
      image: scanrollTalk,
      date: '2024'
    },
    {
      id: 14,
      category: 'innovations',
      title: 'Water Management System',
      description: 'Innovative solution for water conservation',
      image: water,
      date: '2024'
    },
    {
      id: 15,
      category: 'training',
      title: 'Water Project Discussion',
      description: 'Students explaining their water management solution',
      image: watertalk,
      date: '2024'
    },
    {
        id: 16,
        category: 'innovations',
        title: 'Adjustable table and Chair from Plastic Waste',
        description: 'Students explaining their water management solution',
        image: videoThumbnail,
        date: '2024'
      }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const ImageModal = ({ image, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors"
        >
          <X className="h-8 w-8" />
        </button>
        <img 
          src={image.image} 
          alt={image.title} 
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
          <p className="text-gray-200">{image.description}</p>
          <div className="flex gap-4 mt-4">
            <button className="text-white hover:text-orange-500 transition-colors">
              <Heart className="h-6 w-6" />
            </button>
            <button className="text-white hover:text-orange-500 transition-colors">
              <Share2 className="h-6 w-6" />
            </button>
            <button className="text-white hover:text-orange-500 transition-colors">
              <Download className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-orange-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-orange-800 text-center mb-12">
          Project Gallery
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-white text-orange-700 hover:bg-orange-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map(item => (
            <div 
              key={item.id}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm mb-4">{item.description}</p>
                  <button 
                    onClick={() => setSelectedImage(item)}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm"
                  >
                    <ZoomIn className="h-4 w-4" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </div>
  );
};

export default GalleryPage;