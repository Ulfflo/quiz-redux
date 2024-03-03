import React from "react";
import QuizComponent from "@/components/QuizComponent";
import quizData from "@/data/quizData";
import Layout from "@/components/Layout";

const Quizpage = () => {
  return (
    <Layout>
      <h1 className="text-center p-4">Question...</h1>
      <QuizComponent />
    </Layout>
  );
};

export default Quizpage;
