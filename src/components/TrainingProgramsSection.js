import React from 'react';
import { Link } from 'react-router-dom';
import { School, Calendar, BookOpen, Clock, Rocket } from 'lucide-react';

const TrainingProgramsSection = () => {
  const programs = [
    {
      title: "Armbition Summer Innovation School",
      description: "3-week intensive program where students build real technology solutions for community challenges",
      icon: <Rocket className="h-12 w-12 mb-4 text-orange-500" />,
      features: [
        "Build 3 real projects: Solar stations, AI waste sorting, 24-hour economy platforms",
        "Mixed-age collaboration (Primary, JHS & SHS)",
        "8 industry mentors per center",
        "Community installation of projects"
      ],
      linkTo: "/armbition", // Internal link to Armbition page
      buttonText: "Learn More",
      image: "url(/api/placeholder/800/600)",
      highlight: "Most Popular",
      price: "GH₵ 1,500"
    },
    {
      title: "School Training Program",
      description: "Register your school for comprehensive STEM and problem-solving training programs",
      icon: <School className="h-12 w-12 mb-4 text-orange-500" />,
      features: [
        "Hands-on STEM projects",
        "Teacher training support",
        "Customized curriculum integration",
        "Regular assessment and feedback"
      ],
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScJugWxppCnME3h6Cbn1OCbceBZqyBqZBt6nsDGzG_5NYXV7w/viewform?usp=header",
      buttonText: "Register Now",
      image: "url(/api/placeholder/800/600)"
    },
    {
      title: "Weekend Explorer Program",
      description: "Weekend classes for primary and JHS students to explore STEM through fun activities",
      icon: <Calendar className="h-12 w-12 mb-4 text-orange-500" />,
      features: [
        "Interactive weekend sessions",
        "Small group activities",
        "Practical experiments",
        "Project-based learning"
      ],
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfuo29WcTvarAYN2DyQAI-dXIrIHYRXyltaMqdyJp4AB60wLA/viewform?usp=dialog3",
      buttonText: "Register Now",
      image: "url(/api/placeholder/800/600)"
    },
    {
      title: "Post-SHS Tech Academy",
      description: "Weekday training program for SHS graduates focusing on advanced technical skills",
      icon: <Clock className="h-12 w-12 mb-4 text-orange-500" />,
      features: [
        "Advanced technical training",
        "Career guidance",
        "Industry projects",
        "Internship opportunities"
      ],
      formUrl: "https://forms.gle/9wUzVQFZQTHBb9c86",
      buttonText: "Register Now",
      image: "url(/api/placeholder/800/600)"
    }
  ];

  return (
    <section className="py-20 bg-orange-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-orange-800">Our Training Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                program.highlight ? 'ring-4 ring-orange-400' : ''
              }`}
            >
              {program.highlight && (
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  {program.highlight}
                </div>
              )}
              
              <div className="p-8">
                <div className="flex flex-col items-center text-center mb-6">
                  {program.icon}
                  <h3 className="text-2xl font-bold text-orange-800 mb-3">{program.title}</h3>
                  {program.price && (
                    <div className="text-2xl font-bold text-orange-600 mb-2">{program.price}</div>
                  )}
                  <p className="text-orange-600 mb-6">{program.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-orange-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {program.linkTo ? (
                  <Link 
                    to={program.linkTo}
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300"
                  >
                    {program.buttonText}
                  </Link>
                ) : (
                  <a 
                    href={program.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300"
                  >
                    {program.buttonText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <div className="bg-orange-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Child's Future?
            </h3>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Join hundreds of students who have already built real solutions and gained industry-relevant skills through our programs.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/armbition"
                className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-flex items-center justify-center"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Explore Armbition Program
              </Link>
              <a
                href="tel:+233246756644"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-3 px-8 rounded-full text-lg transition duration-300"
              >
                Call for Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingProgramsSection;