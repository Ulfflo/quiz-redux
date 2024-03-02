import React from 'react';
import QuizComponent from '@/components/QuizComponent';
import quizData from '@/data/quizData';

const Quizpage = () => {
  return (
    <div className='container mx-auto p-4'>
      <QuizComponent />
    </div>
  );
};

export default Quizpage;
