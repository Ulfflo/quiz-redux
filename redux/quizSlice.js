import { createSlice } from "@reduxjs/toolkit";
import quizData from "@/data/quizData";

const initialState = {
  quizData: quizData,
  editingQuestion: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizData(state, action) {
      state.quizData = action.payload;
    },
    setEditingQuestion(state, action) {
      state.editingQuestion = action.payload;
    },
    addQuestion(state, action) {
      const newQuestion = {
        id: state.quizData.length + 1,
        question: "New Question",
        options: [{ answer: "Option 1", isCorrect: false }],
      };
      state.quizData.push(newQuestion);
    },
    editQuestion(state, action) {
      const { id, updatedQuestion } = action.payload;
      state.quizData = state.quizData.map((question) =>
        question.id === id ? updatedQuestion : question
      );
    },
    deleteQuestion(state, action) {
      const id = action.payload;
      state.quizData = state.quizData.filter((item) => item.id !== id);
    },
  },
});

export const {
  setQuizData,
  setEditingQuestion,
  addQuestion,
  editQuestion,
  deleteQuestion,
} = quizSlice.actions;
export default quizSlice.reducer;

//Min todo slice som har liknande funktionalitet
// export const initialState = {
//     todos: [
//       { id: 1, title: "Pay bills", done: false },
//       { id: 2, title: "Wash car", done: false },
//       { id: 3, title: "Do laundry", done: false },
//       { id: 4, title: "Study", done: false },
//     ],
//   };

//   let count = 5;

//   export const todoSlice = createSlice({
//     name: "todos",
//     initialState,
//     reducers: {
//       addTodo: (state, action) => {
//         state.todos.push({
//           id: count++,
//           title: action.payload,
//           done: false,
//         });
//         state.title = "";
//       },
//       toggleComplete: (state, action) => {
//         const todo = state.todos.find((todo) => todo.id === action.payload.id);
//         if (todo) {
//           todo.done = !todo.done;
//         }
//       },
//       removeTodo: (state, action) => {
//         state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
//       },
//       setTitle: (state, action) => {
//         state.title = action.payload;
//       },
//     },
//   });

//   export const { addTodo, removeTodo, toggleComplete, setTitle } =
//     todoSlice.actions;

//   export default todoSlice.reducer;

// addTodo
// completeTodo
// removeTodo
