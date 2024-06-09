import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const MenuMath = () => {
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
      title: 'Algebra 1 - Full Course',
      info: 'The video serves as a compilation of essential information about an Algebra 1 Review Study Guide, an online course tailored for individuals preparing for exams such as the End-of-Course (EOC) assessments and Regents exams, aligned with the Common Core standards.',
      subject: 'math1',
    },
    {
      id: 2,
      title: 'College Algebra - Full Course',
      info: 'This video compiles essential information about a Full College Algebra Course, catering to students and learners looking to master advanced algebraic concepts typically covered in college-level mathematics courses.',
      subject: 'math2',
    },
    {
      id: 3,
      title: 'PreCalc Course',
      info: 'This video presents a summary of the Precalculus Course, offering an in-depth exploration of essential topics crucial for success in advanced mathematics and calculus.',
      subject: 'math3',
    },
    {
      id: 4,
      title: 'Calculus 1 - Full Course',
      info: 'This video provides a summary of the Full College Course on Calculus 1, offering a comprehensive exploration of fundamental calculus concepts essential for success in higher-level mathematics and scientific disciplines.',
      subject: 'math4',
    },
    {
      id: 5,
      title: 'Statistics - Full Course',
      info: 'This video presents a summary of the Statistics Full Course, offering a comprehensive exploration of essential statistical concepts and techniques necessary for understanding and analyzing data.',
      subject: 'math5',
    },
    {
      id: 6,
      title: 'Linear Algebra - Full Course',
      info: 'This video provides a summary of the Linear Algebra Full Course, offering an extensive exploration of foundational linear algebra concepts essential for various fields such as mathematics, engineering, computer science, physics, and more.',
      subject: 'math6',
    },
    {
      id: 7,
      title: 'Calculus 2 - Full College Course',
      info: 'This video serves as a summary of the Calculus 2 Full Course, offering an in-depth exploration of advanced calculus topics essential for students pursuing higher-level mathematics and scientific disciplines.',
      subject: 'math7',
    },
    {
      id: 8,
      title: 'Linear Algebra - Full Course',
      info: 'This video provides a summary of the Linear Algebra Full Course, offering an extensive exploration of foundational linear algebra concepts essential for various fields such as mathematics, engineering, computer science, physics, and more.',
      subject: 'math8',
    },
  ];

  const suggestions = [
    'Algebra',
    'Calculus',
    'Statistics',
    'Geometry',
    'Trigonometry',
    'Linear Algebra',
    'Precalculus',
  ];

  return (
    <div className="flex flex-col space-y-4 bg-white p-4 rounded shadow-lg">
      <h2 className="text-lg font-bold mb-2">Math Menu</h2>
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
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleSearch(suggestion)}
                    >
                      {suggestion}
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
        <p className="text-red-600">Please login to access the Math menu.</p>
      )}
    </div>
  );
};

export default MenuMath;
