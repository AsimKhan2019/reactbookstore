import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookReducer from "./books/books";
import bookstatusReducer from "./categories/categories";

const rootBookReducer = combineReducers({
  books: bookReducer,
  categories: bookstatusReducer,
});

const bookStore = configureStore({
  reducer: rootBookReducer,
});

export default rootBookReducer;