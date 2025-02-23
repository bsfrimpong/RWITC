import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const email = "stephenfrimpongyg@gmail.com";
  const phoneNumber = "+233246756644";
  const whatsappMessage = "Hello! I'm interested in learning more about your STEM education programs.";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const formattedPhone = phoneNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${formattedPhone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-orange-800">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg">
            <div>
              <h3 className="text-2xl font-semibold text-orange-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-2 rounded-lg shadow-md">
                    <MapPin className="text-orange-500 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800">Address</h4>
                    <p className="text-orange-700">Plot 3 Block 12, Aboabo Extension</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-2 rounded-lg shadow-md">
                    <Mail className="text-orange-500 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800">Email</h4>
                    <p className="text-orange-700">{email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-2 rounded-lg shadow-md">
                    <Phone className="text-orange-500 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800">Phone</h4>
                    <p className="text-orange-700">{phoneNumber}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Buttons */}
            <div className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleEmailClick}
                  className="group relative flex-1 overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-6 rounded-xl inline-flex items-center justify-center text-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-200 transform hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  <Mail className="mr-3 h-5 w-5" />
                  Send Email
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={handleWhatsAppClick}
                  className="group relative flex-1 overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-6 rounded-xl inline-flex items-center justify-center text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-200 transform hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  <MessageCircle className="mr-3 h-5 w-5" />
                  WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d629.1223216125795!2d-1.5989459454456865!3d6.7082529667392246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe779f8462c31eb%3A0xbf52bbfb18caba7e!2sAIRPORT%20ROUND%20ABOUT%20TotalEnergies%20Service%20Station!5e0!3m2!1sen!2sgh!4v1740318644016!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;