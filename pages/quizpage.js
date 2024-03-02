import React from 'react';
import QuizComponent from '@/components/QuizComponent';
import quizData from '@/data/quizData';

const Quizpage = () => {
  return (
    <div className='container mx-auto bg-slate-50'>
        <h1 className='text-center p-4'>Question...</h1>
      <QuizComponent />
    </div>
  );
};

export default Quizpage;
