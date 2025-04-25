import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar, ChevronRight, Award, Users, Lightbulb, Rocket,
    Trophy, Zap, ArrowRight, School, BookOpen, Code, Cpu, Wrench,
    DollarSign, MessageCircle, Building, CheckCircle, PlayCircle, Clock,
    ChevronDown
  } from 'lucide-react';
import Navbar from '../components/NavBar';
import Footer from '../components/footer';
import ugLogo from '../images/Xinvasion/UG.jpg';
import knustLogo from '../images/Xinvasion/KNUST.png';
import Background from '../images/pitch.png';

// -------------------- Data --------------------
// Schools information
const schools = {
  ug: {
    name: "University of Ghana",
    logo: ugLogo,
    venue: "UG School of Engineering Sciences",
    date: "coming Soon",
    registrationDeadline: "25th April, 2025",
    active: true
  },
  knust: {
    name: "Kwame Nkrumah University of Science and Technology",
    logo: knustLogo,
    venue: "CARISCA Innovations Lab, KNUST School of Business",
    date: "Coming Soon",
    registrationDeadline: "10th May, 2025",
    active: true
  },
  ucc: {
    name: "University of Cape Coast",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/University_of_Cape_Coast_logo.svg/1200px-University_of_Cape_Coast_logo.svg.png",
    date: "Coming Soon",
    active: false
  },
  ttu: {
    name: "Takoradi Technical University",
    logo: "https://ttu.edu.gh/wp-content/uploads/2017/04/cropped-cropped-TTU_LOGO-1-2.png",
    date: "Coming Soon",
    active: false
  },
  ktu: {
    name: "Kumasi Technical University",
    logo: "https://kstu.edu.gh/sites/default/files/2021-09/ktu_logo.png",
    date: "Coming Soon",
    active: false
  },
  uenr: {
    name: "University of Energy and Natural Resources",
    logo: "https://www.uenr.edu.gh/wp-content/uploads/2020/10/uenr_logo.png",
    date: "Coming Soon",
    active: false
  },
  aamusted: {
    name: "Akenten Appiah-Menka University",
    logo: "https://aamusted.edu.gh/assets/images/logo.png",
    date: "Coming Soon",
    active: false
  },
  uew: {
    name: "University of Education, Winneba",
    logo: "https://www.uew.edu.gh/sites/default/files/logo_1.png",
    date: "Coming Soon",
    active: false
  }
};

// Competition tracks
const tracks = [
    {
      id: "ideaBank",
      title: "Idea Bank Track",
      description: "Choose from pre-identified ideas and develop your unique approach to implementing it on campus.",
      icon: Lightbulb,
      examples: [
        {
          name: "Tek Vend",
          description: "Smart vending solution for campus convenience and facility management with mobile money integration.",
          id: "tek-vend"
        },
        {
          name: "Campus Dining Management System",
          description: "Touchscreen ordering system for campus restaurants with integrated kitchen management and payment processing.",
          id: "campus-dining-management-system"
        },
        {
          name: "Smart Attendance System",
          description: "Comprehensive attendance monitoring with biometric verification and analytics for educational institutions.",
          id: "smart-attendance-system"
        }
      ]
    },
    {
      id: "originalIdea",
      title: "Original Ideas Track",
      description: "Pitch your own innovative concepts from scratch in any of our focus innovation sectors.",
      icon: Rocket,
      focusAreas: [
        "EdTech", "HealthTech", "FinTech", "AgriTech",
        "Retail & E-commerce", "Sustainability", "Smart Mobility"
      ]
    }
  ];

// Phases of the competition
const phases = [
  {
    title: "Phase 1: Application & Screening",
    description: "Submit your proposal under one of the two tracks. Top 20 teams will be shortlisted.",
    timeline: "Month 1"
  },
  {
    title: "Phase 2: Bootcamp & Investor Labs",
    description: "Virtual bootcamp with workshops, mentorship, and investor feedback. Top 10 teams advance.",
    timeline: "Month 2"
  },
  {
    title: "Phase 3: MVP Sprint",
    description: "Build your MVP with funding support, access to labs, and technical guidance.",
    timeline: "Month 3 (Weeks 1-2)"
  },
  {
    title: "Phase 4: Pitch Day",
    description: "Present to investors, corporate leaders, and partners for final evaluation.",
    timeline: "Month 3 (Week 3)"
  },
  {
    title: "Phase 5: Post-Competition Acceleration",
    description: "Winners receive seed funding, incubation, mentorship, and entry to the national Tek Invasion conference.",
    timeline: "Months 4-9"
  }
];

// Prizes information
const prizes = [
  {
    title: "Grand Prize",
    amount: "GHS 15,000",
    extras: "Incubation + Investor Pitch Opportunity",
    icon: Trophy
  },
  {
    title: "Track Winners",
    amount: "GHS 6,000 each",
    extras: "Mentorship and Resource Access",
    icon: Award
  },
  {
    title: "Best Female-led Team",
    amount: "GHS 3,500",
    extras: "Special Mentorship Program",
    icon: Users
  },
  {
    title: "Supporters' Favorite",
    amount: "GHS 2,500",
    extras: "Media Spotlight",
    icon: MessageCircle
  }
];

// Background images
const backgroundImages = {
  heroImage: Background,
  patternOverlay: "https://www.transparenttextures.com/patterns/cubes.png"
};

// -------------------- Registration Form Component --------------------
const RegistrationForm = ({ selectedSchool, schools }) => {
  const [formData, setFormData] = useState({
    teamName: '',
    teamLead: {
      name: '',
      email: '',
      phone: '',
      department: '',
      level: ''
    },
    members: [
      { name: '', email: '', department: '', level: '' },
      { name: '', email: '', department: '', level: '' },
      { name: '', email: '', department: '', level: '' },
      { name: '', email: '', department: '', level: '' }
    ],
    interest: '',
    projectIdea: ''
  });

  // Handle form input changes
  const handleInputChange = (e, index = null, field = null, nestedField = null) => {
    const { name, value } = e.target;
    if (index !== null && field) {
      // Handle team members
      const updatedMembers = [...formData.members];
      if (nestedField) {
        updatedMembers[index][nestedField] = value;
      } else {
        updatedMembers[index][name] = value;
      }
      setFormData({
        ...formData,
        members: updatedMembers
      });
    } else if (field === 'teamLead') {
      // Handle team lead information
      setFormData({
        ...formData,
        teamLead: {
          ...formData.teamLead,
          [name]: value
        }
      });
    } else {
      // Handle general form fields
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Show submission confirmation
    alert("Thank you for registering for X Invasion! Your application has been received.");
    // Form would be reset and closed by parent component
  };

  return (
    <section id="registration-form" className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-800 mb-8 text-center">
          Register for X Invasion: {schools[selectedSchool].name} Edition
        </h2>
        <p className="text-center text-orange-700 mb-12 max-w-3xl mx-auto">
          Complete this form to register your team. Remember, your team must have exactly 5 members,
          with a maximum of 3 engineering students and at least 2 students from other departments.
        </p>
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {/* Team Name */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-6">Team Information</h3>
            <div className="mb-4">
              <label htmlFor="teamName" className="block text-orange-700 font-semibold mb-2">Team Name*</label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                value={formData.teamName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
          </div>
          
          {/* Team Lead Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-6">Team Lead Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="leadName" className="block text-orange-700 font-semibold mb-2">Full Name*</label>
                <input
                  type="text"
                  id="leadName"
                  name="name"
                  value={formData.teamLead.name}
                  onChange={(e) => handleInputChange(e, null, 'teamLead')}
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="leadEmail" className="block text-orange-700 font-semibold mb-2">Email Address*</label>
                <input
                  type="email"
                  id="leadEmail"
                  name="email"
                  value={formData.teamLead.email}
                  onChange={(e) => handleInputChange(e, null, 'teamLead')}
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="leadPhone" className="block text-orange-700 font-semibold mb-2">Phone Number*</label>
                <input
                  type="tel"
                  id="leadPhone"
                  name="phone"
                  value={formData.teamLead.phone}
                  onChange={(e) => handleInputChange(e, null, 'teamLead')}
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="leadDepartment" className="block text-orange-700 font-semibold mb-2">Department/Faculty*</label>
                <input
                  type="text"
                  id="leadDepartment"
                  name="department"
                  value={formData.teamLead.department}
                  onChange={(e) => handleInputChange(e, null, 'teamLead')}
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="leadLevel" className="block text-orange-700 font-semibold mb-2">Level/Year of Study*</label>
                <select
                  id="leadLevel"
                  name="level"
                  value={formData.teamLead.level}
                  onChange={(e) => handleInputChange(e, null, 'teamLead')}
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Select level</option>
                  <option value="100">100 Level</option>
                  <option value="200">200 Level</option>
                  <option value="300">300 Level</option>
                  <option value="400">400 Level</option>
                  <option value="Postgraduate">Postgraduate</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Team Members */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-6">Team Members (4 additional members required)</h3>
            
            {formData.members.map((member, index) => (
              <div key={index} className="mb-8 p-6 border border-orange-100 rounded-lg bg-orange-50">
                <h4 className="text-lg font-bold text-orange-700 mb-4">Team Member {index + 1}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label htmlFor={`member${index}Name`} className="block text-orange-700 font-semibold mb-2">Full Name*</label>
                    <input
                      type="text"
                      id={`member${index}Name`}
                      name="name"
                      value={member.name}
                      onChange={(e) => handleInputChange(e, index, 'members', 'name')}
                      className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor={`member${index}Email`} className="block text-orange-700 font-semibold mb-2">Email Address*</label>
                    <input
                      type="email"
                      id={`member${index}Email`}
                      name="email"
                      value={member.email}
                      onChange={(e) => handleInputChange(e, index, 'members', 'email')}
                      className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor={`member${index}Department`} className="block text-orange-700 font-semibold mb-2">Department/Faculty*</label>
                    <input
                      type="text"
                      id={`member${index}Department`}
                      name="department"
                      value={member.department}
                      onChange={(e) => handleInputChange(e, index, 'members', 'department')}
                      className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor={`member${index}Level`} className="block text-orange-700 font-semibold mb-2">Level/Year of Study*</label>
                    <select
                      id={`member${index}Level`}
                      name="level"
                      value={member.level}
                      onChange={(e) => handleInputChange(e, index, 'members', 'level')}
                      className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    >
                      <option value="">Select level</option>
                      <option value="100">100 Level</option>
                      <option value="200">200 Level</option>
                      <option value="300">300 Level</option>
                      <option value="400">400 Level</option>
                      <option value="Postgraduate">Postgraduate</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Project Interest */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-6">Project Interest</h3>
            
            <div className="mb-4">
              <label htmlFor="interest" className="block text-orange-700 font-semibold mb-2">Primary Area of Interest*</label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              >
                <option value="">Select your interest</option>
                <option value="AI">Artificial Intelligence</option>
                <option value="Software">Software Development</option>
                <option value="Hardware">Hardware/IoT</option>
                <option value="Blockchain">Blockchain Technology</option>
                <option value="EdTech">Educational Technology</option>
                <option value="HealthTech">Health Technology</option>
                <option value="FinTech">Financial Technology</option>
                <option value="AgriTech">Agricultural Technology</option>
                <option value="Retail">Retail & E-commerce</option>
                <option value="Sustainability">Sustainability Solutions</option>
                <option value="Mobility">Smart Mobility & Logistics</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label htmlFor="projectIdea" className="block text-orange-700 font-semibold mb-2">Brief Project Idea (optional)</label>
              <textarea
                id="projectIdea"
                name="projectIdea"
                value={formData.projectIdea}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="If you have a specific project idea in mind, briefly describe it here..."
              ></textarea>
            </div>
          </div>
          
          {/* Terms and Conditions */}
          <div className="mb-8">
            <label className="flex items-start">
              <input
                type="checkbox"
                className="mt-1 mr-3"
                required
              />
              <span className="text-orange-700">
                I confirm that our team meets the requirements (5 members with max 3 engineering students)
                and agree to the competition rules and guidelines. I understand that we will receive more
                details about the competition tracks during the event.
              </span>
            </label>
          </div>
          
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center text-lg transition duration-300"
            >
              Submit Registration <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

// -------------------- Main Component --------------------
const XInvasionLanding = () => {
  // Animation state
  const [isPitchStarted, setIsPitchStarted] = useState(false);
  const [isPitchComplete, setIsPitchComplete] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  
  // Page content state
  const [activeSchool, setActiveSchool] = useState('ug');
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState('');
  const [showAllSchools, setShowAllSchools] = useState(false);

  const [visibleProject, setVisibleProject] = useState(null);

  // Function to toggle project details visibility
  const toggleProjectDetails = (projectId) => {
    if (visibleProject === projectId) {
      setVisibleProject(null);
    } else {
      setVisibleProject(projectId);
      // Wrap in a try-catch to prevent errors if element doesn't exist
      setTimeout(() => {
        try {
          const element = document.getElementById(`${projectId}-details`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } catch (error) {
          console.error("Could not scroll to project details", error);
        }
      }, 100);
    }
  };

  // Handle the pitch start animation
  const handleStartPitch = () => {
    setIsPitchStarted(true);
    setTimeout(() => {
      setIsPitchComplete(true);
      setTimeout(() => {
        setIsContentLoaded(true);
      }, 1000);
    }, 3000);
  };

  const openRegistrationForm = (school) => {
    setSelectedSchool(school);
    setShowRegistrationForm(true);
    // Scroll to the form
    setTimeout(() => {
      document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Get active schools (for initial display) or all schools based on toggle
  const getSchoolsToDisplay = () => {
    const schoolEntries = Object.entries(schools);
    if (showAllSchools) {
      return schoolEntries;
    }
    return schoolEntries.filter(([key, school]) => school.active);
  };

  const displayedSchools = getSchoolsToDisplay();

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />
      
      <AnimatePresence>
        {!isPitchComplete ? (
          <motion.div 
            className="absolute inset-0 z-30 bg-gray-900 flex flex-col items-center justify-center p-6"
            exit={{ 
              opacity: 0,
              transition: { duration: 1.5, ease: "easeInOut" }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Welcome to <span className="text-gradient bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">X Invasion</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Where innovative business ideas meet real industry challenges
              </p>
            </motion.div>

            {/* Pitch Stage */}
            <motion.div 
              className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-2xl p-8 mb-10 relative overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {/* Stage lights */}
              <div className="absolute top-0 inset-x-0 flex justify-center">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-4 h-20 bg-gradient-to-b from-orange-400 to-transparent mx-8 origin-top`}
                    initial={{ opacity: 0.5, scaleY: 0 }}
                    animate={{ opacity: [0.5, 0.8, 0.5], scaleY: 1 }}
                    transition={{ 
                      opacity: { repeat: Infinity, duration: 2, delay: i * 0.3 },
                      scaleY: { duration: 1, delay: 0.5 }
                    }}
                  />
                ))}
              </div>
              
              {!isPitchStarted ? (
                <>
                  <h2 className="text-2xl font-bold text-white mb-6 mt-10">
                    Ready to Pitch Your Business Idea?
                  </h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Click the button below to step onto the stage and begin your journey with X Invasion!
                  </p>
                  
                  {/* Start Pitch Button */}
                  <motion.button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center mx-auto text-xl transition-all"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(249, 115, 22, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleStartPitch}
                  >
                    <PlayCircle className="mr-2 h-6 w-6" />
                    Start Your Pitch
                  </motion.button>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-white mb-4 mt-10">
                    Your Pitch Is In Progress...
                  </h2>
                  
                  {/* Pitch Visualization */}
                  <div className="h-12 w-full bg-gray-700 rounded-full overflow-hidden mb-6">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-orange-400 to-orange-600"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 3, ease: "easeInOut" }}
                    />
                  </div>
                  
                  {/* Pitch Progress Text */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p className="text-orange-400 font-medium">Idea</p>
                      <motion.div 
                        className="w-6 h-6 bg-orange-500 rounded-full mx-auto mt-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: 1 }}
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      <p className="text-orange-400 font-medium">Implementation</p>
                      <motion.div 
                        className="w-6 h-6 bg-orange-500 rounded-full mx-auto mt-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, delay: 1, repeat: 1 }}
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.5 }}
                    >
                      <p className="text-orange-400 font-medium">Impact</p>
                      <motion.div 
                        className="w-6 h-6 bg-orange-500 rounded-full mx-auto mt-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, delay: 2, repeat: 1 }}
                      />
                    </motion.div>
                  </div>
                </>
              )}
              
              {/* Business people silhouettes */}
              <div className="absolute bottom-0 inset-x-0 h-16 flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-12 bg-black rounded-t-full mx-2"
                    style={{ translateY: (i % 2 === 0) ? '10px' : '0' }}
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : (
          // Main Content (visible after pitch animation completes)
          <main>
            {/* Hero Section */}
            <header 
              className="relative h-[650px] flex items-center justify-center"
              style={{
                backgroundImage: `url(${backgroundImages.heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
              <div 
                className="absolute inset-0 opacity-20 z-0"
                style={{
                  backgroundImage: `url(${backgroundImages.patternOverlay})`,
                  backgroundSize: '400px'
                }}
              ></div>
              <motion.div 
                className="container mx-auto px-4 z-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: isContentLoaded ? 1 : 0 }}
                transition={{ duration: 1 }}
              >
                <motion.h1 
                  className="text-6xl font-bold mb-6 text-white"
                  initial={{ y: 30 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  X <span className="text-orange-400">Invasion</span>
                </motion.h1>
                
                <motion.p 
                  className="text-2xl text-white max-w-3xl mx-auto mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  A High-Impact Innovation & Venture-Building Challenge for University Students
                </motion.p>
                
                <motion.p 
                  className="text-xl text-orange-200 max-w-2xl mx-auto mb-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  From Lecture Halls to Unicorn Halls: Building Africa's Tech Future, One Student at a Time
                </motion.p>
                
                <motion.div 
                  className="flex flex-col md:flex-row justify-center gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <button
                    onClick={() => openRegistrationForm('ug')}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full inline-flex items-center text-lg transition duration-300"
                  >
                    UG Edition <School className="ml-2 h-5 w-5" />
                  </button>
                  <button
                    onClick={() => openRegistrationForm('knust')}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full inline-flex items-center text-lg transition duration-300"
                  >
                    KNUST Edition <School className="ml-2 h-5 w-5" />
                  </button>
                </motion.div>
              </motion.div>
            </header>

            {/* School Selection Tabs */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-orange-800 mb-10 text-center">
                  Choose Your Campus
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {displayedSchools.map(([key, school]) => (
                    <div 
                      key={key}
                      className={`p-4 rounded-lg text-center cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                        activeSchool === key 
                          ? 'bg-orange-500 text-white shadow-lg' 
                          : 'bg-orange-50 text-orange-800 hover:bg-orange-100'
                      }`}
                      onClick={() => school.active && setActiveSchool(key)}
                    >
                      <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full p-2 flex items-center justify-center">
                        <img 
                          src={school.logo} 
                          alt={`${school.name} Logo`} 
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <h3 className="font-bold mb-1">{school.name}</h3>
                      {!school.active && (
                        <div className="flex items-center justify-center text-sm mt-2 text-orange-700">
                          <Clock className="w-4 h-4 mr-1" /> 
                          <span>Coming Soon</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Toggle to show all schools */}
                <div className="text-center mb-10">
                  <button 
                    onClick={() => setShowAllSchools(!showAllSchools)}
                    className="text-orange-700 hover:text-orange-900 font-semibold inline-flex items-center"
                  >
                    {showAllSchools ? 'Show Active Campuses Only' : 'View All Campuses'} 
                    <ChevronDown className={`ml-1 h-5 w-5 transform transition-transform ${showAllSchools ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                
                {schools[activeSchool].active ? (
                  <div className="bg-orange-50 p-8 rounded-lg shadow-lg">
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                      <img
                        src={schools[activeSchool].logo}
                        alt={`${schools[activeSchool].name} Logo`}
                        className="w-32 h-32 object-contain"
                      />
                      <div>
                        <h3 className="text-2xl font-bold text-orange-800 mb-2">
                          X Invasion: {schools[activeSchool].name} Edition
                        </h3>
                        <p className="text-orange-600 mb-4">
                          <Calendar className="inline mr-2" size={18} />
                          Event Date: {schools[activeSchool].date}
                        </p>
                        {schools[activeSchool].venue && (
                          <p className="text-orange-600 mb-4">
                            <Building className="inline mr-2" size={18} />
                            Venue: {schools[activeSchool].venue}
                          </p>
                        )}
                        {schools[activeSchool].registrationDeadline && (
                          <p className="text-red-600 font-semibold">
                            Registration Deadline: {schools[activeSchool].registrationDeadline}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <button
                        onClick={() => openRegistrationForm(activeSchool)}
                        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center text-lg transition duration-300"
                        disabled={!schools[activeSchool].active}
                      >
                        Register Now <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-orange-50 p-8 rounded-lg shadow-lg text-center">
                    <div className="flex flex-col items-center mb-6">
                      <img
                        src={schools[activeSchool].logo}
                        alt={`${schools[activeSchool].name} Logo`}
                        className="w-32 h-32 object-contain mb-4"
                      />
                      <h3 className="text-2xl font-bold text-orange-800 mb-2">
                        X Invasion: {schools[activeSchool].name} Edition
                      </h3>
                      <div className="flex items-center text-orange-600 mb-4">
                        <Clock className="mr-2" size={20} />
                        <span className="text-xl font-semibold">Coming Soon</span>
                      </div>
                    </div>
                    
                    <p className="text-orange-700 mb-6">
                      We're expanding X Invasion to {schools[activeSchool].name} soon! Join our mailing list to be notified when registration opens.
                    </p>
                    
                    <button
                      className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center text-lg transition duration-300"
                    >
                      Get Notified <MessageCircle className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* About The Competition */}
            <section className="py-16 bg-orange-50">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-orange-800 mb-12 text-center">
                  About X Invasion
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-lg text-orange-700 mb-6">
                      X Invasion is a reimagined university-level adaptation of Ghana's flagship tech innovation conference,
                      tailored to empower student entrepreneurs. This competition merges academic rigor with practical execution,
                      focusing on scalable, tech-driven solutions to Africa's pressing challenges.
                    </p>
                    <p className="text-lg text-orange-700 mb-6">
                      Unlike traditional university contests, X Invasion emphasizes real-world traction, investor engagement,
                      and post-competition acceleration to transform student ideas into investible ventures.
                    </p>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                      <h4 className="font-bold text-orange-800 mb-2">Team Requirements:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" size={18} />
                          <span>5 members per team</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" size={18} />
                          <span>Maximum 3 engineering students per team</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" size={18} />
                          <span>At least 2 students from other departments/faculties</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { title: "Promote Innovation", icon: Lightbulb, description: "Encourage novel solutions to societal challenges" },
                      { title: "Cultivate Scalable Solutions", icon: Rocket, description: "Develop tech-driven ventures with clear market fit" },
                      { title: "Bridge Academia & Industry", icon: Building, description: "Connect students with investors and corporate partners" },
                      { title: "Develop Entrepreneurial Skills", icon: BookOpen, description: "Offer practical learning in business strategy and MVP development" }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <item.icon className="h-10 w-10 text-orange-500 mb-4" />
                        <h3 className="text-xl font-bold text-orange-800 mb-2">{item.title}</h3>
                        <p className="text-orange-700">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Competition Tracks */}
            <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-orange-800 mb-12 text-center">
      Competition Tracks
    </h2>
    
    <div className="grid md:grid-cols-2 gap-12">
      {tracks.map((track) => (
        <div key={track.id} className="bg-orange-50 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-orange-600 text-white p-6 flex items-center">
            <track.icon className="h-8 w-8 mr-4" />
            <h3 className="text-2xl font-bold">{track.title}</h3>
          </div>
          
          <div className="p-6">
            <p className="text-lg text-orange-700 mb-6">{track.description}</p>
            
            {track.id === 'ideaBank' ? (
              <div>
                <h4 className="font-bold text-orange-800 mb-4">Available Projects:</h4>
                {track.examples.map((example, i) => (
                  <div key={i} className="mb-6 bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-bold text-orange-800 mb-2">{example.name}</h5>
                    <p className="text-orange-700 mb-2">{example.description}</p>
                    <button 
                      onClick={() => toggleProjectDetails(example.id)}
                      className="text-orange-600 hover:text-orange-800 font-semibold inline-flex items-center"
                    >
                      {visibleProject === example.id ? 'Hide Details' : 'View Details'} 
                      <ChevronRight className={`ml-1 h-4 w-4 transform transition-transform duration-300 
                        ${visibleProject === example.id ? 'rotate-90' : ''}`} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <h4 className="font-bold text-orange-800 mb-4">Focus Areas:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {track.focusAreas.map((area, i) => (
                    <div key={i} className="bg-white p-3 rounded-lg shadow-sm flex items-center">
                      <Zap className="text-orange-500 mr-2 h-4 w-4" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
          
                {/* Project Details Section - Only shows the active project */}
    {visibleProject && (
      <div id={`${visibleProject}-details`} className="mt-16 bg-orange-50 p-8 rounded-lg shadow-lg">
        {visibleProject === 'tek-vend' && (
          <>
            <h3 className="text-3xl font-bold text-orange-800 mb-6">Tek Vend Project Details</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-orange-700 mb-4">
                  Tek Vend is an innovative smart vending solution company that aims to revolutionize two key market segments:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full text-orange-700 mr-3 mt-1">1</div>
                    <div>
                      <h4 className="font-bold text-orange-800">Campus Convenience Retail</h4>
                      <p>Deploying smart vending machines at universities to provide students with easy access to snacks,
                      beverages, and essentials through mobile money payments.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full text-orange-700 mr-3 mt-1">2</div>
                    <div>
                      <h4 className="font-bold text-orange-800">Public Toilet Facility Management</h4>
                      <p>Transforming traditional public toilet management systems with automated vending solutions
                      that dispense toilet paper, soap, and other hygiene products.</p>
                    </div>
                  </li>
                </ul>
                <p className="mt-4 text-lg text-orange-700">
                  Your challenge is to create a plan for implementing and scaling Tek Vend on your campus,
                  with a focus on innovative approaches, technology integration, and business sustainability.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-orange-800 mb-2">Your Task</h4>
                  <p>Develop a comprehensive plan for implementing Tek Vend on your campus,
                  including locations, marketing strategy, operational plan, and potential improvements
                  to the business model.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-orange-800 mb-2">Key Technology Components</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Cpu className="text-orange-500 mr-2 h-4 w-4" />
                      <span>MTN Mobile Money integration</span>
                    </li>
                    <li className="flex items-center">
                      <Code className="text-orange-500 mr-2 h-4 w-4" />
                      <span>Cloud-based inventory tracking</span>
                    </li>
                    <li className="flex items-center">
                      <Wrench className="text-orange-500 mr-2 h-4 w-4" />
                      <span>Automated dispensing mechanisms</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-orange-800 mb-2">Business Model</h4>
                  <p>Pilot implementation with an 80/20 profit-sharing arrangement with the university.</p>
                  <p className="mt-2">Initial investment requirements: GH₵400,000</p>
                  <p className="mt-2">Projected breakeven: 24 months</p>
                </div>
              </div>
            </div>
          </>
        )}

        {visibleProject === 'campus-dining-management-system' && (
          <>
            <h3 className="text-3xl font-bold text-orange-800 mb-6">Campus Dining Management System Details</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-orange-700 mb-4">
                  The Campus Dining Management System aims to revolutionize the dining experience at university cafeterias and restaurants through integrated technology:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full text-orange-700 mr-3 mt-1">1</div>
                    <div>
                      <h4 className="font-bold text-orange-800">Customer Self-Ordering</h4>
                      <p>Tablet screens and QR codes at tables allow customers to browse menus and place orders directly without waiting for staff, improving efficiency and reducing wait times.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full text-orange-700 mr-3 mt-1">2</div>
                    <div>
                      <h4 className="font-bold text-orange-800">Kitchen Management Interface</h4>
                      <p>Digital display screens in the kitchen show incoming orders in real-time, allowing staff to process orders efficiently and mark them as complete when ready for service.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full text-orange-700 mr-3 mt-1">3</div>
                    <div>
                      <h4 className="font-bold text-orange-800">Integrated Payment System</h4>
                      <p>Cashiers can view completed orders awaiting payment, process mobile and card payments, and close orders upon completion, streamlining the entire dining experience.</p>
                    </div>
                  </li>
                </ul>
                <p className="mt-4 text-lg text-orange-700">
                  Your challenge is to design a comprehensive implementation plan for this system at your campus dining facilities, focusing on user experience, operational efficiency, and business viability.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-orange-800 mb-2">Your Task</h4>
                  <p>Develop a detailed implementation strategy for the Campus Dining Management System at your university, including user interface design, technical architecture, and a business model that benefits both students and the institution.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-orange-800 mb-2">Key Technology Components</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Cpu className="text-orange-500 mr-2 h-4 w-4" />
                      <span>Mobile and web application interfaces</span>
                    </li>
                    <li className="flex items-center">
                      <Code className="text-orange-500 mr-2 h-4 w-4" />
                      <span>Real-time order synchronization</span>
                    </li>
                    <li className="flex items-center">
                      <Wrench className="text-orange-500 mr-2 h-4 w-4" />
                      <span>Payment gateway integration</span>
                    </li>
                    <li className="flex items-center">
                      <Wrench className="text-orange-500 mr-2 h-4 w-4" />
                      <span>Analytics dashboard for management</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-orange-800 mb-2">Business Model</h4>
                  <p>Revenue sharing model with 10% of each transaction or a flat monthly licensing fee to the university.</p>
                  <p className="mt-2">Initial investment requirements: GH₵350,000</p>
                  <p className="mt-2">Projected breakeven: 18 months</p>
                  <p className="mt-2">Expected efficiency improvement: 30% reduction in wait times</p>
                </div>
              </div>
            </div>
          </>
        )}

        {visibleProject === 'smart-attendance-system' && (
          <>
            <h3 className="text-3xl font-bold text-orange-800 mb-6">Smart Attendance System Details</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-orange-700 mb-4">
                  The Smart Attendance System is a comprehensive solution designed to modernize attendance tracking across educational institutions:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full text-orange-700 mr-3 mt-1">1</div>
                    <div>
                      <h4 className="font-bold text-orange-800">Multi-Modal Biometric Verification</h4>
                      <p>Mobile attendance devices with fingerprint recognition, facial identification, and palm scanning capabilities ensure accurate identity verification for students, teachers, and staff.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full text-orange-700 mr-3 mt-1">2</div>
                    <div>
                      <h4 className="font-bold text-orange-800">Comprehensive Coverage</h4>
                      <p>Tracks attendance across multiple contexts including classroom sessions, school bus transportation, faculty meetings, and campus events with specialized verification workflows.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full text-orange-700 mr-3 mt-1">3</div>
                    <div>
                      <h4 className="font-bold text-orange-800">Analytics & Reporting</h4>
                      <p>Powerful dashboard with real-time analytics, attendance patterns, and automated notifications for parents, students, and administrators about attendance status and issues.</p>
                    </div>
                  </li>
                </ul>
                <p className="mt-4 text-lg text-orange-700">
                  Your challenge is to create an implementation plan for this system at your institution, focusing on privacy considerations, technical integration, and stakeholder adoption.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-orange-800 mb-2">Your Task</h4>
                  <p>Design a comprehensive implementation strategy for the Smart Attendance System, addressing technical architecture, data privacy concerns, and user adoption plans for students, faculty, and administrators.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-orange-800 mb-2">Key Technology Components</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Cpu className="text-orange-500 mr-2 h-4 w-4" />
                      <span>Mobile biometric devices</span>
                    </li>
                    <li className="flex items-center">
                      <Code className="text-orange-500 mr-2 h-4 w-4" />
                      <span>Secure data encryption</span>
                    </li>
                    <li className="flex items-center">
                      <Wrench className="text-orange-500 mr-2 h-4 w-4" />
                      <span>Cloud-based management system</span>
                    </li>
                    <li className="flex items-center">
                      <Wrench className="text-orange-500 mr-2 h-4 w-4" />
                      <span>Advanced analytics and reporting</span>
                    </li>
                    <li className="flex items-center">
                      <Wrench className="text-orange-500 mr-2 h-4 w-4" />
                      <span>Parent and student mobile app</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-orange-800 mb-2">Business Model</h4>
                  <p>Subscription-based model with tiered pricing based on institution size and features required.</p>
                  <p className="mt-2">Initial investment requirements: GH₵500,000</p>
                  <p className="mt-2">Projected breakeven: 24 months</p>
                  <p className="mt-2">Expected efficiency improvement: 95% reduction in attendance fraud, 80% reduction in administrative time</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    )}
  </div>
</section>

            {/* Competition Structure */}
            <section className="py-16 bg-orange-100">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-orange-800 mb-12 text-center">
                  Competition Structure
                </h2>
                
                <div className="relative">
                  {/* Timeline connector */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-orange-300 hidden md:block"></div>
                  
                  {/* Phases */}
                  <div className="space-y-12">
                    {phases.map((phase, index) => (
                      <div key={index} className="relative">
                        {/* Timeline dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-orange-500 z-10 hidden md:block"></div>
                        
                        <div className={`md:w-5/12 bg-white p-6 rounded-lg shadow-md ${
                          index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                        } hover:shadow-lg transition-shadow duration-300`}>
                          <h3 className="text-xl font-bold text-orange-800 mb-2">{phase.title}</h3>
                          <p className="text-orange-700 mb-2">{phase.description}</p>
                          <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {phase.timeline}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Prizes */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-orange-800 mb-12 text-center">
                  Prizes & Awards
                </h2>
                
                <div className="grid md:grid-cols-4 gap-6">
                  {prizes.map((prize, index) => (
                    <div key={index} className="bg-gradient-to-b from-orange-50 to-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                      <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <prize.icon className="text-orange-700 h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-orange-800 mb-2">{prize.title}</h3>
                      <div className="text-2xl font-bold text-orange-500 mb-2">{prize.amount}</div>
                      <p className="text-orange-700">{prize.extras}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 bg-orange-50 p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-2xl font-bold text-orange-800 mb-4">Total Prize Pool</h3>
                  <div className="text-4xl font-bold text-orange-500 mb-2">GHS 35,000</div>
                  <p className="text-lg text-orange-700">Plus incubation support, mentorship, and investor connections</p>
                </div>
              </div>
            </section>

            {/* Registration Form Section */}
            {showRegistrationForm && (
              <RegistrationForm 
                selectedSchool={selectedSchool} 
                schools={schools} 
              />
            )}
            
            {/* FAQ Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-orange-800 mb-12 text-center">
      Frequently Asked Questions
    </h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {[
        {
          question: "Who can participate in X Invasion?",
          answer: "Current students from participating universities can join. Teams must have 5 members with a maximum of 3 engineering students per team to encourage diverse perspectives."
        },
        {
          question: "Do we need a complete product to apply?",
          answer: "No, you only need an innovative idea or approach. The competition is designed to help you develop your concept into a prototype through mentorship and resources."
        },
        {
          question: "Is there a registration fee?",
          answer: "No, participation in X Invasion is completely free for all eligible students."
        },
        {
          question: "What if I don't have a team yet?",
          answer: "You can register as an individual, and we'll help match you with team members based on complementary skills and interests before the competition begins."
        },
        {
          question: "Do we retain ownership of our ideas?",
          answer: "Yes, teams retain full intellectual property rights to their ideas and innovations. The competition organizers and sponsors may request right of first refusal for investment opportunities."
        },
        {
          question: "What kind of support will teams receive?",
          answer: "Teams will receive mentorship, technical support, access to workspace and resources, and MVP funding to develop their ideas during the competition."
        },
        {
          question: "What happens if we win the Idea Bank Track?",
          answer: "Winners of the Idea Bank Track at each university will have the opportunity to establish a campus branch of the selected project with funding from our investors. The winning team leader will serve as branch CEO, managing operations while receiving a share of profits and potentially a salary depending on the specific project's terms."
        },
        {
          question: "Can we continue with the project after graduation?",
          answer: "Absolutely! The overall track winner from the inter-university finals will be offered a continued leadership role as CEO even after graduation. This provides a direct pathway from student entrepreneur to professional business leader running a real venture that originated from the competition."
        }
      ].map((faq, index) => (
        <div key={index} className="mb-6 bg-orange-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
          <h3 className="text-xl font-bold text-orange-800 mb-2">{faq.question}</h3>
          <p className="text-orange-700">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
</section>
                {/* Partners and Sponsors */}
                <section className="py-16 bg-orange-50">
                  <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-orange-800 mb-12 text-center">
                      Partners & Sponsors
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                      {[
                        { name: "MTN Ghana", category: "Industry Partner" },
                        { name: "Google for Startups", category: "Technology Partner" },
                        { name: "IBM Africa", category: "Technology Partner" },
                        { name: "Tek-Devisal", category: "Industry Partner" },
                        { name: "IoT Network", category: "Technology Partner" },
                        { name: "Injaro Investments", category: "Investor" },
                        { name: "Venture Capital Trust Fund", category: "Investor" },
                        { name: "MEST Africa", category: "Tech Hub" },
                        { name: "Impact Hub Accra", category: "Tech Hub" },
                        { name: "NEIP", category: "Government" },
                        { name: "Ministry for Youth", category: "Government" },
                        { name: "YEA", category: "Government" }
                      ].map((partner, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                          <div className="h-16 flex items-center justify-center mb-4">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                              <span className="text-orange-800 font-bold">{partner.name.charAt(0)}</span>
                            </div>
                          </div>
                          <h3 className="font-bold text-orange-800">{partner.name}</h3>
                          <p className="text-orange-600 text-sm">{partner.category}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-12 text-center">
                      <p className="text-orange-700 mb-6">Interested in becoming a sponsor?</p>
                      <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center text-lg transition duration-300">
                        Contact Us <DollarSign className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </section>
                
                {/* Contact Section */}
                <section className="py-16 bg-orange-100">
                  <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-orange-800 mb-6">Ready to Take the Challenge?</h2>
                    <p className="text-xl text-orange-700 mb-10 max-w-3xl mx-auto">
                      Join X Invasion and be part of Ghana's next generation of tech innovators and entrepreneurs!
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                      <button
                        onClick={() => openRegistrationForm('ug')}
                        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full inline-flex items-center text-lg transition duration-300"
                      >
                        UG Edition <School className="ml-2 h-5 w-5" />
                      </button>
                      <button
                        onClick={() => openRegistrationForm('knust')}
                        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full inline-flex items-center text-lg transition duration-300"
                      >
                        KNUST Edition <School className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                    <div className="mt-12">
                      <p className="text-orange-700 mb-2">Have questions? Contact us at:</p>
                      <a href="mailto:xinvasion@example.com" className="text-orange-800 font-bold hover:underline">
                        xinvasion@example.com
                      </a>
                    </div>
                  </div>
                </section>
              </main>
            )}
          </AnimatePresence>
          
          <Footer />
        </div>
      );
    };
    
    export default XInvasionLanding;