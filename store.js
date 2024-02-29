import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./redux/login";
import darkModeReducer from "./redux/darkMode";

export const store = configureStore({
  reducer: {
    // our slices
    login: loginReducer,
    darkMode: darkModeReducer,
  },
});

export default store;

// Osäker på hur man kombinerar flera reducers? /Åsa

// export default configureStore({
//   reducer: {
//     quiz: quizReducer
//   }
// });
