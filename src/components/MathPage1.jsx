import React, { useState } from 'react';

const App = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [questionInput, setQuestionInput] = useState('');
  const [answerInput, setAnswerInput] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [notes, setNotes] = useState('');

  const handleQuestionChange = (event) => {
    setQuestionInput(event.target.value);
  };

  const handleAnswerChange = (event) => {
    setAnswerInput(event.target.value);
  };

  const handleAddFlashcard = () => {
    const newFlashcard = {
      question: questionInput,
      answer: answerInput
    };
    setFlashcards([...flashcards, newFlashcard]);
    setQuestionInput('');
    setAnswerInput('');
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) => Math.max(0, prevIndex - 1));
    setShowAnswer(false);
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => Math.min(flashcards.length - 1, prevIndex + 1));
    setShowAnswer(false);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

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

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-white">
      <div className="mt-8">
        {/* YouTube video embed code here */}
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/TbJ5gqLRpeM?autoplay=1&mute=1"
          title="YouTube Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-bold">Video Summary</h2>
        <p>
          {"The video serves as a compilation of essential information about an Algebra 1 Review Study Guide, an online course tailored for individuals preparing for exams such as the End-of-Course (EOC) assessments and Regents exams, aligned with the Common Core standards."}
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-bold">Notes</h2>
        <textarea
          className="w-full h-32 p-2 border rounded"
          value={notes}
          onChange={handleNotesChange}
          placeholder="Take your notes here..."
        />
        <button onClick={handleDownloadNotes} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
          Download Notes
        </button>
      </div>
      <div className="flex flex-row mt-8">
        <div className="w-1/2">
          <h2 className="text-lg font-bold mb-2">Create Flashcards</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="question">Question:</label>
              <input
                type="text"
                id="question"
                value={questionInput}
                onChange={handleQuestionChange}
                placeholder="Enter the question"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="answer">Answer:</label>
              <input
                type="text"
                id="answer"
                value={answerInput}
                onChange={handleAnswerChange}
                placeholder="Enter the answer"
                className="w-full p-2 border rounded"
              />
            </div>
            <button onClick={handleAddFlashcard} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
              Add Flashcard
            </button>
          </div>
        </div>
        <div className="w-1/2 pl-4">
          <h2 className="text-lg font-bold mb-2">Flashcards</h2>
          {flashcards.length > 0 && (
            <div className="flex flex-col items-center space-y-4">
              <div className="w-full p-4 border rounded shadow-md bg-gray-100">
                <h3 className="text-lg font-bold">{flashcards[currentCardIndex].question}</h3>
                {showAnswer && <p className="text-green-500">{flashcards[currentCardIndex].answer}</p>}
              </div>
              <div className="flex justify-between w-full">
                <button onClick={handlePrevCard} disabled={currentCardIndex === 0} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
                  Prev
                </button>
                <button onClick={handleShowAnswer} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none">
                  Show Answer
                </button>
                <button onClick={handleNextCard} disabled={currentCardIndex === flashcards.length - 1} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <button onClick={handleGoBack} className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
        Go Back
      </button>
    </div>
  );
};

export default App;
