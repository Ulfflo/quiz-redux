import React, { useState } from "react";
import quizData from '@/data/quizData';

function QuizComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0); // State to keep track of the current question

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1); // Move to the next question
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center h-full">
        <div className="bg-green-500 w-9/12 h-3/5 rounded-lg">
          <h1 className="text-white text-center text-xl font-bold p-6 border-b-4 border-slate-300">
            Question {quizData[currentQuestion].id}: {quizData[currentQuestion].question}
          </h1>
          <div className="grid grid-cols-2 gap-4 justify-center p-8">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="bg-green-400 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
                onClick={handleNextQuestion}
              >
                {option.answer}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizComponent;
