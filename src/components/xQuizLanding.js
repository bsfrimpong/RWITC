import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, ChevronRight, Award, Users, Lightbulb, Rocket,
  Trophy, Zap, ArrowRight, School, BookOpen, Code, Cpu, Wrench,
  DollarSign, MessageCircle, Building, CheckCircle, PlayCircle, Clock,
  ChevronDown, Mic, Bell, BookOpen as Book, Target, Sparkles, Share2, Radio
} from 'lucide-react';
import Navbar from '../components/NavBar';
import Footer from '../components/footer';
import Background from '../images/shs.jpg';


// Quiz buzzer sound
const buzzerSound = new Audio('/sounds/buzzer.mp3'); // Add a buzzer sound to your public folder

const XQuizLanding = () => {
  // Animation state
  const [isPressedBuzzer, setIsPressedBuzzer] = useState(false);
  const [showQuizQuestion, setShowQuizQuestion] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  // Handle the buzzer animation
  const handlePressBuzzer = () => {
    buzzerSound.play();
    setIsPressedBuzzer(true);
    setTimeout(() => {
      setShowQuizQuestion(true);
    }, 1000);
  };
  
  // Handle answering the question
  const handleAnswerQuestion = () => {
    setIsAnswered(true);
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 2000);
  };

  // Competition phases (from NIC document)
  const phases = [
    {
      title: "Phase 1: Teacher and Mentor Workshop",
      description: "Equip STEM teachers and technical mentors with skills to guide students in problem-solving and innovation.",
      icon: Book
    },
    {
      title: "Phase 2: Problem Sponsorship and Submission",
      description: "Companies sponsor real-world challenges for students to solve, with specific sub-themes.",
      icon: Target
    },
    {
      title: "Phase 3: School-Level Problem-Solving",
      description: "Schools define problems and propose innovative solutions through concept notes and project charters.",
      icon: Lightbulb
    },
    {
      title: "Phase 4: Mentorship and Project Development",
      description: "Technical mentors guide schools in bringing their solutions to life with functional prototypes.",
      icon: Wrench
    },
    {
      title: "Phase 5: Video Submissions",
      description: "Schools showcase projects through videos for public voting and engagement.",
      icon: Share2
    },
    {
      title: "Phase 6: Final Quiz and Showcase",
      description: "Finalists compete in a multi-stage quiz and present their completed projects to judges.",
      icon: Trophy
    }
  ];

  // Key features
  const features = [
    {
      title: "Inclusivity",
      description: "Schools from all regions, including rural areas, are encouraged to participate.",
      icon: Users
    },
    {
      title: "Real-World Impact",
      description: "Solutions address practical challenges, ensuring relevance and scalability.",
      icon: Building
    },
    {
      title: "Public Engagement",
      description: "Videos and voting create a platform for broader community involvement.",
      icon: Share2
    },
    {
      title: "Sponsor Collaboration",
      description: "Companies contribute directly to innovation by providing real problems and resources.",
      icon: DollarSign
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />
      
      <AnimatePresence>
        {!isPageLoaded ? (
          <motion.div 
            className="absolute inset-0 z-30 bg-gray-900 flex flex-col items-center justify-center p-6"
            exit={{ 
              opacity: 0,
              transition: { duration: 1.5, ease: "easeInOut" }
            }}
          >
            {!isPressedBuzzer ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                  Welcome to <span className="text-gradient bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">X Quiz</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                  Ghana's premier innovation and STEM competition for secondary schools
                </p>
                
                {/* Buzzer Button */}
                <motion.button
                  className="relative w-36 h-36 bg-red-600 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 focus:outline-none"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(239, 68, 68, 0.6)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePressBuzzer}
                >
                  <div className="absolute inset-2 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">PRESS</span>
                  </div>
                  <div className="absolute -inset-2 border-2 border-red-400 rounded-full animate-ping opacity-30"></div>
                </motion.button>
                
                <p className="text-white mt-6">Hit the buzzer to begin!</p>
              </motion.div>
            ) : showQuizQuestion ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-2xl w-full text-center"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Quick Question:</h2>
                <p className="text-xl text-orange-200 mb-8">
                  Are you ready to discover how your school can participate in Ghana's most innovative STEM competition?
                </p>
                
                <div className="flex justify-center gap-4">
                  <motion.button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAnswerQuestion}
                  >
                    Yes, tell me more!
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                className="text-center" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div 
                  className="w-24 h-24 mx-auto mb-8"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { repeat: Infinity, duration: 2, ease: "linear" },
                    scale: { repeat: Infinity, duration: 1.5 }
                  }}
                >
                  <Sparkles className="w-full h-full text-orange-500" />
                </motion.div>
                <h2 className="text-3xl font-bold text-white mb-4">Loading X Quiz...</h2>
                <p className="text-gray-300">Preparing an amazing experience for you!</p>
              </motion.div>
            )}
          </motion.div>
        ) : (
          // Main Content (visible after animation completes)
          <main>
            {/* Hero Section */}
            <header 
              className="relative h-[650px] flex items-center justify-center"
              style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
              <div 
                className="absolute inset-0 opacity-20 z-0"
                style={{
                  backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')",
                  backgroundSize: '400px'
                }}
              ></div>
              <div className="container mx-auto px-4 z-10 text-center">
                <motion.h1 
                  className="text-6xl font-bold mb-6 text-white"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  X <span className="text-orange-400">Quiz</span>
                </motion.h1>
                
                <motion.p 
                  className="text-2xl text-white max-w-3xl mx-auto mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  The National Innovation Quiz for Secondary Schools
                </motion.p>
                
                <motion.p 
                  className="text-xl text-orange-200 max-w-2xl mx-auto mb-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Empowering students to solve real-world challenges through innovation, critical thinking, and hands-on projects
                </motion.p>
                
                <motion.div 
                  className="flex flex-col md:flex-row justify-center gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full inline-flex items-center text-lg transition duration-300"
                  >
                    Register Your School <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button
                    className="bg-white hover:bg-gray-100 text-orange-600 font-bold py-4 px-8 rounded-full inline-flex items-center text-lg transition duration-300"
                  >
                    Become a Sponsor <DollarSign className="ml-2 h-5 w-5" />
                  </button>
                </motion.div>
              </div>
            </header>

            {/* About X Quiz */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-orange-800 mb-10 text-center">
                  About X Quiz
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-lg text-orange-700 mb-6">
                      The <span className="font-bold">National Innovation Quiz (NIQ)</span> is a transformative competition 
                      aimed at empowering Ghanaian students to address real-world challenges through STEM education, 
                      practical innovation, and critical thinking.
                    </p>
                    <p className="text-lg text-orange-700 mb-6">
                      By collaborating with educators, technical mentors, and industry sponsors, X Quiz ensures that participants 
                      not only gain knowledge but also create impactful solutions for their schools and communities.
                    </p>
                    <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                      <h4 className="font-bold text-orange-800 mb-4">What sets X Quiz apart:</h4>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <CheckCircle className="text-orange-500 mt-1 mr-3 flex-shrink-0" size={20} />
                          <span>Focus on real-world problem-solving rather than just theoretical knowledge</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-orange-500 mt-1 mr-3 flex-shrink-0" size={20} />
                          <span>Students build actual prototypes and MVPs that address genuine challenges</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-orange-500 mt-1 mr-3 flex-shrink-0" size={20} />
                          <span>Direct industry engagement with companies submitting relevant problems</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-orange-500 mt-1 mr-3 flex-shrink-0" size={20} />
                          <span>Multi-stage format combining quizzes, project development, and public showcase</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <div key={index} className="bg-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <feature.icon className="h-12 w-12 text-orange-500 mb-4" />
                        <h3 className="text-xl font-bold text-orange-800 mb-2">{feature.title}</h3>
                        <p className="text-orange-700">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-orange-50">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-orange-800 mb-12 text-center">
                  How X Quiz Works
                </h2>
                
                <div className="relative">
                  {/* Timeline connector */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-orange-300 hidden md:block"></div>
                  
                  {/* Phases */}
                  <div className="space-y-12">
                    {phases.map((phase, index) => (
                      <div key={index} className="relative">
                        {/* Timeline dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-orange-500 z-10 hidden md:flex items-center justify-center">
                          <phase.icon className="text-white h-6 w-6" />
                        </div>
                        
                        <div className={`md:w-5/12 bg-white p-6 rounded-lg shadow-md ${
                          index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                        } hover:shadow-lg transition-shadow duration-300`}>
                          <div className="md:hidden flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mr-4">
                              <phase.icon className="text-white h-5 w-5" />
                            </div>
                            <h3 className="text-xl font-bold text-orange-800">{phase.title}</h3>
                          </div>
                          <h3 className="text-xl font-bold text-orange-800 mb-2 hidden md:block">{phase.title}</h3>
                          <p className="text-orange-700">{phase.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Quiz Format Section */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-orange-800 mb-12 text-center">
                  Final Quiz Format
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <span className="text-white text-2xl font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-orange-800 mb-4 text-center">General Innovation Quiz</h3>
                    <p className="text-orange-700">
                      Tests knowledge on innovation principles, problem-solving methods, and project development 
                      (e.g., Business Model Canvas, Scrum, MVP testing).
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <span className="text-white text-2xl font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-orange-800 mb-4 text-center">Problem of the Day Challenge</h3>
                    <p className="text-orange-700">
                      Teams are given a new real-world problem to define, brainstorm, and create a 
                      low-fidelity prototype with proposed implementation steps.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <span className="text-white text-2xl font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-orange-800 mb-4 text-center">Project Pitch & Assessment</h3>
                    <p className="text-orange-700">
                      Teams present their completed projects. Judges evaluate problem-solving approach, 
                      prototype functionality, creativity, and potential impact.
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <p className="text-lg text-orange-700 mb-6 max-w-3xl mx-auto">
                    The top school is awarded the <span className="font-bold">National Innovation Trophy</span>, with 
                    other finalists receiving recognition and prizes. Winning solutions are considered for scaling 
                    and implementation in other schools or communities.
                  </p>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center">
                    Download Detailed Guidelines <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </section>

            {/* Primetime Partnership */}
            <section className="py-16 bg-orange-100">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-orange-800 mb-6">
                      A Strategic Partnership with Primetime
                    </h2>
                    <p className="text-lg text-orange-700 mb-6">
                      X Quiz is a collaborative initiative between Tek-Devisal and Primetime Limited, 
                      bringing together expertise in innovation training and educational competitions.
                    </p>
                    <p className="text-lg text-orange-700 mb-6">
                      Our partnership enhances The STEM Festival with a focus on developing Minimum Viable Products (MVPs) 
                      that can be installed, tested, and iterated upon based on real-world feedback.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center">
                        <Radio className="text-orange-500 mr-2" />
                        <span className="text-orange-700">Broadcast on national TV</span>
                      </div>
                      <div className="flex items-center">
                        <Mic className="text-orange-500 mr-2" />
                        <span className="text-orange-700">Hosted by renowned presenters</span>
                      </div>
                      <div className="flex items-center">
                        <Bell className="text-orange-500 mr-2" />
                        <span className="text-orange-700">Nationwide participation</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
                      <h3 className="text-2xl font-bold text-orange-800 mb-4">Key Partnership Benefits</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <CheckCircle className="text-orange-500 mt-1 mr-3 flex-shrink-0" size={20} />
                          <span className="text-orange-700">Mentorship & real-world project development for students</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-orange-500 mt-1 mr-3 flex-shrink-0" size={20} />
                          <span className="text-orange-700">Innovation & technology integration training</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-orange-500 mt-1 mr-3 flex-shrink-0" size={20} />
                          <span className="text-orange-700">Structured project validation and MVP showcases</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-orange-500 mt-1 mr-3 flex-shrink-0" size={20} />
                          <span className="text-orange-700">Industry engagement to attract potential investors</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Expected Outcomes */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-orange-800 mb-12 text-center">
                  Expected Outcomes
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-orange-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                    <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="text-orange-600 h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-800 mb-2">Empowered Students</h3>
                    <p className="text-orange-700">Participants gain skills in STEM, problem-solving, and innovation</p>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                    <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Rocket className="text-orange-600 h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-800 mb-2">Scalable Solutions</h3>
                    <p className="text-orange-700">Prototypes can be implemented in schools and communities nationwide</p>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                    <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Share2 className="text-orange-600 h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-800 mb-2">Increased Awareness</h3>
                    <p className="text-orange-700">Public voting and media coverage raise awareness about STEM education</p>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                    <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Building className="text-orange-600 h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold text-orange-800 mb-2">Stronger Partnerships</h3>
                    <p className="text-orange-700">Collaborations between schools, sponsors, and mentors create a sustainable ecosystem</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-orange-600">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Participate?</h2>
                <p className="text-xl text-orange-100 mb-10 max-w-3xl mx-auto">
                  Join us in building a brighter future for our schools and communities through the power of innovation.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                  <button className="bg-white hover:bg-gray-100 text-orange-600 font-bold py-4 px-8 rounded-full inline-flex items-center text-lg transition duration-300">
                    Register Your School <School className="ml-2 h-5 w-5" />
                  </button>
                  <button className="bg-orange-800 hover:bg-orange-900 text-white font-bold py-4 px-8 rounded-full inline-flex items-center text-lg transition duration-300">
                    Become a Sponsor <DollarSign className="ml-2 h-5 w-5" />
                  </button>
                  <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 px-8 rounded-full inline-flex items-center text-lg transition duration-300">
                    Apply as a Mentor <Book className="ml-2 h-5 w-5" />
                  </button>
                </div>
                <div className="mt-12">
                  <p className="text-orange-200 mb-2">Have questions? Contact us at:</p>
                  <a href="mailto:xquiz@tekdevisal.com" className="text-white font-bold hover:underline">
                    xquiz@tekdevisal.com
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

export default XQuizLanding;