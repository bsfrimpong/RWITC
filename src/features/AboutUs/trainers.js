import React from 'react';
import { Book, Star, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

const TrainersMentorsSection = () => {
  const roles = [
    {
      type: "Trainers",
      icon: GraduationCap,
      description: "Join our team of expert trainers who guide students through hands-on STEM projects and innovation challenges.",
      requirements: [
        "Experience in STEM education or technical training",
        "Passion for practical, hands-on teaching",
        "Strong communication and facilitation skills",
        "Commitment to student success"
      ],
      formLink: "https://forms.google.com/your-trainer-form-link"
    },
    {
      type: "Mentors",
      icon: Star,
      description: "Share your industry experience and expertise to help shape the next generation of innovators.",
      requirements: [
        "Industry experience in STEM fields",
        "Willingness to guide student projects",
        "Available for regular mentoring sessions",
        "Interest in youth development"
      ],
      formLink: "https://forms.google.com/your-mentor-form-link"
    }
  ];

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">
          Join Our Community
        </h2>
        <p className="text-center text-orange-700 mb-12 max-w-3xl mx-auto">
          Be part of our mission to transform STEM education and innovation in Ghana. 
          Share your expertise as a trainer or mentor.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {roles.map((role) => (
            <div 
              key={role.type}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <role.icon className="w-10 h-10 text-orange-500 mr-4" />
                  <h3 className="text-2xl font-bold text-orange-800">
                    Our {role.type}
                  </h3>
                </div>

                <p className="text-orange-700 mb-6">
                  {role.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-orange-800 mb-4">
                    What we look for:
                  </h4>
                  <ul className="space-y-3">
                    {role.requirements.map((req, index) => (
                      <li key={index} className="flex items-center text-orange-600">
                        <ArrowRight className="w-4 h-4 mr-2 text-orange-500 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={role.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300"
                >
                  Apply to be a {role.type.slice(0, -1)}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersMentorsSection;