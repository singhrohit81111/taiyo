import React, { useState } from 'react';

interface CareerProfileProps {}

const CareerProfile: React.FC<CareerProfileProps> = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState('active');

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  return (
    <div className="flex-1 max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Create Contact</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your last name"
          />
        </div>
        <div>
          <span className="block text-gray-700 font-medium mb-1">Status:</span>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="active"
                checked={status === 'active'}
                onChange={handleStatusChange}
                className="form-radio text-blue-500"
              />
              <span className="text-gray-700">Active</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="inactive"
                checked={status === 'inactive'}
                onChange={handleStatusChange}
                className="form-radio text-blue-500"
              />
              <span className="text-gray-700">Inactive</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Save Contact
        </button>
      </form>
    </div>
  );
};

export default CareerProfile;
