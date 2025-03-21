import React, { useState, useEffect, useRef } from 'react';
import { School, Lightbulb, Calendar, Users } from 'lucide-react';

const CountUpNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const steps = 60;
    const stepDuration = duration / steps;
    const increment = end / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep === steps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentStep * increment));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return <span ref={elementRef}>{count}</span>;
};

const ImpactStats = () => {
  const stats = [
    {
      icon: School,
      number: 5,
      label: "Schools Trained",
      description: "Schools empowered with STEM education"
    },
    {
      icon: Lightbulb,
      number: 10,
      label: "Projects Built",
      description: "Innovative solutions developed by students"
    },
    {
      icon: Calendar,
      number: 10,
      label: "Events Organized",
      description: "Workshops, competitions, and exhibitions"
    },
    {
      icon: Users,
      number: 500,
      label: "Students Impacted",
      description: "Young minds inspired through hands-on learning"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Impact</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Transforming STEM education across schools and communities through practical, hands-on learning experiences
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <stat.icon size={40} className="text-orange-500" />
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">
                <CountUpNumber end={stat.number} />
                <span className="text-orange-500">+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
