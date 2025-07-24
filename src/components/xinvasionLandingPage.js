import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar, ChevronRight, Award, Users, Lightbulb, Rocket,
    Trophy, Zap, ArrowRight, School, BookOpen, Code, Cpu, Wrench,
    DollarSign, MessageCircle, Building, CheckCircle, PlayCircle, Clock,
    ChevronDown, Send, Loader
  } from 'lucide-react';
import Navbar from '../components/NavBar';
import Footer from '../components/footer';
import ugLogo from '../images/Xinvasion/UG.jpg';
import knustLogo from '../images/Xinvasion/KNUST.png';
import Background from '../images/pitch.png';

// -------------------- Data --------------------
// Schools information - Updated with new timeline
const schools = {
  ug: {
    name: "University of Ghana",
    logo: ugLogo,
    venue: "UG School of Engineering Sciences",
    date: "September 17, 2025",
    registrationDeadline: "August 7, 2025",
    bootcampStart: "August 9, 2025",
    active: true,
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSetBOIZ8XStPIJBaSgBkOrx1G-j_EqEZQYP4eBhF_WzO3Aeug/formResponse",
    timeline: {
      applicationOpen: "July 29, 2025",
      applicationDeadline: "August 7, 2025",
      bootcampTraining: "August 9-23, 2025",
      teamSelection: "August 28, 2025",
      mvpSprint: "August 29 - September 16, 2025",
      finalPitch: "September 17, 2025"
    }
  },
  knust: {
    name: "Kwame Nkrumah University of Science and Technology",
    logo: knustLogo,
    venue: "CARISCA Innovations Lab, KNUST School of Business",
    date: "September 17, 2025",
    registrationDeadline: "August 7, 2025",
    bootcampStart: "August 9, 2025",
    active: true,
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScqdBPTYJHmIX17IkR0OkpY20Y-6IK76B5eo0OA68_b4xWRig/formResponse",
    timeline: {
      applicationOpen: "July 29, 2025",
      applicationDeadline: "August 7, 2025",
      bootcampTraining: "August 9-23, 2025",
      teamSelection: "August 28, 2025", 
      mvpSprint: "August 29 - September 16, 2025",
      finalPitch: "September 17, 2025"
    }
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

// Updated phases reflecting new team selection structure
const phases = [
  {
    title: "Phase 1: Application Period",
    description: "Submit your application. All registered participants will go through training.",
    timeline: "July 29 - August 7, 2025"
  },
  {
    title: "Phase 2: Bootcamp Training", 
    description: "Intensive 2-week online training program open to all applicants covering fundamentals, technical development, and pitch preparation.",
    timeline: "August 9 - August 23, 2025"
  },
  {
    title: "Phase 3: Team Selection",
    description: "Team formation and proposal submission. 5 teams selected and sponsored for MVP Sprint (2 from Idea Bank Track, 3 from Original Ideas Track).",
    timeline: "August 24 - August 28, 2025"
  },
  {
    title: "Phase 4: MVP Sprint",
    description: "5 sponsored teams build their MVP with funding support, lab access, and technical guidance.",
    timeline: "August 29 - September 16, 2025"
  },
  {
    title: "Phase 5: Final Pitch Day",
    description: "All 5 teams present their MVPs. Local winner advances to national competition.",
    timeline: "September 17, 2025"
  }
];

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

// Background images
const backgroundImages = {
  heroImage: Background,
  patternOverlay: "https://www.transparenttextures.com/patterns/cubes.png"
};

// -------------------- Registration Form Component --------------------
const RegistrationForm = ({ selectedSchool, schools }) => {
  const [formData, setFormData] = useState({
    school: selectedSchool,
    fullName: '',
    email: '',
    phone: '',
    department: '',
    level: '',
    interest: '',
    preferredTrack: '',
    hasTeam: '',
    teamMembers: '',
    projectIdea: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Submit to backend API that will post to Google Forms
      const response = await fetch('/api/submit-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          school: selectedSchool,
          fullName: '',
          email: '',
          phone: '',
          department: '',
          level: '',
          interest: '',
          preferredTrack: '',
          hasTeam: '',
          teamMembers: '',
          projectIdea: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registration-form" className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-800 mb-8 text-center">
          Register for X Invasion: {schools[selectedSchool].name} Edition
        </h2>
        <p className="text-center text-orange-700 mb-12 max-w-3xl mx-auto">
          Complete this form to register for the program. All registered participants will go through 
          the 2-week intensive bootcamp training starting August 9th, 2025.
        </p>

        {/* Timeline Display */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-orange-800 mb-4 text-center">Program Timeline</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(schools[selectedSchool].timeline || {}).map(([key, date]) => (
              <div key={key} className="bg-orange-50 p-3 rounded-lg">
                <h4 className="font-bold text-orange-800 text-sm">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </h4>
                <p className="text-orange-700">{date}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {/* School Selection (Hidden) */}
          <input type="hidden" name="school" value={formData.school} />
          
          {/* Personal Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-6">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-orange-700 font-semibold mb-2">Full Name*</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-orange-700 font-semibold mb-2">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-orange-700 font-semibold mb-2">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="department" className="block text-orange-700 font-semibold mb-2">Department/Faculty*</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="level" className="block text-orange-700 font-semibold mb-2">Level/Year of Study*</label>
                <select
                  id="level"
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
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
          
          {/* Project Interest */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-6">Project Interest</h3>
            
            <div className="mb-4">
              <label htmlFor="preferredTrack" className="block text-orange-700 font-semibold mb-2">Preferred Competition Track*</label>
              <select
                id="preferredTrack"
                name="preferredTrack"
                value={formData.preferredTrack}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              >
                <option value="">Select your preferred track</option>
                <option value="ideaBank">Idea Bank Track (2 teams selected)</option>
                <option value="originalIdea">Original Ideas Track (3 teams selected)</option>
              </select>
              <p className="text-sm text-orange-600 mt-2">
                You can learn about both tracks during training and make your final choice then.
              </p>
            </div>
            
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
                <option value="EdTech">Educational Technology</option>
                <option value="HealthTech">Health Technology</option>
                <option value="FinTech">Financial Technology</option>
                <option value="AgriTech">Agricultural Technology</option>
                <option value="Retail">Retail & E-commerce</option>
                <option value="Sustainability">Sustainability Solutions</option>
                <option value="Mobility">Smart Mobility & Logistics</option>
                <option value="AI">Artificial Intelligence</option>
                <option value="IoT">Internet of Things</option>
                <option value="Blockchain">Blockchain Technology</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label htmlFor="hasTeam" className="block text-orange-700 font-semibold mb-2">Do you have a team already?*</label>
              <select
                id="hasTeam"
                name="hasTeam"
                value={formData.hasTeam}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              >
                <option value="">Select option</option>
                <option value="yes">Yes, I have a team</option>
                <option value="partial">I have some team members</option>
                <option value="no">No, I need help finding team members</option>
              </select>
            </div>

            {formData.hasTeam === 'yes' || formData.hasTeam === 'partial' ? (
              <div className="mb-4">
                <label htmlFor="teamMembers" className="block text-orange-700 font-semibold mb-2">Team Members (Names and Departments)</label>
                <textarea
                  id="teamMembers"
                  name="teamMembers"
                  value={formData.teamMembers}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="List your current team members and their departments..."
                ></textarea>
              </div>
            ) : null}
            
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
                I confirm that I am a current student at {schools[selectedSchool].name} and agree to participate 
                in the full 2-week bootcamp training program starting August 9th, 2025. I understand that all 
                participants will go through training regardless of final team selection.
              </span>
            </label>
          </div>
          
          {/* Submit Button */}
          <div className="text-center">
            {submitStatus === 'success' && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold">Registration successful! Check your email for confirmation.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-semibold">There was an error submitting your registration. Please try again.</p>
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-bold py-3 px-8 rounded-full inline-flex items-center text-lg transition duration-300"
            >
              {isSubmitting ? (
                <>
                  <Loader className="animate-spin mr-2 h-5 w-5" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Registration <Send className="ml-2 h-5 w-5" />
                </>
              )}
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

  const handleRegisterClick = (schoolKey) => {
    const school = schools[schoolKey];
    if (school.active && school.formUrl) {
      window.open(school.formUrl, '_blank');
    }
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
                Welcome to <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">X Invasion</span>
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
                  
                  <div className="h-12 w-full bg-gray-700 rounded-full overflow-hidden mb-6">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-orange-400 to-orange-600"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 3, ease: "easeInOut" }}
                    />
                  </div>
                  
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
            </motion.div>
          </motion.div>
        ) : (
          // Main Content
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
                  className="text-xl text-orange-200 max-w-2xl mx-auto mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  From Lecture Halls to Unicorn Halls: Building Africa's Tech Future, One Student at a Time
                </motion.p>

                <motion.div 
                  className="bg-orange-600 bg-opacity-90 text-white p-4 rounded-lg max-w-2xl mx-auto mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <p className="font-bold text-lg mb-2"> Registration Closes Soon!</p>
                  <p>Applications close <strong>August 7, 2025</strong></p>
                  <p>Training starts <strong>August 9, 2025</strong></p>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col md:flex-row justify-center gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <button
                    onClick={() => handleRegisterClick('ug')}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full inline-flex items-center text-lg transition duration-300"
                  >
                    UG Edition <School className="ml-2 h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleRegisterClick('knust')}
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
                        <p className="text-orange-600 mb-2">
                          <Calendar className="inline mr-2" size={18} />
                          Final Pitch Day: {schools[activeSchool].date}
                        </p>
                        <p className="text-orange-600 mb-2">
                          <Calendar className="inline mr-2" size={18} />
                          Training Starts: {schools[activeSchool].bootcampStart}
                        </p>
                        {schools[activeSchool].venue && (
                          <p className="text-orange-600 mb-4">
                            <Building className="inline mr-2" size={18} />
                            Venue: {schools[activeSchool].venue}
                          </p>
                        )}
                        <p className="text-red-600 font-semibold">
                          Registration Deadline: {schools[activeSchool].registrationDeadline}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleRegisterClick(activeSchool)}
                        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center text-lg transition duration-300"
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
                    
                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center text-lg transition duration-300">
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
                      tailored to empower student entrepreneurs. This intensive 7-week program transforms innovative ideas 
                      into market-ready solutions through comprehensive training, mentorship, and funding support.
                    </p>
                    <p className="text-lg text-orange-700 mb-6">
                      Unlike traditional university contests, X Invasion emphasizes practical execution and MVP development.
                      All participants receive valuable entrepreneurship training, with 5 selected teams (2 from Idea Bank Track, 
                      3 from Original Ideas Track) receiving funding and technical support to build their prototypes. Each track 
                      produces a winner who receives GH₵ 2,000 and advances to compete for the GH₵ 10,000 national prize.
                    </p>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                      <h4 className="font-bold text-orange-800 mb-2">Competition Structure:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" size={18} />
                          <span>All applicants participate in 2-week intensive bootcamp</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" size={18} />
                          <span>5 teams selected: 2 from Idea Bank + 3 from Original Ideas</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" size={18} />
                          <span>Each track winner receives GH₵ 2,000 and advances to national finals</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" size={18} />
                          <span>National champion receives GH₵ 10,000 grand prize</span>
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
                      <div className="bg-orange-600 text-white p-6 flex items-center justify-between">
                        <div className="flex items-center">
                          <track.icon className="h-8 w-8 mr-4" />
                          <h3 className="text-2xl font-bold">{track.title}</h3>
                        </div>
                        <div className="bg-orange-500 px-3 py-1 rounded-full text-sm font-bold">
                          {track.id === 'ideaBank' ? '2 Teams Selected' : '3 Teams Selected'}
                        </div>
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
                      
                {/* Project Details Section */}
                {visibleProject && (
                  <div id={`${visibleProject}-details`} className="mt-16 bg-orange-50 p-8 rounded-lg shadow-lg">
                    {/* Project details content remains the same as in original */}
                  </div>
                )}
              </div>
            </section>

            {/* Prizes & Competition Structure */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-orange-800 mb-12 text-center">
                  Prizes & Competition Structure
                </h2>
                
                {/* Local Competition */}
                <div className="mb-16">
                  <h3 className="text-3xl font-bold text-orange-700 mb-8 text-center">
                    🏆 Local Competition (Per School)
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="bg-gradient-to-b from-yellow-50 to-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 border-2 border-yellow-200">
                      <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Trophy className="text-yellow-700 h-8 w-8" />
                      </div>
                      <h4 className="text-xl font-bold text-orange-800 mb-2">Track Winners</h4>
                      <div className="text-2xl font-bold text-orange-500 mb-2">GH₵ 2,000</div>
                      <p className="text-orange-700 mb-2">Each Track Winner</p>
                      <p className="text-sm text-orange-600">+ Business Support Package</p>
                      <p className="text-sm text-orange-600">+ Advances to National Competition</p>
                    </div>
                    
                    <div className="bg-gradient-to-b from-orange-50 to-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                      <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="text-orange-700 h-8 w-8" />
                      </div>
                      <h4 className="text-xl font-bold text-orange-800 mb-2">All 5 Finalists</h4>
                      <div className="text-lg font-bold text-orange-500 mb-2">GH₵ 1,500</div>
                      <p className="text-orange-700 mb-2">MVP Development Funding</p>
                      <p className="text-sm text-orange-600">+ Mentorship & Lab Access</p>
                      <p className="text-sm text-orange-600">+ Technical Support</p>
                    </div>

                    <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="text-blue-700 h-8 w-8" />
                      </div>
                      <h4 className="text-xl font-bold text-orange-800 mb-2">All Participants</h4>
                      <div className="text-lg font-bold text-orange-500 mb-2">Free Training</div>
                      <p className="text-orange-700 mb-2">2-Week Intensive Bootcamp</p>
                      <p className="text-sm text-orange-600">+ Certificate of Participation</p>
                      <p className="text-sm text-orange-600">+ Networking Opportunities</p>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg shadow-md text-center">
                    <h4 className="text-xl font-bold text-orange-800 mb-2">Track Winner Breakdown</h4>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-bold text-orange-700 mb-2">💡 Idea Bank Track Winner</h5>
                        <p className="text-2xl font-bold text-orange-500 mb-1">GH₵ 2,000</p>
                        <p className="text-orange-600 text-sm">Selected from 2 finalist teams</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h5 className="font-bold text-orange-700 mb-2">🚀 Original Ideas Track Winner</h5>
                        <p className="text-2xl font-bold text-orange-500 mb-1">GH₵ 2,000</p>
                        <p className="text-orange-600 text-sm">Selected from 3 finalist teams</p>
                      </div>
                    </div>
                    <p className="text-sm text-orange-600">Both track winners advance to compete in the National Competition</p>
                  </div>
                </div>

                {/* National Competition */}
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-orange-700 mb-8 text-center">
                    🌟 National X Invasion Competition
                  </h3>
                  
                  <div className="max-w-2xl mx-auto">
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-lg shadow-lg text-center border-2 border-purple-200">
                      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Trophy className="text-white h-12 w-12" />
                      </div>
                      <h4 className="text-3xl font-bold text-purple-800 mb-4">National Champion</h4>
                      <div className="text-4xl font-bold text-purple-600 mb-4">GH₵ 10,000</div>
                      <p className="text-lg text-purple-700 mb-4">Grand Prize for Overall Winner</p>
                      
                      <div className="bg-white p-4 rounded-lg shadow-inner">
                        <h5 className="font-bold text-purple-800 mb-3">Additional Benefits:</h5>
                        <ul className="text-purple-700 space-y-2">
                          <li>• Seed funding opportunities</li>
                          <li>• Incubation program access</li>
                          <li>• Investor pitch opportunities</li>
                          <li>• Media spotlight and publicity</li>
                          <li>• Ongoing mentorship program</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center bg-orange-100 p-6 rounded-lg">
                  <h4 className="text-2xl font-bold text-orange-800 mb-2">Path to Success</h4>
                  <p className="text-lg text-orange-700 mb-4">
                    Local Track Winners (GH₵ 2,000 each) → National Competition → GH₵ 10,000 Grand Prize
                  </p>
                  <div className="flex justify-center items-center space-x-4 text-orange-600 flex-wrap">
                    <span className="bg-orange-200 px-4 py-2 rounded-full font-bold mb-2">UG Winners</span>
                    <ArrowRight className="h-6 w-6 mb-2" />
                    <span className="bg-orange-200 px-4 py-2 rounded-full font-bold mb-2">vs</span>
                    <ArrowRight className="h-6 w-6 mb-2" />
                    <span className="bg-orange-200 px-4 py-2 rounded-full font-bold mb-2">KNUST Winners</span>
                    <ArrowRight className="h-6 w-6 mb-2" />
                    <span className="bg-purple-200 px-4 py-2 rounded-full font-bold text-purple-800 mb-2">National Champion</span>
                  </div>
                </div>
              </div>
            </section>
            <section className="py-16 bg-orange-100">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-orange-800 mb-12 text-center">
                  Program Timeline
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

            {/* Registration Form Section */}
            {showRegistrationForm && (
              <RegistrationForm 
                selectedSchool={selectedSchool} 
                schools={schools} 
              />
            )}
            
            {/* Contact Section */}
            <section className="py-16 bg-orange-100">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-orange-800 mb-6">Ready to Take the Challenge?</h2>
                <p className="text-xl text-orange-700 mb-10 max-w-3xl mx-auto">
                  Join X Invasion and be part of Ghana's next generation of tech innovators and entrepreneurs!
                </p>
                <p className="text-lg text-red-600 font-bold mb-8">
                  ⏰ Registration closes August 7, 2025 - Don't miss out!
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                  <button
                    onClick={() => handleRegisterClick('ug')}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full inline-flex items-center text-lg transition duration-300"
                  >
                    UG Edition <School className="ml-2 h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleRegisterClick('knust')}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full inline-flex items-center text-lg transition duration-300"
                  >
                    KNUST Edition <School className="ml-2 h-5 w-5" />
                  </button>
                </div>
                <div className="mt-12">
                  <p className="text-orange-700 mb-2">Have questions? Contact us at:</p>
                  <a href="mailto:contact@realworldtechcenter.com" className="text-orange-800 font-bold hover:underline">
                  contact@realworldtechcenter.com
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