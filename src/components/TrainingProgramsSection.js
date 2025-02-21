import React from 'react';
import { School, Calendar, BookOpen, Clock } from 'lucide-react';

const TrainingProgramsSection = () => {
  const programs = [
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
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScJugWxppCnME3h6Cbn1OCbceBZqyBqZBt6nsDGzG_5NYXV7w/viewform?usp=header", // Replace with actual Google Form URL
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
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfuo29WcTvarAYN2DyQAI-dXIrIHYRXyltaMqdyJp4AB60wLA/viewform?usp=dialog3", // Replace with actual Google Form URL
      image: "url(/api/placeholder/800/600)"
    },
    {
      title: "Vacation Innovation Camp",
      description: "Intensive holiday programs for primary, JHS, and SHS students",
      icon: <BookOpen className="h-12 w-12 mb-4 text-orange-500" />,
      features: [
        "2-4 week programs",
        "Comprehensive projects",
        "Industry exposure",
        "Innovation challenges"
      ],
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfuo29WcTvarAYN2DyQAI-dXIrIHYRXyltaMqdyJp4AB60wLA/viewform?usp=dialog3", // Replace with actual Google Form URL
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
      formUrl: "https://forms.gle/your-postshs-form-url", // Replace with actual Google Form URL
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
              className="relative bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex flex-col items-center text-center mb-6">
                  {program.icon}
                  <h3 className="text-2xl font-bold text-orange-800 mb-3">{program.title}</h3>
                  <p className="text-orange-600 mb-6">{program.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-orange-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={program.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300"
                >
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingProgramsSection;