import React, { useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState('');

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleDownloadNotes = () => {
    const blob = new Blob([notes], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'notes.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-white">
      <div className="flex flex-row">
        <div className="w-2/3">
          {/* Custom width and height for the video */}
          <object
            width="100%" // Custom width
            height="400" // Custom height
            data="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
          ></object>
          <div className="mt-4">
            <h2 className="text-lg font-bold">Summary</h2>
            <p>
              {/* Insert your summary here */}
            </p>
          </div>
        </div>
        <div className="w-1/3 pl-4">
          <h2 className="text-lg font-bold mb-2">Notes</h2>
          <textarea
            className="w-full h-64 p-2 border rounded"
            value={notes}
            onChange={handleNotesChange}
            placeholder="Take your notes here..."
          />
          <button onClick={handleDownloadNotes} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
            Download Notes
          </button>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <div className="border p-4 rounded shadow-lg bg-white">
          <h2 className="text-lg font-bold mb-2">AI Chatbot</h2>
          {/* AI chatbot iframe here */}
          <iframe
            src="https://app.thinkstack.ai/bot/index.html?chatbot_id=6664d4e3dc1ea21b693a3c18"
            frameBorder="0"
            width="100%"
            height="100%"
            style={{ minHeight: '500px' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default App;



