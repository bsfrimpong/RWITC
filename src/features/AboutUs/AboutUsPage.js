import table from '../../images/table.jpg';
import TrainersMentorsSection from './trainers';
import Footer from './../../components/footer';
import td from '../../images/rabs.jpg';
import jesse from '../../images/Team/anim.jpg';
import Enya from '../../images/Team/enya.jpg';
import stephen from '../../images/Team/stephentrim.jpg';
import claudia from '../../images/Team/claudiatrim.jpg';
import caleb from '../../images/Team/caleb.jpg';
import patricia from '../../images/Team/patriciatrim.jpg';
import chris from '../../images/Team/chris.jpg';
import armbition from '../../images/Soldering.jpg';
import tekInvasion from '../../images/invasion.jpg';
import zack from '../../images/Team/zack.jpg';
import React, { useState } from 'react';
import { 
  Target, Shield, Clock, Users, Heart, 
  Sparkles, Lightbulb, Brain, UserPlus,
  School, Globe, Briefcase, ArrowRight
} from 'lucide-react';


const AboutPage = () => {
  const [activeProgram, setActiveProgram] = useState('ARMBITION');

  const programs = [
    {
      title: "ARMBITION",
      description: "Empowering secondary school students through hands-on STEM education and real-world problem-solving skills.",
      icon: School,
      image: armbition,
      features: [
        "Practical STEM projects",
        "Innovation competitions",
        "Mentorship programs",
        "School-industry partnerships"
      ]
    },
    {
      title: "TEK INVASION",
      description: "A dynamic hub for university entrepreneurship and innovation, featuring mentorship, competitions and incubation programs.",
      icon: Globe,
      image: tekInvasion,
      features: [
        "Innovation challenges",
        "Startup incubation",
        "Industry mentorship",
        "Funding opportunities"
      ]
    },
  ];

  const team = [
    {
      name: "Dr. E.A Xemalordzo",
      role: "Executive Director",
      image: Enya,
      bio: "With over 15 years of experience as a senior lecturer at Kwame Nkrumah University of Science and Technology, Department of Marketing & Corporate Strategy, he leads our strategic initiatives.",
      expertise: ["Corporate Strategy", "Critical Thinking", "Program Development"]
    },
    {
      name: "Jesse Anim",
      role: "Technical Director",
      image: jesse,
      bio: "A seasoned software engineer with expertise in product development, Cyber security and technical education driving innovation and excellence in technology solutions.",
      expertise: ["Engineering", "Product Development", "Technical Training"]
    },
    {
      name: "Caleb Agyemang-Duah",
      role: "Program Manager",
      image: caleb,
      bio: "a results-driven Project Manager specializing in curriculum development, program implementation, and event development, ensuring seamless execution and impactful outcomes.",
      expertise: ["Program Management", "Curriculum Design", "Student Engagement"]
    },
    {
      name: "Stephen B. Frimpong",
      role: "Innovation Lead",
      image: stephen,
      bio: "drives our innovation initiatives and mentorship programs, leveraging extensive startup experience to foster creativity, problem-solving, and growth.",
      expertise: ["Innovation", "Mentorship", "Startup Development"]
    },
    {
      name: "Claudia Afia Gyanea Tawiah",
      role: "Digital Marketing",
      image: claudia,
      bio: "creative and data-driven Digital Marketing Manager, specializing in online brand growth, content strategy, and performance marketing to drive engagement and business success.",
      expertise: ["Social Media Management", "Partnership Development", "Event Management"]
    },
    {
      name: "Patricia Enyonam Vigbedor",
      role: "Business Development Officer",
      image: patricia,
      bio: "specializing in crafting compelling proposals, securing funding, and fostering strategic partnerships",
      expertise: ["Innovation", "Mentorship", "Startup Development"]
    },
    {
      name: "Christlove Opoku Appiah",
      role: "Strategy and Marketing",
      image: chris,
      bio: "Strategic and marketing professional with expertise in market analysis, brand positioning, and growth-driven strategies to drive business success.",
      expertise: ["Market analysis", "brand positioning", "Growth Strategy"]
    },
    {
      name: "Zackaria Lahi Ayatul",
      role: "Head of Hardware Innovation",
      image: zack,
      bio: "Zack brings over a decade of experience in hardware development, leading hands-on training programs that empower the next generation of innovators. His expertise spans electronics, mechanics, and mechatronics.",
      expertise: ["Market analysis", "brand positioning", "Growth Strategy"]
    },
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <img 
          src={table} 
          alt="Innovation hub" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-orange-900 bg-opacity-70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">
            Real-world Technology Innovation Centre
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Transforming Ghana's entrepreneurial landscape through innovation, education, and real-world problem-solving.
          </p>
        </div>
      </section>

      {/* Origin Story with Image */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-orange-800 mb-6">Our Story</h2>
              <p className="text-lg text-orange-700 mb-6">
                In the burgeoning entrepreneurial landscape of Ghana, Tek-Devisal Limited, 
                a trailblazing technology firm, birthed an innovative concept that would later 
                become the Real-world Technology Innovation Centre (RTIC).
              </p>
              <p className="text-lg text-orange-700">
                The Tek-Invasion Hybrid Incubator, our flagship initiative, envisions becoming 
                the epicenter of entrepreneurial innovation in Ghana and West Africa.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src={td}
                alt="Our journey" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
        {/* Values Section with Visual Elements */}
        <section className="bg-gradient-to-b from-orange-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-800 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Extraordinary Expectation", icon: Target, description: "Setting and achieving ambitious goals" },
              { title: "Resilience", icon: Shield, description: "Persisting through challenges" },
              { title: "Project Continuity", icon: Clock, description: "Ensuring sustainable impact" },
              { title: "Inclusivity & Collaboration", icon: Users, description: "Fostering diverse partnerships" },
              { title: "Humble Confidence", icon: Heart, description: "Leading with expertise and openness" },
              { title: "Creative Energy", icon: Lightbulb, description: "Driving dynamic innovation" }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <value.icon className="w-8 h-8 text-orange-500 mb-3" />
                <h3 className="text-xl font-bold text-orange-800 mb-2">{value.title}</h3>
                <p className="text-orange-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Programs Section */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-800 mb-12 text-center">Our Programs</h2>
          
          {/* Program Navigation */}
          <div className="flex justify-center space-x-4 mb-8">
            {programs.map((program) => (
              <button
                key={program.title}
                onClick={() => setActiveProgram(program.title)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeProgram === program.title
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-orange-700 hover:bg-orange-100'
                }`}
              >
                {program.title}
              </button>
            ))}
          </div>

          {/* Active Program Content */}
          {programs.map((program) => (
            program.title === activeProgram && (
              <div key={program.title} className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <program.icon className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-2xl font-bold text-orange-800 mb-4">{program.title}</h3>
                  <p className="text-orange-700 mb-6">{program.description}</p>
                  <ul className="space-y-3">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-orange-600">
                        <ArrowRight className="w-5 h-5 mr-2 text-orange-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-orange-800 mb-12 text-center">Meet Our Team</h2>
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
      {team.map((member, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <div className="aspect-[4/3] relative">
            <img 
              src={member.image} 
              alt={member.name} 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold text-orange-800 mb-1">{member.name}</h3>
            <p className="text-orange-600 mb-2 text-sm">{member.role}</p>
            <p className="text-orange-700 text-sm mb-3">{member.bio}</p>
            <div className="space-y-1">
              {member.expertise.map((skill, i) => (
                <span 
                  key={i} 
                  className="inline-block bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full mr-1 mb-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      <TrainersMentorsSection />

    
       {/* Footer */}
       <Footer />
    </div>
  );
};

export default AboutPage;