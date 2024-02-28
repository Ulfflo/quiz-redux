import { configureStore } from "@reduxjs/toolkit";

// import reducers
import loginReducer from "./redux/login";

export const store = configureStore({
  reducer: {
    // our slices
    login: loginReducer,
  },
});
