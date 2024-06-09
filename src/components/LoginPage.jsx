import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if the user is accessing the login page from another page
    if (location.pathname !== '/LoginPage') {
      window.location.href = '/LoginPage'; // Redirect to login page
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedUserData &&
      storedUserData.email === loginData.email &&
      storedUserData.password === loginData.password
    ) {
      setIsLoggedIn(true);
      setUsername(storedUserData.username);
      login(); // Call the login function from context
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleExit = () => {
    // Redirect to the home page or perform any necessary actions
    window.location.href = '/';
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSuggestion = () => {
    const email = 'mailto:MasteryOnlineHelp@gmail.com';
    window.location.href = email;
  };

  return (
    <div className="flex h-screen justify-center items-center bg-[#3498db]">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {!isLoggedIn ? (
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
            {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email</label>
                <input type="email" id="email" name="email" value={loginData.email} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your email" required />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Password</label>
                <input type="password" id="password" name="password" value={loginData.password} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your password" required />
              </div>
              <div className="flex justify-center items-center space-x-4">
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:bg-blue-600">Login</button>
                <button type="button" onClick={handleGoBack} className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md focus:outline-none focus:bg-gray-500">Go Back</button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Hey, {username}!</h2>
            <p className="text-lg text-center mb-4">Welcome to MasteryOnline! Choose a course category to study:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md focus:outline-none">
                <Link to="/menumath" className="text-white">
                  Math
                </Link>
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md focus:outline-none">
                <Link to="/menuscience" className="text-white">
                  Science
                </Link>
              </button>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md focus:outline-none">
                <Link to="/menucode" className="text-white">
                  Computer Science
                </Link>
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none" onClick={handleSuggestion}>
                Suggestion
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md focus:outline-none" onClick={() => setShowModal(true)}>
                More Coming Soon
              </button>
              <Link to="/" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md focus:outline-none" onClick={handleExit}>
                Exit
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* More Coming Soon Modal */}
           {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-end">
              <button className="text-red-500 hover:text-red-700" onClick={handleModalClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">More Coming Soon</h2>
            <p className="text-lg text-center">Stay tuned for exciting updates!</p>
          </div>
        </div>
        
      )}
    </div>
  );
};

export default LoginPage;
