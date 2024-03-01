import { useState } from 'react';
import QuizComponent from '@/components/QuizComponent';
import quizData from '@/data/quizData';

const Quizpage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);

  const handleOptionClick = (optionIndex, isCorrect) => {
    if (!answered) {
      setAnswered(true);
      if (isCorrect) {
        document.getElementById(`option-${optionIndex}`).classList.add('bg-green-500');
      } else {
        document.getElementById(`option-${optionIndex}`).classList.add('bg-red-500');
        document.getElementById(`option-${quizData[currentQuestionIndex].options.findIndex(option => option.isCorrect)}`).classList.add('bg-green-500');
      }
      setTimeout(() => {
        document.querySelectorAll('.option-button').forEach(button => button.classList.remove('bg-red-500', 'bg-green-500'));
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnswered(false);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between p-32">
      <h1 className="mb-8">{quizData[currentQuestionIndex].question}</h1>
      <div className="grid grid-cols-2 gap-4">
        {quizData[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            id={`option-${index}`}
            className={`option-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            onClick={() => handleOptionClick(index, option.isCorrect)}
            disabled={answered}
          >
            {option.answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quizpage;

