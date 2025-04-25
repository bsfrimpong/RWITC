import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar, ChevronRight, Facebook, Twitter,
  Instagram, Linkedin, Youtube, ExternalLink,
  Users, Zap, Award, Wrench, Clock, MapPin
} from 'lucide-react';
import Navbar from '../components/NavBar';
import Footer from '../components/footer';
import xfoundryLogo from '../images/rtic.png';
import pastEvent1 from '../images/past-event1.jpg';

const XFoundryLanding = () => {
  // Past events data with social media links
  const pastEvents = [
    {
      id: 1,
      title: "X Foundry 1.0",
      date: "5th March 2025",
      description: "Our inaugural X Foundry event brought together innovators, entrepreneurs, and tech enthusiasts for an immersive discussion on problem-solving experience.",
      image: pastEvent1,
      socialLinks: [
        { platform: "Instagram", icon: Instagram, url: "https://www.instagram.com/realworldtechic?igsh=YXBzZHJ4cm5xdW01" },
        { platform: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/realworld-tech/posts/?feedView=all" },
        { platform: "Twitter", icon: Twitter, url: "https://x.com/rtic_hq" }
      ]
    }
  ];

  // Program features
  const features = [
    {
      icon: Users,
      title: "Diverse Community",
      description: "Connect with like-minded innovators, mentors, and industry experts"
    },
    {
      icon: Zap,
      title: "Hands-on Learning",
      description: "Apply technical skills to solve real-world problems through practical projects"
    },
    {
      icon: Award,
      title: "Showcase Opportunities",
      description: "Present your solutions to potential investors and industry partners"
    },
    {
      icon: Wrench,
      title: "Resource Access",
      description: "Utilize cutting-edge tools, equipment, and workspaces for your projects"
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900 to-orange-700 z-0"></div>
        <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-orange-900/20 to-transparent z-0"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <img
            src={xfoundryLogo}
            alt="X Foundry Logo"
            className="h-24 mx-auto mb-8"
          />
          <h1 className="text-5xl font-bold mb-6 text-white">
            X Foundry <span className="text-orange-300">2.0</span>
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            An intensive problem-solving and innovation program designed to equip participants with the skills, mindset, and network to create impactful solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://lu.ma/embed/event/evt-34vqe70TVCBAkOk/simple"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center text-lg transition duration-300"
            >
              Register Now <ExternalLink className="ml-2 h-5 w-5" />
            </a>
            <button
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-800 text-white font-bold py-3 px-8 rounded-full inline-flex items-center text-lg transition duration-300"
            >
              Learn More <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Registration Embed Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-orange-800 mb-8">Register for X Foundry 2.0</h2>
          <div className="flex justify-center">
            <iframe
              src="https://lu.ma/embed/event/evt-34vqe70TVCBAkOk/simple"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="max-w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* About X Foundry Section */}
      <section id="about" className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-orange-800 mb-6">
                About X Foundry
              </h2>
              <p className="text-lg text-orange-700 mb-6">
                X Foundry is RTIC's flagship program that brings together innovators, entrepreneurs, and problem-solvers
                for an intensive experience designed to create impactful solutions for real-world challenges.
              </p>
              <p className="text-lg text-orange-700 mb-6">
                Following the success of X Foundry 1.0, we're launching X Foundry 2.0 with expanded offerings,
                deeper industry partnerships, and enhanced resources to support your innovation journey.
              </p>
              <div className="flex items-center space-x-4 text-orange-800">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-orange-500" />
                  <span>Upcoming Cohort: July 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-orange-500" />
                  <span>8-Week Program</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <feature.icon className="h-10 w-10 text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold text-orange-800 mb-2">{feature.title}</h3>
                  <p className="text-orange-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-800 mb-12 text-center">
            Program Structure
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Week 1-2",
                subtitle: "Foundation Building",
                items: ["Problem Definition", "Ideation Techniques", "Team Formation", "Industry Insights"]
              },
              {
                title: "Week 3-4",
                subtitle: "Concept Development",
                items: ["Solution Design", "Rapid Prototyping", "User Testing", "Iteration"]
              },
              {
                title: "Week 5-6",
                subtitle: "Product Building",
                items: ["Technical Implementation", "Business Model Canvas", "Market Validation", "Mentorship"]
              },
              {
                title: "Week 7-8",
                subtitle: "Finalization & Showcase",
                items: ["Final Product Development", "Pitch Preparation", "Demo Day", "Industry Networking"]
              }
            ].map((phase, index) => (
              <div
                key={index}
                className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-orange-800 mb-2">{phase.title}</h3>
                <p className="text-orange-600 mb-4 font-medium">{phase.subtitle}</p>
                <ul className="space-y-2">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-orange-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section - Modified to center one card */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-800 mb-12 text-center">
            Past X Foundry Events
          </h2>
          <div className="flex justify-center">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 max-w-md"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-orange-800">{event.title}</h3>
                    <span className="text-orange-600 text-sm">{event.date}</span>
                  </div>
                  <p className="text-orange-700 mb-4">{event.description}</p>
                  <div className="flex items-center space-x-3 mt-4">
                    <span className="text-orange-800 text-sm font-medium">View Highlights:</span>
                    {event.socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-800 transition-colors duration-300"
                        aria-label={link.platform}
                      >
                        <link.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-orange-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What Participants Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "X Foundry transformed my approach to problem-solving. The mentorship and hands-on experience were invaluable for my career.",
                author: "Kwame Mensah",
                role: "X Foundry 1.0 Participant"
              },
              {
                quote: "The connections I made at X Foundry opened doors I never thought possible. My project is now being incubated at a major tech hub!",
                author: "Abena Osei",
                role: "X Foundry 1.0 Participant"
              },
              {
                quote: "The structured program and industry exposure helped me refine my idea into a viable business. I'm now preparing to seek investment.",
                author: "Daniel Adu",
                role: "X Foundry 1.0 Participant"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-orange-700 p-6 rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                <p className="italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-orange-300">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-700 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join X Foundry 2.0?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Take the next step in your innovation journey. Limited spots available.
          </p>
          <a
            href="https://lu.ma/embed/event/evt-34vqe70TVCBAkOk/simple"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-600 hover:bg-orange-100 font-bold py-3 px-8 rounded-full inline-flex items-center text-lg transition duration-300"
          >
            Register Now <ChevronRight className="ml-2 h-5 w-5" />
          </a>
          <div className="mt-8 flex items-center justify-center space-x-3 text-sm">
            <MapPin className="h-4 w-4" />
            <span>CARISCA Innovations Lab, Postgraduate block C</span>
            <span className="mx-2">•</span>
            <Calendar className="h-4 w-4" />
            <span>Wednesday, 26th March, 2025</span>
            <span>10:30 am</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-800 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Who can apply to X Foundry 2.0?",
                answer: "X Foundry 2.0 is open to innovators, entrepreneurs, students, and professionals who are passionate about solving real-world problems through technology and innovation."
              },
              {
                question: "Is there a fee to participate?",
                answer: "Yes, there is a participation fee that covers program materials, mentorship, workspace access, and event costs. Limited scholarships are available for exceptional candidates."
              },
              {
                question: "What kind of support will I receive?",
                answer: "Participants receive mentorship from industry experts, access to workspace and resources, technical guidance, and opportunities to connect with potential investors and partners."
              },
              {
                question: "Do I need to have a team to apply?",
                answer: "No, you can apply as an individual. We'll help facilitate team formation during the initial stages of the program based on skills and interests."
              },
              {
                question: "What happens after the program ends?",
                answer: "Promising projects may be invited to join RTIC's incubation program, receive continued mentorship, or be connected with relevant industry partners for further development."
              },
              {
                question: "How much time commitment is required?",
                answer: "X Foundry 2.0 is an intensive 8-week program requiring approximately 20 hours per week, including evening and weekend sessions."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-bold text-orange-800 mb-2">{faq.question}</h3>
                <p className="text-orange-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default XFoundryLanding;