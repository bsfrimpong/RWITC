import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home and then scroll
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const quickLinks = [
    { name: 'Home', scrollId: 'home' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', scrollId: 'programs' },
    { name: 'Success Stories', scrollId: 'success-stories' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', scrollId: 'contact' }
  ];

  const programs = [
    { name: 'ARMBITION', scrollId: 'programs' },
    { name: 'TEK INVASION', scrollId: 'programs' },
    { name: 'Aspiring Entrepreneurs', scrollId: 'programs' },
    { name: 'Innovation Quiz', scrollId: 'programs' }
  ];

  const contact = {
    email: 'stephenfrimpongyg@gmail.com',
    phone: '+233 24 675 6644',
    address: 'Location, Kumasi, Ghana'
  };

  const socialMedia = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      url: 'https://facebook.com/rtic',
      color: 'hover:text-blue-600'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      url: 'https://x.com/rtic_hq',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://www.instagram.com/realworldtechic?igsh=YXBzZHJ4cm5xdW01',
      color: 'hover:text-pink-600'
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      url: 'https://youtube.com/rtic',
      color: 'hover:text-red-600'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/company/realworld-tech?trk=blended-typeahead',
      color: 'hover:text-blue-700'
    }
  ];

  return (
    <footer className="bg-orange-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">About RTIC</h3>
            <p className="text-orange-200 mb-4">
              Transforming Ghana's entrepreneurial landscape through innovation, 
              education, and real-world problem-solving.
            </p>
            <div className="flex space-x-4">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-orange-200 transition-colors duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.path ? (
                    <Link 
                      to={link.path}
                      className="text-orange-200 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <ChevronRight className="h-4 w-4 mr-1" />
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.scrollId)}
                      className="text-orange-200 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <ChevronRight className="h-4 w-4 mr-1" />
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <button
                    onClick={() => scrollToSection(program.scrollId)}
                    className="text-orange-200 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {program.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`mailto:${contact.email}`}
                  className="text-orange-200 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${contact.phone}`}
                  className="text-orange-200 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <span className="text-orange-200">{contact.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-orange-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-orange-200 text-sm">
              © {new Date().getFullYear()} Real-world Technology Innovation Centre. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link 
                to="/privacy"
                className="text-orange-200 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms"
                className="text-orange-200 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
