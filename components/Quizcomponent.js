import React, { useState } from 'react';

const QuizComponent = ({ quizData, currentQuestionIndex, onNextQuestion }) => {
  const question = quizData[currentQuestionIndex];
  const [answered, setAnswered] = useState(false);

  const handleOptionClick = (optionIndex, isCorrect) => {
    if (!answered) {
      setAnswered(true);
      if (isCorrect) {
        document.getElementById(`option-${optionIndex}`).classList.add('bg-green-500');
      } else {
        document.getElementById(`option-${optionIndex}`).classList.add('bg-red-500');
      }
      setTimeout(() => {
        onNextQuestion();
      }, 1000);
    }
  };

  return (
    <div className="max-w-[600px] my-auto mx-auto bg-green-400 rounded-lg overflow-hidden shadow-lg">
      <div className="px-10 py-8">
        <h2 className="text-lg font-semibold">Question {question.id}</h2>
        <p>{question.question}</p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              id={`option-${index}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleOptionClick(index, option.isCorrect)}
            >
              {option.answer}
            </button>
          ))}
        </div>
        <p className="mt-4">ID: {question.id}</p>
      </div>
    </div>
  );
};

export default QuizComponent;
