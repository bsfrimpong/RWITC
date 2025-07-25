import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, ChevronRight, Award, Users, Lightbulb, Rocket,
  Trophy, Zap, ArrowRight, School, BookOpen, Code, Cpu, Wrench,
  DollarSign, MessageCircle, Building, CheckCircle, PlayCircle, Clock,
  ChevronDown, Send, Loader, Phone, Mail, MapPin, Star, Target,
  Battery, Smartphone, Wifi, Recycle, ShoppingCart, Shield
} from 'lucide-react';
import Navbar from '../components/NavBar';
import Footer from '../components/footer';

const ArmbitionLanding = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      id: 'solar-charging',
      title: 'Solar-Powered Community Charging Station',
      category: 'Hardware & IoT',
      description: 'Build a solar charging hub that provides free, reliable phone charging for communities during power outages.',
      skills: ['Electronics', 'Renewable Energy', 'IoT Sensors', 'Arduino Programming'],
      features: [
        'Solar panel system with battery storage',
        'Multiple USB charging ports for different devices',
        'IoT monitoring and usage tracking',
        'Weather-resistant design',
        'LED lighting for night use'
      ],
      impact: 'Free, reliable charging access for community members',
      color: 'from-yellow-400 to-orange-500',
      image: '/images/solar-project.jpg'
    },
    {
      id: 'ai-waste',
      title: 'AI-Powered African Waste Data Collection & Sorting',
      category: 'Artificial Intelligence',
      description: 'Create the first AI model trained specifically on African waste patterns to revolutionize plastic sorting.',
      skills: ['AI/Machine Learning', 'Computer Vision', 'Data Collection', 'Mobile Development'],
      features: [
        'Mobile app for systematic waste data collection',
        'African waste image database creation',
        'AI model trained on local waste patterns',
        'Real-time plastic identification',
        'Community waste mapping'
      ],
      impact: 'First-ever African-trained plastic sorting AI for continental scaling',
      color: 'from-green-400 to-blue-500',
      image: '/images/ai-waste.jpg'
    },
    {
      id: 'vendor-platform',
      title: '24-Hour Economy Vendor Platform',
      category: 'Software Development',
      description: 'Build a digital platform supporting Ghana\'s 24-Hour Economy Policy with vendor discovery and emergency safety features.',
      skills: ['Web Development', 'Mobile Apps', 'Database Design', 'Emergency Systems'],
      features: [
        'Vendor registration with operating hours',
        'Real-time availability status updates',
        'Customer app for finding open vendors',
        'Integrated panic button for emergencies',
        'GPS location services'
      ],
      impact: 'Improved night economy efficiency and enhanced vendor safety',
      color: 'from-purple-400 to-pink-500',
      image: '/images/vendor-platform.jpg'
    }
  ];

  const locations = [
    {
      name: 'Kumasi Hub',
      venue: 'Hapa Space',
      address: 'Kumasi, Ashanti Region',
      icon: <Building className="h-6 w-6" />
    },
    {
      name: 'Accra Hub 1',
      venue: 'Asylum Down (Scholars International)',
      address: 'Asylum Down, Accra',
      icon: <Building className="h-6 w-6" />
    },
    {
      name: 'Accra Hub 2',
      venue: 'Dansoman (Opposite Total Filling Station)',
      address: 'Dansoman, Accra',
      icon: <Building className="h-6 w-6" />
    },
    {
      name: 'Accra Hub 3',
      venue: 'Achimota Forest Area',
      address: 'Achimota, Accra',
      icon: <Building className="h-6 w-6" />
    }
  ];

  const features = [
    {
      title: 'Real MVP Development',
      description: 'Build actual working technology that gets installed in real communities',
      icon: <Rocket className="h-8 w-8" />,
      highlight: 'Products with your child\'s name making real impact'
    },
    {
      title: 'Mixed-Age Collaboration',
      description: 'Primary, JHS & SHS students work together, building leadership and confidence',
      icon: <Users className="h-8 w-8" />,
      highlight: 'Leadership skills that last a lifetime'
    },
    {
      title: 'Industry Recognition',
      description: '8 industry professionals mentor each center, building networks for scholarships',
      icon: <Award className="h-8 w-8" />,
      highlight: 'Direct access to Ghana\'s top tech minds'
    },
    {
      title: 'Community Installation',
      description: 'Every project gets deployed in actual communities as part of Ghana\'s infrastructure',
      icon: <Target className="h-8 w-8" />,
      highlight: 'Real-world validation and social impact'
    }
  ];

  const schedule = [
    {
      week: 'Week 1',
      title: 'Foundation & Project Assignment',
      activities: [
        'Skills assessment and technical demos',
        'Introduction to all 3 projects',
        'Mixed-age team formation',
        'Design thinking workshops'
      ]
    },
    {
      week: 'Week 2',
      title: 'Deep Dive & Development',
      activities: [
        'Intensive technical training',
        'Market research and user interviews',
        'Initial prototype development',
        'Cross-team learning sessions'
      ]
    },
    {
      week: 'Week 3',
      title: 'Finalization & Community Impact',
      activities: [
        'MVP completion and testing',
        'Business model development',
        'Community installation',
        'Grand finale showcase'
      ]
    }
  ];

  const toggleProject = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  const handleRegistration = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfuo29WcTvarAYN2DyQAI-dXIrIHYRXyltaMqdyJp4AB60wLA/viewform', '_blank');
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-orange-50 font-nunito">
      <Navbar />
      
      {/* Hero Section - Fixed for mobile responsiveness */}
      <motion.header 
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24"
        style={{ zIndex: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </div>
        
        {/* Floating tech elements - Hidden on mobile for performance */}
        <div className="hidden md:block absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {[<Code key="code" />, <Cpu key="cpu" />, <Wrench key="wrench" />, <Smartphone key="phone" />][i % 4]}
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto z-10 text-center max-w-6xl" style={{ zIndex: 10, position: 'relative' }}>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white bg-opacity-15 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-white border-opacity-20"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 sm:mb-4 text-white leading-tight">
              ARM<span className="text-yellow-300">BITION</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-orange-100 mb-1 sm:mb-2">Summer Innovation School</p>
            <p className="text-sm sm:text-base md:text-lg text-orange-200">Building Tomorrow's Solutions Today</p>
          </motion.div>
          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white leading-tight px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Transform Your Child's Potential Into Real-World Impact
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-white max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Watch them build real technology that changes communities while developing skills that guarantee their future success. 
            From solar charging stations to AI waste sorting systems - your child creates actual solutions for real problems.
            <span className="block mt-2 sm:mt-4 text-yellow-300 font-semibold text-sm sm:text-base">
              Proven track record: 9 projects already built by students like yours
            </span>
          </motion.p>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-10 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {[
              { number: '3', label: 'Weeks' },
              { number: '3', label: 'Real Projects' },
              { number: '4', label: 'Locations' },
              { number: '30', label: 'Students/Center' }
            ].map((stat, index) => (
              <div key={index} className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white border-opacity-30">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-yellow-300 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-white font-semibold text-xs sm:text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <button 
              onClick={handleRegistration}
              className="w-full sm:w-auto bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Secure Your Child's Spot
            </button>
            <a href="#projects" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition duration-300 text-center">
              See What They'll Build
            </a>
          </motion.div>

          {formSubmitted && (
            <motion.div 
              className="mt-4 sm:mt-6 bg-yellow-100 text-yellow-800 p-3 sm:p-4 rounded-lg max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="font-semibold text-sm sm:text-base">Important:</p>
              <p className="text-sm sm:text-base">Your registration will only be processed after payment of the GH₵50 registration fee.</p>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Pride Section - Improved mobile layout */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-yellow-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-orange-800 mb-4 sm:mb-6 leading-tight">
              The Pride Every Parent Deserves
            </h2>
            <p className="text-lg sm:text-xl text-orange-700 max-w-4xl mx-auto leading-relaxed">
              Imagine the pride when your child explains how their solar charging station powers their community, 
              or how their AI system sorts waste to save the environment. This is the moment you've invested in.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-orange-500 mb-4 sm:mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-orange-800 mb-3 sm:mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-orange-700 mb-3 sm:mb-4 text-center text-sm sm:text-base">
                  {feature.description}
                </p>
                <div className="bg-orange-50 p-3 sm:p-4 rounded-xl">
                  <p className="text-xs sm:text-sm font-semibold text-orange-600 text-center">
                    {feature.highlight}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories & Real Projects - Mobile optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-orange-800 mb-4 sm:mb-6 leading-tight">
              See What Our Students Have Already Built
            </h2>
            <p className="text-lg sm:text-xl text-orange-700 max-w-4xl mx-auto mb-6 sm:mb-8">
              Don't just take our word for it. Watch real students from schools we've already trained 
              showcase the incredible projects they've built and deployed in their communities.
            </p>
            <div className="bg-green-100 border border-green-300 rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto">
              <p className="text-green-800 font-bold text-base sm:text-lg mb-2">Proven Track Record</p>
              <p className="text-green-700 text-sm sm:text-base">9 real projects built by students just like yours, now making actual impact in communities across Ghana.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-orange-800 mb-4 sm:mb-6">Real Students, Real Projects, Real Impact</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-orange-50 rounded-xl p-4 sm:p-6">
                  <h4 className="font-bold text-orange-800 mb-2 sm:mb-3 text-base sm:text-lg">Schools Already Trained</h4>
                  <p className="text-orange-700 text-sm sm:text-base">Multiple schools across Ghana have successfully completed our program, with students building functioning prototypes that address real community challenges.</p>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4 sm:p-6">
                  <h4 className="font-bold text-blue-800 mb-2 sm:mb-3 text-base sm:text-lg">9 Projects Completed</h4>
                  <p className="text-blue-700 text-sm sm:text-base">From solar charging stations to waste management systems, our students have proven that young minds can create solutions that work.</p>
                </div>
                
                <div className="bg-green-50 rounded-xl p-4 sm:p-6">
                  <h4 className="font-bold text-green-800 mb-2 sm:mb-3 text-base sm:text-lg">Community Deployment</h4>
                  <p className="text-green-700 text-sm sm:text-base">These aren't school experiments - they're real solutions being used by real people in real communities right now.</p>
                </div>
              </div>
            </div>

            <div className="text-center order-1 lg:order-2">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
                <div className="h-32 sm:h-48 bg-white/20 rounded-xl mb-4 flex items-center justify-center">
                  <PlayCircle className="h-12 w-12 sm:h-16 sm:w-16" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Watch Student Success Stories</h3>
                <p className="text-orange-100 mb-4 sm:mb-6 text-sm sm:text-base">
                  See actual students presenting their projects, explaining how they built them, 
                  and the impact they're making in their communities.
                </p>
                <a
                  href="https://www.youtube.com/@realworldtechic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 sm:py-4 px-4 sm:px-8 rounded-full text-sm sm:text-lg transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <PlayCircle className="mr-2 h-4 w-4 sm:h-6 sm:w-6" />
                  Watch on YouTube
                </a>
                <p className="text-orange-200 text-xs sm:text-sm mt-3 sm:mt-4">9 project videos available now</p>
              </div>
            </div>
          </div>

          {/* Video Gallery Preview - Mobile responsive */}
          <div className="bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Project Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: 'Solar Charging Stations in Action',
                  description: 'Students demonstrate their solar-powered community charging solutions',
                  icon: <Battery className="h-8 w-8 sm:h-10 sm:w-10 mx-auto" />
                },
                {
                  title: 'AI Waste Sorting Systems',
                  description: 'Young innovators explain their AI models trained on African waste data',
                  icon: <Cpu className="h-8 w-8 sm:h-10 sm:w-10 mx-auto" />
                },
                {
                  title: '24-Hour Economy Platforms',
                  description: 'Student teams showcase their digital platforms supporting night vendors',
                  icon: <Smartphone className="h-8 w-8 sm:h-10 sm:w-10 mx-auto" />
                }
              ].map((video, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-4 sm:p-6 hover:bg-gray-700 transition-colors duration-300">
                  <div className="text-orange-400 mb-3 sm:mb-4 flex justify-center">
                    {video.icon}
                  </div>
                  <h4 className="font-bold text-white mb-2 sm:mb-3 text-center text-sm sm:text-base">{video.title}</h4>
                  <p className="text-gray-300 text-xs sm:text-sm text-center mb-3 sm:mb-4">{video.description}</p>
                  <div className="flex justify-center">
                    <div className="bg-orange-600 rounded-full p-2 sm:p-3">
                      <PlayCircle className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6 sm:mt-8">
              <a
                href="https://www.youtube.com/@realworldtechic"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-full text-sm sm:text-lg transition duration-300 inline-flex items-center"
              >
                View All Project Videos
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Testimonial from completed program - Mobile responsive */}
          <div className="mt-12 sm:mt-16 bg-orange-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-orange-800 mb-4 sm:mb-6">What Parents Are Saying</h3>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg sm:text-xl text-orange-700 italic mb-4 sm:mb-6">
                  "I couldn't believe it when my daughter showed me the solar charging station she built. 
                  It's actually being used by people in our community! The pride I felt was indescribable. 
                  This program doesn't just teach - it transforms."
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-200 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-orange-800 text-sm sm:text-base">Mrs. Akosua Mensah</p>
                    <p className="text-orange-600 text-xs sm:text-sm">Parent of Armbition Graduate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Mobile optimized */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-orange-800 mb-4 sm:mb-6 leading-tight">
              What Your Child Will Actually Build
            </h2>
            <p className="text-lg sm:text-xl text-orange-700 max-w-4xl mx-auto">
              These aren't toy projects. Your child will create real technology solutions addressing Ghana's biggest challenges, 
              supporting the government's 24-Hour Economy Policy and environmental sustainability.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-gradient-to-r from-white to-orange-50 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-start">
                    <div className="text-center lg:text-left">
                      <div className="h-32 sm:h-40 lg:h-48 bg-gray-100 rounded-xl mb-3 sm:mb-4 flex items-center justify-center overflow-hidden">
                        <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-400">
                          {project.image ? (
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                          ) : (
                            <Code className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16" />
                          )}
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-orange-800 mb-2">
                        {project.title}
                      </h3>
                      <div className="inline-block bg-orange-100 text-orange-800 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                        {project.category}
                      </div>
                      <p className="text-orange-700 mb-4 sm:mb-6 text-sm sm:text-base">
                        {project.description}
                      </p>
                      <button
                        onClick={() => toggleProject(project.id)}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300 inline-flex items-center text-sm sm:text-base"
                      >
                        {activeProject === project.id ? 'Hide Details' : 'View Details'}
                        <ChevronDown className={`ml-2 h-4 w-4 sm:h-5 sm:w-5 transform transition-transform ${activeProject === project.id ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold text-orange-800 mb-3 text-sm sm:text-base">Skills Learned:</h4>
                          <div className="space-y-2">
                            {project.skills.map((skill, idx) => (
                              <div key={idx} className="bg-orange-100 text-orange-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-orange-800 mb-3 text-sm sm:text-base">Community Impact:</h4>
                          <div className="bg-green-100 text-green-800 p-3 sm:p-4 rounded-xl">
                            <p className="text-xs sm:text-sm font-semibold">{project.impact}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 sm:mt-8 border-t border-orange-200 pt-6 sm:pt-8"
                      >
                        <h4 className="font-bold text-orange-800 mb-3 sm:mb-4 text-lg sm:text-xl">Project Features:</h4>
                        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                              <span className="text-orange-700 text-sm sm:text-base">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure - Mobile optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-orange-800 mb-4 sm:mb-6 leading-tight">
              3-Week Transformation Journey
            </h2>
            <p className="text-lg sm:text-xl text-orange-700 max-w-3xl mx-auto">
              From curious students to confident innovators - here's how we transform your child's potential into real-world impact.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {schedule.map((week, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
                  <div className="w-full lg:w-1/3">
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl text-center">
                      <div className="text-3xl sm:text-4xl font-black text-orange-500 mb-2">{week.week}</div>
                      <h3 className="text-lg sm:text-xl font-bold text-orange-800">{week.title}</h3>
                    </div>
                  </div>
                  <div className="w-full lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {week.activities.map((activity, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs sm:text-sm font-bold">{idx + 1}</span>
                            </div>
                            <span className="text-orange-700 font-semibold text-sm sm:text-base">{activity}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Daily Schedule - Mobile responsive */}
          <div className="mt-12 sm:mt-16 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-orange-800 mb-4 sm:mb-6 text-center">Daily Schedule (10:30 AM - 3:30 PM)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
              {[
                { time: '10:30-11:45', activity: 'Project Team Work' },
                { time: '11:45-12:00', activity: 'Break' },
                { time: '12:00-1:15', activity: 'Technical Skills Training' },
                { time: '1:15-2:00', activity: 'Lunch Break' },
                { time: '2:00-3:30', activity: 'Project Development' }
              ].map((slot, index) => (
                <div key={index} className="bg-orange-50 rounded-xl p-3 sm:p-4 text-center">
                  <div className="font-bold text-orange-800 text-xs sm:text-sm mb-1 sm:mb-2">{slot.time}</div>
                  <div className="text-orange-700 text-xs sm:text-sm">{slot.activity}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-orange-600 mt-3 sm:mt-4 font-semibold text-sm sm:text-base">
              Perfect timing for working parents
            </p>
          </div>
        </div>
      </section>

      {/* Locations - Mobile optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-orange-800 mb-4 sm:mb-6 leading-tight">
              Convenient Locations Across Ghana
            </h2>
            <p className="text-lg sm:text-xl text-orange-700 max-w-3xl mx-auto">
              Choose the center closest to you. Each location delivers the same high-quality program with industry-standard equipment and expert mentors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-3 sm:mb-4">
                  <div className="text-orange-500">
                    {location.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-orange-800">{location.name}</h3>
                </div>
                <p className="text-orange-700 font-semibold mb-2 text-sm sm:text-base">{location.venue}</p>
                <p className="text-orange-600 mb-3 sm:mb-4 text-sm sm:text-base">{location.address}</p>
                <div className="bg-orange-100 rounded-xl p-3 sm:p-4">
                  <p className="text-orange-800 text-xs sm:text-sm font-semibold">30 students per center</p>
                  <p className="text-orange-800 text-xs sm:text-sm font-semibold">Industry-standard equipment</p>
                  <p className="text-orange-800 text-xs sm:text-sm font-semibold">8 professional mentors</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Mobile optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-600 to-orange-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 leading-tight">
              Complete Transformation Package
            </h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto">
              Everything included. No hidden costs. No additional fees. Complete transformation for one transparent price.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2"></div>
              <div className="p-6 sm:p-8 lg:p-12 text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-orange-600 mb-3 sm:mb-4">GH₵ 1,500</div>
                <p className="text-lg sm:text-xl text-orange-700 mb-6 sm:mb-8">Complete 3-Week Transformation Package</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {[
                    'All meals for 3 weeks (parents love this!)',
                    'All project materials and equipment access',
                    'Professional certificates for portfolio building',
                    '8 industry professional mentors per center',
                    'Real community project installation',
                    '6-month follow-up mentorship',
                    'Alumni network access for life',
                    'Priority placement for future programs'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 text-left">
                      <CheckCircle className="text-green-500 flex-shrink-0 h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-orange-700 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-red-100 border border-red-300 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                  <p className="text-red-800 font-bold text-lg sm:text-xl mb-2">LIMITED: Only 30 spots per center</p>
                  <p className="text-red-700 text-sm sm:text-base">Registration fills up fast - secure your child's future today!</p>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <p className="text-orange-700 font-semibold text-sm sm:text-base">Early Bird: 15% discount available</p>
                  <p className="text-orange-700 font-semibold text-sm sm:text-base">Payment Plan: GH₵ 50 registration + flexible installments</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button
                    onClick={handleRegistration}
                    className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition duration-300 inline-flex items-center justify-center"
                  >
                    <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Register Now
                  </button>
                  <a
                    href="tel:+233246756644"
                    className="w-full sm:w-auto border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition duration-300 inline-flex items-center justify-center"
                  >
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Call: 0246756644
                  </a>
                </div>

                <div className="mt-4 sm:mt-6 bg-yellow-100 text-yellow-800 p-3 sm:p-4 rounded-lg">
                  <p className="font-semibold text-sm sm:text-base">Important Registration Note:</p>
                  <p className="text-sm sm:text-base">Your registration will only be processed after payment of the GH₵50 registration fee.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section - Mobile optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-orange-800 mb-4 sm:mb-6 leading-tight">
              Why RTIC Armbition Is Different
            </h2>
            <p className="text-lg sm:text-xl text-orange-700 max-w-3xl mx-auto">
              Other programs teach. We build. Your child doesn't just learn about technology—they become technology creators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 sm:h-10 sm:w-10" />,
                title: 'Expert Industry Mentors',
                description: '8 industry professionals per center guide your child. Not teachers—actual practitioners building Ghana\'s tech future.',
                highlight: 'Real professionals, real impact'
              },
              {
                icon: <Building className="h-8 w-8 sm:h-10 sm:w-10" />,
                title: 'Real Community Installation',
                description: 'Every project gets installed in actual communities. Your child\'s work becomes part of Ghana\'s infrastructure.',
                highlight: 'Legacy projects that last'
              },
              {
                icon: <Users className="h-8 w-8 sm:h-10 sm:w-10" />,
                title: 'Mixed-Age Collaboration',
                description: 'Primary, JHS, and SHS students work together. Your child learns from older students while mentoring younger ones.',
                highlight: 'Leadership through collaboration'
              },
              {
                icon: <Award className="h-8 w-8 sm:h-10 sm:w-10" />,
                title: '6-Month Follow-Up',
                description: 'The relationship doesn\'t end. Continued mentorship and project monitoring ensure lasting impact.',
                highlight: 'Ongoing support for success'
              },
              {
                icon: <Target className="h-8 w-8 sm:h-10 sm:w-10" />,
                title: 'Government Policy Alignment',
                description: 'Projects directly support Ghana\'s 24-Hour Economy Policy and environmental sustainability initiatives.',
                highlight: 'Contributing to national development'
              },
              {
                icon: <Trophy className="h-8 w-8 sm:h-10 sm:w-10" />,
                title: 'Portfolio Building',
                description: 'Professional certificates and real project documentation for future scholarship and university applications.',
                highlight: 'Building your child\'s future'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-orange-500 mb-3 sm:mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-orange-800 mb-3 sm:mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-orange-700 mb-3 sm:mb-4 text-center text-sm sm:text-base">
                  {item.description}
                </p>
                <div className="bg-orange-100 p-2 sm:p-3 rounded-xl">
                  <p className="text-orange-800 text-xs sm:text-sm font-semibold text-center">
                    {item.highlight}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Mobile optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 leading-tight">
              Ready to Give Your Child This Pride?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Join the parents who chose to invest in real skills, real projects, and real impact. 
              Your child's transformation starts with one decision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              {
                icon: <Phone className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: 'Call Now',
                info: '+233-246-756644',
                action: 'tel:+233246756644'
              },
              {
                icon: <Mail className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: 'Email Us',
                info: 'realworldtechinnovationcenter@gmail.com',
                action: 'mailto:realworldtechinnovationcenter@gmail.com'
              },
              {
                icon: <MapPin className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: 'Visit Website',
                info: 'www.realworldtechcenter.com',
                action: 'https://www.realworldtechcenter.com'
              },
              {
                icon: <Clock className="h-6 w-6 sm:h-8 sm:w-8" />,
                title: 'Limited Time',
                info: '30 spots per center only',
                action: null
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-gray-700 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-orange-400 mb-3 sm:mb-4 flex justify-center">
                  {contact.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2">{contact.title}</h3>
                {contact.action ? (
                  <a
                    href={contact.action}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base break-words"
                  >
                    {contact.info}
                  </a>
                ) : (
                  <p className="text-gray-300 text-sm sm:text-base">{contact.info}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center bg-orange-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
              Transform Ghana's Future - One Student at a Time
            </h3>
            <p className="text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto mb-6 sm:mb-8">
              Give your child the proudest moment of their young life. Build their confidence, 
              their skills, and their future. Armbition is more than education—it's transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={handleRegistration}
                className="w-full sm:w-auto bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition duration-300 inline-flex items-center justify-center"
              >
                <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Register Now
              </button>
              <a
                href="tel:+233246756644"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition duration-300 inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Call: 0246756644
              </a>
            </div>
            <div className="mt-4 sm:mt-6 bg-white/20 rounded-lg p-3 sm:p-4 max-w-md mx-auto">
              <p className="text-orange-100 font-semibold text-sm sm:text-base">Note: Registration requires GH₵50 fee payment to be processed</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArmbitionLanding;