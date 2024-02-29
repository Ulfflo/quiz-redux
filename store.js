import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./redux/login";
import darkModeReducer from "./redux/darkMode";
import quizReducer from "./redux/quizSlice";

export const store = configureStore({
  reducer: {
    // our slices
    login: loginReducer,
    darkMode: darkModeReducer,
    quiz: quizReducer,
  },
});

export default store;

// Osäker på hur man kombinerar flera reducers? /Åsa

// export default configureStore({
//   reducer: {
//     quiz: quizReducer
//   }
// });
