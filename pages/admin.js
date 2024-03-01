import Layout from "@/components/Layout";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setEditingQuestion,
  editQuestion,
  deleteQuestion,
  addQuestion,
} from "@/redux/quizSlice";

export default function Admin() {
  const dispatch = useDispatch();

  const questions = useSelector((state) => state.quiz.quizData);
  const darkMode = useSelector((state) => state.darkMode);
  const [editMode, setEditMode] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState(null);

  const handleEditClick = (question) => {
    setEditedQuestion({ ...question });
    setEditMode(true);
  };

  const handleDeleteClick = (questionId) => {
    dispatch(deleteQuestion(questionId));
  };

  const handleSaveEdit = () => {
    dispatch(
      editQuestion({ id: editedQuestion.id, updatedQuestion: editedQuestion })
    );
    setEditMode(false);
    setEditedQuestion(null);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedQuestion((prevQuestion) => ({
      ...prevQuestion,
      [name]: value,
    }));
  };

  const handleOptionChange = (optionIndex, e) => {
    const { value } = e.target;
    setEditedQuestion((prevQuestion) => ({
      ...prevQuestion,
      options: prevQuestion.options.map((option, index) =>
        index === optionIndex ? { ...option, answer: value } : option
      ),
    }));
  };

  const handleCorrectOptionChange = (optionIndex) => {
    setEditedQuestion((prevQuestion) => ({
      ...prevQuestion,
      options: prevQuestion.options.map(
        (option, index) =>
          index === optionIndex
            ? { ...option, isCorrect: true } // Set the current option to true
            : { ...option, isCorrect: false } // Set all other options to false
      ),
    }));
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      question: "New Question",
      options: [
        { answer: "Option 1", isCorrect: false },
        { answer: "Option 2", isCorrect: false },
        { answer: "Option 3", isCorrect: false },
        { answer: "Option 4", isCorrect: false },
      ],
    };

    dispatch(addQuestion());
    setEditedQuestion({ ...newQuestion });
    setEditMode(true);
  };

  return (
    <>
      <Layout>
        <div>
          <h1 className="text-2xl font-bold mb-4">Admin page</h1>
          <div className="flex-col">
            {questions.map((item, index) => (
              <div
                className={`${
                  darkMode ? "bg-sky-950" : " bg-green-400"
                } w-[400px] p-8 mb-8 rounded-xl relative`}
                key={index}
                id={item.id}
              >
                {editMode && editedQuestion && editedQuestion.id === item.id ? (
                  <div>
                    <input
                      className="w-full mb-2 rounded-lg py-1 pl-2 border-none"
                      type="text"
                      name="question"
                      value={editedQuestion.question}
                      onChange={handleInputChange}
                    />
                    <ul className="list-none">
                      {editedQuestion.options.map((option, optionIndex) => (
                        <li key={optionIndex} className="mb-2 ">
                          <input
                            className="rounded-lg py-1 pl-2 border-none"
                            type="text"
                            value={option.answer}
                            onChange={(e) => handleOptionChange(optionIndex, e)}
                          />
                          <input
                            className="ml-2 w-8 rounded checked:text-yellow-500"
                            type="radio"
                            name="correctOption"
                            checked={option.isCorrect}
                            onChange={() =>
                              handleCorrectOptionChange(optionIndex)
                            }
                          />
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 space-x-2">
                      <button
                        className={` ${
                          darkMode
                            ? "border-emerald-500 text-emerald-400"
                            : "border-green-600 text-green-700"
                        }                 
border-solid  whitespace-nowrap bg-transparent  rounded-lg px-4 py-1 active:opacity-50`}
                        onClick={handleSaveEdit}
                      >
                        Save
                      </button>
                      <button
                        className={` ${
                          darkMode
                            ? "border-emerald-500 text-emerald-400"
                            : "border-green-600 text-green-700"
                        }                 
border-solid  whitespace-nowrap bg-transparent  rounded-lg px-4 py-1 active:opacity-50`}
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="mb-2">
                      Question {item.id}: {item.question}
                    </p>
                    <ul className="list-none">
                      {item.options.map((option, optionIndex) => (
                        <li
                          key={optionIndex}
                          className={option.isCorrect ? "font-bold" : ""}
                        >
                          {option.answer} {option.isCorrect ? "(correct)" : ""}
                        </li>
                      ))}
                    </ul>
                    <div className="absolute bottom-4 right-4 space-x-2">
                      <button
                        className={` ${
                          darkMode
                            ? "border-emerald-500 text-emerald-400"
                            : "border-green-600 text-green-700"
                        }                 
                 border-solid  whitespace-nowrap bg-transparent  rounded-lg px-4 py-1 active:opacity-50`}
                        onClick={() => handleEditClick(item)}
                      >
                        Edit
                      </button>
                      <button
                        className={` ${
                          darkMode
                            ? "border-red-500 text-red-400"
                            : "border-red-600 text-red-700"
                        }                 
                 border-solid  whitespace-nowrap bg-transparent  rounded-lg px-4 py-1 active:opacity-50`}
                        onClick={() => handleDeleteClick(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button
              className={` ${
                darkMode
                  ? "border-blue-500 text-blue-400"
                  : "border-blue-600 text-blue-700"
              }                 
               border-solid  whitespace-nowrap bg-transparent  rounded-lg px-4 py-1 active:opacity-50`}
              onClick={handleAddQuestion}
            >
              Add Question
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}

// {
//     id: 1,
//     question: "What is the capital of France?",
//     options: [
//       { answer: "London", isCorrect: false },
//       { answer: "Berlin", isCorrect: false },
//       { answer: "Paris", isCorrect: true },
//       { answer: "Rome", isCorrect: false },
//     ],
//   },
