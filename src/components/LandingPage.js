import '../index.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, ChevronDown, Users, BookOpen, PieChart, DollarSign, Globe, School, Video, Table } from 'lucide-react';
import slide1 from '../images/chair.jpg';
import slide2 from '../images/incenerators.jpg';
import slide3 from '../images/solarfix.jpg';
import slide4 from '../images/solarpanel.jpg';
import slide5 from '../images/teach.jpg';
import biogas from '../images/Biogas.jpg';
import securityfix from '../images/solarlight.jpg';
import studentsPresenting from '../images/Wasteseg.jpg';
import videoThumbnail from '../images/table.jpg';
import expert from '../images/experts.jpg';
import community from '../images/community.jpg';
import logo from '../images/logoss.png';
import scanroll from '../images/scanroll.jpg';
import scanrollTalk from '../images/scanrolltalk.jpg'
import water from '../images/Water.jpg'
import watertalk from '../images/watertalk.jpg'
import TrainingProgramsSection from './TrainingProgramsSection';
import GallerySection from './GallerySection';
import Navbar from './NavBar';
import ContactSection from './ContactSection';
import AboutSummarySection from './AboutSummarySection';
import Footer from './footer';
import PartnersSection from './partnersSection'; 
import ImpactStats from './impactSection';
import XFoundryButton from '../components/XfoundryButton';
import XInvasionButton from '../components/xinvasionButton';
import { useLocation } from 'react-router-dom'

const Slideshow = ({ images }) => {
  // ... (Slideshow component code remains the same)
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);
  
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="relative w-full h-[800px]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-orange-500' : 'bg-orange-200'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

const LandingPage = () => {
  const slideshowImages = [
    slide1, slide2, slide3, slide4, slide5
  ];
  const SuccessStoriesSection = () => {
    const [activeSchool, setActiveSchool] = useState('serwaa');
  
    const schools = {
      serwaa: {
        title: "Our Success at Serwaa Nyarko Girls' School",
        description: "We implemented our hands-on STEM education model at Serwaa Nyarko Girls' School, leading to remarkable outcomes. Students developed innovative solutions to real-world problems, including:",
        projects: [
          "Waste segregation bins",
          "Biogas systems",
          "Adjustable tables and chairs from plastic waste",
          "Eco-friendly sanitary pad incinerators",
          "Solar-powered intruder detection systems"
        ],
        images: [biogas, securityfix, studentsPresenting, videoThumbnail]
      },
      prempeh: {
        title: "Our Success at Prempeh College",
        description: "Our STEM education program at Prempeh College has fostered remarkable innovation and practical problem-solving skills. Students have successfully developed several impactful projects, including:",
        projects: [
          "ScanRoll: Mobile Attendance Monitoring System",
          "Solar Flow: Water Management System",
        ],
        images: [scanrollTalk, scanroll, watertalk, water] // You can replace these with Prempeh images
      }
    };
  
    const currentSchool = schools[activeSchool];
  
    return (
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button 
              onClick={() => setActiveSchool('serwaa')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeSchool === 'serwaa' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
              }`}
            >
              Serwaa Nyarko Girls'
            </button>
            <button 
              onClick={() => setActiveSchool('prempeh')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeSchool === 'prempeh' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
              }`}
            >
              Prempeh College
            </button>
          </div>
  
          <div className="relative">
            <div 
              className="transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${activeSchool === 'serwaa' ? '0%' : '-100%'})`,
                opacity: activeSchool === 'serwaa' ? '1' : '0',
                position: activeSchool === 'serwaa' ? 'relative' : 'absolute',
                width: '100%'
              }}
            >
              <h2 className="text-4xl font-bold mb-12 text-center text-orange-800">
                {schools.serwaa.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg mb-6 text-orange-900">{schools.serwaa.description}</p>
                  <ul className="list-none mb-6 space-y-2">
                    {schools.serwaa.projects.map((item, index) => (
                      <li key={index} className="flex items-center text-orange-700">
                        <ChevronRight className="mr-2 text-orange-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {schools.serwaa.images.slice(0, 3).map((img, index) => (
                    <img 
                      key={index}
                      src={img} 
                      alt={`Serwaa Nyarko project ${index + 1}`}
                      className="rounded-lg shadow-md transform hover:scale-105 transition duration-300"
                    />
                  ))}
                  <div className="relative group">
                  <a 
    href="https://www.youtube.com/watch?v=xQiwo26DBko" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block"
  >
                    <img 
                      src={schools.serwaa.images[3]} 
                      alt="Video thumbnail" 
                      className="rounded-lg shadow-md transform group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Video className="text-white h-12 w-12 group-hover:text-orange-500 transition duration-300" />
                    </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
  
            <div 
              className="transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${activeSchool === 'prempeh' ? '0%' : '100%'})`,
                opacity: activeSchool === 'prempeh' ? '1' : '0',
                position: activeSchool === 'prempeh' ? 'relative' : 'absolute',
                top: 0,
                width: '100%'
              }}
            >
              <h2 className="text-4xl font-bold mb-12 text-center text-orange-800">
                {schools.prempeh.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg mb-6 text-orange-900">{schools.prempeh.description}</p>
                  <ul className="list-none mb-6 space-y-2">
                    {schools.prempeh.projects.map((item, index) => (
                      <li key={index} className="flex items-center text-orange-700">
                        <ChevronRight className="mr-2 text-orange-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {schools.prempeh.images.slice(0, 3).map((img, index) => (
                    <img 
                      key={index}
                      src={img} 
                      alt={`Prempeh College project ${index + 1}`}
                      className="rounded-lg shadow-md transform hover:scale-105 transition duration-300"
                    />
                  ))}
                  <div className="relative group">
                  <a 
                     href="https://www.youtube.com/watch?v=xQiwo26DBko" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="block"
                   >
                    <img 
                      src={schools.prempeh.images[3]} 
                      alt="Video thumbnail" 
                      className="rounded-lg shadow-md transform group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Video className="text-white h-12 w-12 group-hover:text-orange-500 transition duration-300" />
                    </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Arrow Navigation */}
          <button 
            onClick={() => setActiveSchool('serwaa')}
            className={`absolute left-4 top-1/2 p-2 rounded-full bg-orange-500 text-white transform -translate-y-1/2 ${
              activeSchool === 'serwaa' ? 'opacity-0' : 'opacity-100'
            } transition-opacity duration-300 hover:bg-orange-600`}
            disabled={activeSchool === 'serwaa'}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={() => setActiveSchool('prempeh')}
            className={`absolute right-4 top-1/2 p-2 rounded-full bg-orange-500 text-white transform -translate-y-1/2 ${
              activeSchool === 'prempeh' ? 'opacity-0' : 'opacity-100'
            } transition-opacity duration-300 hover:bg-orange-600`}
            disabled={activeSchool === 'prempeh'}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </section>
    );
  };
  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />  {/* Add this line here */}
      {/* Hero Section with Slideshow */}
      <header id="home" className="relative text-white">
        {/* ... (header content remains the same) */}
        <Slideshow images={slideshowImages} />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Empowering STEM Education Through Real-World Problem Solving</h1>
            <p className="text-xl mb-8">Join us in transforming education and creating the next generation of innovators.</p>
            <button onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center text-lg transition duration-300">
              Get Involved <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-orange-50" viewBox="0 0 1440 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48h1440V0c-283 0-424.5 48-720 48C424.5 48 283 0 0 0v48z"/>
          </svg>
        </div>
      </header>
      <section id="aboutUs">
      <AboutSummarySection />
      </section>
      <ImpactStats />

      {/* Serwaa Nyarko Success Story */}
      <section id="success-stories" > 
      <SuccessStoriesSection/>
      </section>
   {/* Training Programs Section */}
   <section id="programs">
<TrainingProgramsSection />
</section>

      {/* Post-Training Support */}
      <section id="experts" className="py-20 bg-white">
        {/* ... (section content remains the same) */}
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-orange-800">Scaling Up Success</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-6 text-orange-700">Expert Support Innovative Projects</h3>
              <p className="mb-6 text-lg text-orange-900">After the initial training, we don't just leave Participants on their own. Our team provides ongoing expert support to Protect and scale successful projects on a larger scale where necessary.</p>
              <ul className="space-y-3">
                {[
                  "Intellectual Property Support (Copyright, Patents, etc.",
                  "MVP Testing(Market Validation, Traction, etc.)",
                  "Technical expertise and Partnerships for scaling up projects",
                  "Guidance on sourcing materials and resources",
                  "Workshops for teachers to integrate projects into curriculum",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-orange-700">
                    <ChevronRight className="mr-2 text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={expert} alt="Experts working with students" className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section id="community" className="py-20 bg-orange-100">
        {/* ... (section content remains the same) */}
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-orange-800">Community and Global Outreach</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="md:w-1/2">
              <img src={community} alt="Community impact" className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-6 text-orange-700">Expanding Our Reach</h3>
              <p className="mb-8 text-lg text-orange-900">We're offering training to selected deprived and local communities for free, enabling youth to build solutions tailored to their community's needs.</p>
              <a 
  href="https://forms.gle/mcFgJPvV3muQBw6P7" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center text-lg transition duration-300"
>
  Donate Now <DollarSign className="ml-2" />
</a>
              
            </div>
          </div>
        </div>
      </section>
      <section id="gallery"> 
      <GallerySection />
      </section>
     {/* Events Section (Updated with Links) */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-8 text-orange-800">Events</h2>
    <p className="text-xl mb-12 text-orange-700">Participate in our exciting innovation competitions and challenges!</p>
    
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {/* X Foundry */}
      <div className="bg-orange-50 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-orange-700">X Foundry</h3>
        <p className="mb-4">Our innovation incubator for transforming creative ideas into impactful solutions.</p>
        <Link to="/xfoundry" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center text-md transition duration-300">
          Learn More <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      
      {/* X Invasion */}
      <div className="bg-orange-50 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-orange-700">X Invasion</h3>
        <p className="mb-4">Competition where teams tackle industry challenges with innovative approaches.</p>
        <Link to="/xinvasion" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center text-md transition duration-300">
          Learn More <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      
      {/* X Quiz */}
      <div className="bg-orange-50 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-orange-700">X Quiz</h3>
        <p className="mb-4">SHS competition showcasing problem-solving skills and innovative thinking.</p>
        <Link to="/xquiz" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center text-md transition duration-300">
          Learn More <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
    
    <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center text-lg transition duration-300">
      See All Events <ChevronDown className="ml-2 h-5 w-5" />
    </button>
  </div>
</section>
      <section id="contact"> 
      <ContactSection />
      </section>
         {/* Partners Section */}
         <PartnersSection />
      {/* Footer */}
      <Footer />
      
      {/* XFoundry Button - Placed here to float on all pages */}
      <XFoundryButton />
      {/* <XInvasionButton /> */}
    </div>
  );
};

export default LandingPage;