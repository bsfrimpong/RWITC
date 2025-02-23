// First, add these IDs to your existing sections in LandingPage.js:
// <header id="home" ...>
// <section id="programs" ...> (TrainingProgramsSection)
// <section id="success-stories" ...> (SuccessStoriesSection)
// <section id="gallery" ...> (GallerySection)

// Create a new file ContactSection.js:
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-orange-800">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-orange-50 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-orange-800 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-orange-800 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-orange-800 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-orange-800 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 rounded-md border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center justify-center text-lg transition duration-300"
              >
                Send Message <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Contact Information and Map */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="text-orange-500 h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-orange-800">Address</h3>
                  <p className="text-orange-700">Plot 3 Block 12, Aboabo Extension</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-orange-500 h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-orange-800">Email</h3>
                  <a href="mailto:stephenfrimpongyg@gmail.com" className="text-orange-700 hover:text-orange-500">
                    stephenfrimpongyg@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-orange-500 h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-orange-800">Phone</h3>
                  <a href="tel:+233246756644" className="text-orange-700 hover:text-orange-500">
                    024 675 6644
                  </a>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="h-[300px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.7389461563!2d-1.6242908!3d6.6789542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb9733d8921b31%3A0x51df4c6b10f721c5!2sAboabo%20Extension!5e0!3m2!1sen!2sgh!4v1708636154659!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;