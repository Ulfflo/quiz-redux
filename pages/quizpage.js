import React from "react";
import QuizComponent from "@/components/Quizcomponent";
import quizData from "@/data/quizData";
import Layout from "@/components/Layout";

const Quizpage = () => {
  return (
    <Layout>
      <QuizComponent />
    </Layout>
  );
};

export default Quizpage;
