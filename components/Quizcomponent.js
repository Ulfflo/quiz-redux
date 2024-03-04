import React, { useState, useEffect } from "react";
import quizData from "@/data/quizData";
import { useSelector, useDispatch } from "react-redux";
import { selectName, selectPoints, setPoints } from "@/redux/pointCount";
import Link from "next/link";
import { addScoreToScoreboard } from "@/redux/addToScoreboard";

function QuizComponent() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const points = useSelector(selectPoints);

  const handleNextQuestion = (isCorrect) => {
    if (isCorrect) {
      dispatch(setPoints(points + 1));
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const darkMode = useSelector((state) => state.darkMode);

  useEffect(() => {
    const shuffleQuiz = () => {
      const shuffledQuiz = [...quizData].sort(() => Math.random() - 0.5);

      const selectedQuiz = shuffledQuiz.slice(0, 10);
      setQuestions(selectedQuiz);
    };

    shuffleQuiz();
  }, []);

  const saveScoreToScoreboard = () => {
    dispatch(addScoreToScoreboard({ name, score: points }));
  };

  if (currentQuestion >= questions.length) {
    saveScoreToScoreboard();
    return (
      <div>
        <p>Your score {points} /10</p>{" "}
        <p>
          <Link href="/topScores">Click here to see the ScoreBoard</Link>
        </p>
      </div>
    );
  }

  return (
    <div className=" p-4">
      <div className="flex justify-center items-center h-full">
        <div
          className={` ${
            darkMode ? "bg-sky-950" : "bg-green-500"
          } w-10/12 h-4/5 rounded-lg`}
        >
          <h1 className="text-white text-center text-xl font-bold p-6 border-b-4 border-slate-300">
            Question {questions[currentQuestion].id}:{" "}
            {questions[currentQuestion].question}
          </h1>
          <div className="grid grid-cols-2 gap-4 justify-center p-8">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={` ${
                  darkMode ? "bg-sky-800" : "bg-green-500 border-green-800"
                } text-white font-semibold px-6 py-3 rounded-md w-full border-solid shadow-xl`}
                style={{ minWidth: "150px" }}
                onClick={() => handleNextQuestion(option.isCorrect)}
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
