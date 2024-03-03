import React, { useState } from "react";
import quizData from "@/data/quizData";
import { useSelector } from "react-redux";

function QuizComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center h-full">
        <div
          className={` ${
            darkMode ? "bg-sky-950" : "bg-green-500"
          } w-10/12 h-4/5 rounded-lg`}
        >
          <h1 className="text-white text-center text-xl font-bold p-6 border-b-4 border-slate-300">
            Question {quizData[currentQuestion].id}:{" "}
            {quizData[currentQuestion].question}
          </h1>
          <div className="grid grid-cols-2 gap-4 justify-center p-8">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={` ${
                  darkMode ? "bg-sky-800" : "bg-green-500 border-green-800"
                } text-white font-semibold px-6 py-3 rounded-md w-full border-solid shadow-xl`}
                style={{ minWidth: "150px" }}
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
