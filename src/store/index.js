import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./featuresReducers/todo";
import postsReducer from "./featuresReducers/posts";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    posts: postsReducer,
  },
});

export default store;
