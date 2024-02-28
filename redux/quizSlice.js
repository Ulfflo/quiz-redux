import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizData: [], // initial quiz data
  editingQuestion: null, // id of question being edited
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
  },
});

export const { setQuizData, setEditingQuestion } = quizSlice.actions;
export default quizSlice.reducer;
