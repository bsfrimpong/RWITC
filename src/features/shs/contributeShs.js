import React, { useState } from 'react';
import { School, Users, BookOpen, PieChart, DollarSign, ArrowRight } from 'lucide-react';
import shsBackground from '../../images/shs.jpg'; // Make sure this path is correct

const ContributeSHS = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [formData, setFormData] = useState({
    contributorType: '',
    name: '',
    email: '',
    school: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
  };

  const getPromptInfo = (amount) => {
    const info = {
      '15000': { people: 150, projects: 1 },
      '25000': { people: 250, projects: 2 },
      '40000': { people: 400, projects: 3 },
      '50000': { people: 500, projects: 5 }
    };
    return info[amount] || { people: 0, projects: 0 };
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${shsBackground})` }}>
      <div className="min-h-screen bg-black bg-opacity-60 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden md:flex">
          <div className="md:flex-shrink-0 bg-orange-600 md:w-1/3 p-8 flex flex-col justify-center items-center text-white">
            <School className="h-16 w-16 mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-center">Support Your School</h2>
            <p className="text-xl text-center">Every contribution brings us closer to empowering the next generation.</p>
          </div>
          <div className="p-8 md:w-2/3">
            <h3 className="text-2xl font-bold mb-6 text-orange-800">Contribute to SHS Projects</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="contributorType" className="block text-sm font-medium text-gray-700">I am a:</label>
                <select
                  id="contributorType"
                  name="contributorType"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  value={formData.contributorType}
                  onChange={handleInputChange}
                >
                  <option value="">Select your role</option>
                  <option value="parent">Parent</option>
                  <option value="oldStudent">Old Student</option>
                  <option value="school">School Representative</option>
                </select>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="school" className="block text-sm font-medium text-gray-700">School Name</label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  value={formData.school}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Contribution Amount</label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { amount: 15000, icon: <BookOpen className="h-6 w-6" /> },
                    { amount: 25000, icon: <Users className="h-6 w-6" /> },
                    { amount: 40000, icon: <PieChart className="h-6 w-6" /> },
                    { amount: 50000, icon: <DollarSign className="h-6 w-6" /> },
                  ].map((option) => (
                    <button
                      key={option.amount}
                      type="button"
                      className={`flex items-center justify-center p-4 border rounded-md ${
                        selectedAmount === option.amount.toString()
                          ? 'bg-orange-500 text-white'
                          : 'bg-white text-orange-600 hover:bg-orange-50'
                      }`}
                      onClick={() => handleAmountSelect(option.amount.toString())}
                    >
                      {option.icon}
                      <span className="ml-2">GHC {option.amount.toLocaleString()}</span>
                    </button>
                  ))}
                </div>
              </div>
              {selectedAmount && (
                <div className="bg-orange-100 p-4 rounded-md">
                  <p className="text-orange-800 font-semibold">
                    Did you know? If just {getPromptInfo(selectedAmount).people} people contribute GHC 100 each, 
                    we can fund {getPromptInfo(selectedAmount).projects} project{getPromptInfo(selectedAmount).projects > 1 ? 's' : ''}!
                  </p>
                </div>
              )}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Contribute Now <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributeSHS;