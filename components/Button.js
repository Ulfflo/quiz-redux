import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      className="bg-green-500 hover:bg-green-800 text-white front-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const StartQuizButton = ({ onClick }) => {
  return (
    <button
      className="bg-green-500 hover:bg-green-800 text-white font-bold py-4 px-6 rounded shadow-lg"
      onClick={onClick}
    >
      Start Quiz
    </button>
  );
};

export { Button, StartQuizButton };
