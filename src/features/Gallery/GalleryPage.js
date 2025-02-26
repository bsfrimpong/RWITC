import Footer from './../../components/footer';
import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  X,
  Heart,
  Share2,
  Download
} from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSchool, setActiveSchool] = useState('all');
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Define categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'innovations', name: 'Student Innovations' },
    { id: 'training', name: 'Training Sessions' },
    { id: 'projects', name: 'School Projects' },
    { id: 'community', name: 'Community Impact' }
  ];

  // Define schools
  const schools = [
    { id: 'all', name: 'All Schools' },
    { id: 'prempeh', name: 'Prempeh College' },
    { id: 'serwaa', name: 'Serwaa Nyarko SHS' },
    { id: 'rabble', name: 'Rabble SHS' },
    { id: 'centre', name: 'Training Centre' }
  ];

  // Generate description from filename and folder names
  const generateDescription = (filename, category, school) => {
    // Remove file extension and replace hyphens/underscores with spaces
    const cleanFilename = filename.replace(/\.(jpg|jpeg|png|gif)$/i, '').replace(/[-_]/g, ' ');
    
    // Capitalize first letter of each word
    const formattedFilename = cleanFilename
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    
    // Format category and school for description
    const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
    const formattedSchool = school ? ` at ${school.charAt(0).toUpperCase() + school.slice(1)}` : '';
    
    return `${formattedFilename} ${formattedCategory}${formattedSchool}`;
  };

  // Generate title from filename
  const generateTitle = (filename) => {
    const cleanFilename = filename.replace(/\.(jpg|jpeg|png|gif)$/i, '').replace(/[-_]/g, ' ');
    return cleanFilename
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  // Function to dynamically import images from a directory
  const importAllImages = async (context) => {
    let images = [];
    try {
      // This is a webpack-specific API for getting all modules matching a pattern
      const modules = context.keys().map(context);
      const paths = context.keys();
      
      images = paths.map((path, index) => {
        // Extract filename from path
        const filename = path.split('/').pop();
        // Extract folder (school) from path - adjust based on your actual path structure
        const pathParts = path.split('/');
        const school = pathParts[pathParts.length - 2];
        const category = pathParts[pathParts.length - 3];
        
        return {
          path,
          filename,
          school,
          category,
          image: modules[index].default || modules[index]
        };
      });
    } catch (error) {
      console.error("Error importing images:", error);
    }
    return images;
  };

  // Load images from folders based on categories and schools
  useEffect(() => {
    const loadGalleryItems = async () => {
      setLoading(true);
      const items = [];
      let id = 1;

      try {
        // Load images from all category folders
        // Note: These require statements work with webpack's require.context
        // You may need to adjust depending on your build system
        
        // Innovations category
        try {
          const innovationsContext = require.context('../../images/gallery/innovations', true, /\.(jpg|jpeg|png|gif)$/i);
          const innovationsImages = await importAllImages(innovationsContext);
          
          innovationsImages.forEach(img => {
            items.push({
              id: id++,
              category: 'innovations',
              school: img.school,
              title: generateTitle(img.filename),
              description: generateDescription(img.filename, 'innovations', img.school),
              image: img.image,
              date: '2024'
            });
          });
        } catch (e) {
          console.error("Could not load innovations images:", e);
        }
        
        // Training category
        try {
          const trainingContext = require.context('../../images/gallery/training', true, /\.(jpg|jpeg|png|gif)$/i);
          const trainingImages = await importAllImages(trainingContext);
          
          trainingImages.forEach(img => {
            items.push({
              id: id++,
              category: 'training',
              school: img.school,
              title: generateTitle(img.filename),
              description: generateDescription(img.filename, 'training', img.school),
              image: img.image,
              date: '2024'
            });
          });
        } catch (e) {
          console.error("Could not load training images:", e);
        }
        
        // Projects category
        try {
          const projectsContext = require.context('../../images/gallery/projects', true, /\.(jpg|jpeg|png|gif)$/i);
          const projectsImages = await importAllImages(projectsContext);
          
          projectsImages.forEach(img => {
            items.push({
              id: id++,
              category: 'projects',
              school: img.school,
              title: generateTitle(img.filename),
              description: generateDescription(img.filename, 'projects', img.school),
              image: img.image,
              date: '2024'
            });
          });
        } catch (e) {
          console.error("Could not load projects images:", e);
        }
        
        // Community category
        try {
          const communityContext = require.context('../../images/gallery/community', true, /\.(jpg|jpeg|png|gif)$/i);
          const communityImages = await importAllImages(communityContext);
          
          communityImages.forEach(img => {
            items.push({
              id: id++,
              category: 'community',
              school: img.school, // Using school field for location
              title: generateTitle(img.filename),
              description: generateDescription(img.filename, 'community', img.school),
              image: img.image,
              date: '2024'
            });
          });
        } catch (e) {
          console.error("Could not load community images:", e);
        }

        setGalleryItems(items);
      } catch (error) {
        console.error('Error loading gallery images:', error);
      } finally {
        setLoading(false);
      }
    };

    loadGalleryItems();
  }, []);

  // Filter images based on selected category and school
  const filteredImages = galleryItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSchool = activeSchool === 'all' || item.school === activeSchool;
    return matchesCategory && matchesSchool;
  });

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
        <div className="flex flex-wrap justify-center gap-4 mb-6">
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

        {/* School Filter (only shows when a specific category is selected) */}
        {activeCategory !== 'all' && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {schools.map(school => (
              <button
                key={school.id}
                onClick={() => setActiveSchool(school.id)}
                className={`px-4 py-1 rounded-full text-sm transition-all duration-300 ${
                  activeSchool === school.id 
                    ? 'bg-orange-300 text-orange-900' 
                    : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                }`}
              >
                {school.name}
              </button>
            ))}
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        ) : (
          /* Gallery Grid */
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
        )}

        {/* No results message */}
        {!loading && filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-orange-800 text-xl">No images found for the selected filters.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
  {/* Footer */}
         <Footer />
    </div>
  );
};

export default GalleryPage;
