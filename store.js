import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./redux/login";

export const store = configureStore({
  reducer: {
    // our slices
    login: loginReducer,
  },
});

// Osäker på hur man kombinerar flera reducers? /Åsa

// export default configureStore({
//   reducer: {
//     quiz: quizReducer
//   }
// });
