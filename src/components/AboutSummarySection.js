import React from 'react';
import { ArrowRight, Globe, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSummarySection = () => {
  const highlights = [
    {
      icon: Globe,
      title: "Innovation Hub",
      description: "Ghana's premier center for technological innovation and entrepreneurship development"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Programs",
      description: "From high school to university students and aspiring entrepreneurs"
    },
    {
      icon: Users,
      title: "Growing Community",
      description: "A thriving ecosystem of innovators, mentors, and industry partners"
    }
  ];

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side: Text content */}
          <div>
            <h2 className="text-3xl font-bold text-orange-800 mb-6">
              Transforming Ideas into Impact
            </h2>
            <p className="text-lg text-orange-700 mb-6">
              Born from Tek-Devisal Limited's vision, the Real-world Technology Innovation Centre (RTIC) 
              has evolved into Ghana's leading hub for technological innovation and entrepreneurship development. 
              Through our flagship programs - ARMBITION and TEK INVASION - we're building 
              the next generation of African innovators.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Right side: Highlight cards */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <highlight.icon className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-orange-800 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-orange-700">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummarySection;