import React, { useState } from 'react';
import { School, Users, BookOpen, PieChart, Brain, ArrowRight } from 'lucide-react';
import jhsBackground from '../../images/kids.jpg'; // Make sure this path is correct

const ContributeJHS = () => {
  const [formData, setFormData] = useState({
    schoolType: '',
    schoolName: '',
    location: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    numberOfStudents: 0
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getPromptInfo = (type) => {
    const info = {
      'KIDS': { price: 500, label: 'Kid' },
      'Primary School': { price: 1000, label: 'Primary School Student' },
      'Junior High School': { price: 1500, label: 'JHS Student' }
    };
    return info[type] || { price: 0, label: 'Student' };
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${jhsBackground})` }}>
      <div className="min-h-screen bg-black bg-opacity-60 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden md:flex">
          <div className="md:flex-shrink-0 bg-orange-600 md:w-1/3 p-8 flex flex-col justify-center items-center text-white">
            <Brain className="h-16 w-16 mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-center">Empower Young Minds</h2>
            <p className="text-xl text-center">Transform your students into problem solvers and critical thinkers!</p>
          </div>
          <div className="p-8 md:w-2/3">
            <h3 className="text-2xl font-bold mb-6 text-orange-800">Register Your School for Innovation Training</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="schoolType" className="block text-sm font-medium text-gray-700">School Type:</label>
                <select
                  id="schoolType"
                  name="schoolType"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  value={formData.schoolType}
                  onChange={handleInputChange}
                >
                  <option value="">Select school type</option>
                  <option value="KIDS">KIDS</option>
                  <option value="Primary School">Primary School</option>
                  <option value="Junior High School">Junior High School</option>
                </select>
              </div>
              <div>
                <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700">School Name</label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">School Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  value={formData.location}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">Contact Person Name</label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  value={formData.contactName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">Contact Email</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700">Contact Phone</label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  value={formData.contactPhone}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="numberOfStudents" className="block text-sm font-medium text-gray-700">Number of Students (minimum 20)</label>
                <input
                  type="number"
                  id="numberOfStudents"
                  name="numberOfStudents"
                  min="20"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  value={formData.numberOfStudents}
                  onChange={handleInputChange}
                />
              </div>
              {formData.schoolType && formData.numberOfStudents >= 20 && (
                <div className="bg-orange-100 p-4 rounded-md">
                  <p className="text-orange-800 font-semibold">
                    Great! You're registering {formData.numberOfStudents} {getPromptInfo(formData.schoolType).label}s.
                    The total contribution would be GHC {formData.numberOfStudents * getPromptInfo(formData.schoolType).price}.
                  </p>
                  <p className="text-orange-700 mt-2">
                    Your students will embark on an exciting journey of problem-solving and critical thinking!
                  </p>
                </div>
              )}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Register Now <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
            <p className="mt-4 text-sm text-gray-600">
              We'll reach out to you shortly after registration to discuss the next steps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributeJHS;