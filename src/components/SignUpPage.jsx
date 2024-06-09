import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';

const SignUpPage = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Store user data in local storage upon successful sign-up
      localStorage.setItem('userData', JSON.stringify(formData));
      setSuccessMessage('Signed up successfully');
      setFormData({ username: '', email: '', password: '' });
      login(); // Call the login function from context
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Error signing up');
      console.error('Error signing up:', error);
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="flex h-screen justify-center items-center bg-[#3498db]">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
        {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-gray-600">Username</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#3498db]" placeholder="Enter your username" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#3498db]" placeholder="Enter your email" required />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#3498db]" placeholder="Enter your password" required />
          </div>
          <div className="flex justify-center items-center space-x-4">
            <button type="submit" className="bg-[#3498db] hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:bg-blue-600">Sign Up</button>
            <button type="button" onClick={handleGoBack} className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md focus:outline-none focus:bg-gray-500">Go Back</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
