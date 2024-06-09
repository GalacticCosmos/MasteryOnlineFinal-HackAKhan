import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const Menu = () => {
  const { loggedIn } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
    setShowDropdown(false);
  };

  const videos = [
    {
      id: 1,
      title: 'Spanish',
      info: 'Spanish is a language spoken natively in Spain and the majority of central and South America, recognized for its cultural diversity, historical significance, and widespread use in international communication, literature, and media.',
      subject: 'lan1',
    },
    {
      id: 2,
      title: 'French',
      info: 'French is the native language of France, known for its rich history, cultural significance, and widespread use in diplomacy, literature, and the arts.',
      subject: 'lan2',
    },
    {
      id: 3,
      title: 'Mandarin',
      info: 'Mandarin is a widely spoken language, characterized by its tonal nature, intricate writing system, and significant cultural influence in China and beyond.',
      subject: 'lan3',
    },
  ];

  return (
    <div className="flex flex-col space-y-4 bg-white p-4 rounded shadow-lg">
      <h2 className="text-lg font-bold mb-2">Language Menu</h2>
      {loggedIn ? (
        <div>
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => window.history.back()}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 text-left"
            >
              Go Back
            </button>
            <div className="relative">
              <button
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Search YouTube
              </button>
              {showDropdown && (
                <ul className="absolute z-10 bg-white w-40 py-2 rounded shadow-md mt-2">
                  {videos.map((video) => (
                    <li
                      key={video.id}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleSearch(video.title)}
                    >
                      {video.title}
                    </li>
                  ))}
                  <li>
                    <input
                      type="text"
                      className="px-4 py-2 w-full rounded-md border border-gray-300 mt-2"
                      placeholder="Custom Query"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 mt-2"
                      onClick={() => handleSearch(searchQuery)}
                    >
                      Search
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <ul className="space-y-2">
            {videos.map((video) => (
              <li key={video.id}>
                <Link
                  to={`/${video.subject}`}
                  className="block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 w-full text-left"
                >
                  {video.title}
                </Link>
                <div className="p-2 bg-gray-100 rounded shadow-sm">{video.info}</div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-red-600">Please login to access the Language menu.</p>
      )}
    </div>
  );
};

export default Menu;
