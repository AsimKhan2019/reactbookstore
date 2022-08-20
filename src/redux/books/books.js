import { createAsyncThunk } from '@reduxjs/toolkit';
import BookAPI from '../bookAPI';

// Setting Actions and Reducers for the Books
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';

const initialBookArray = [];

const bookReducer = (state = initialBookArray, action) => {
  switch (action.type) {
    case 'ADD_BOOK/fulfilled':
      return [...state, action.payload];

    case 'REMOVE_BOOK/fulfilled':
      return [
        ...state.filter((book) => (book.id) !== action.payload),
      ];

    case GET_BOOKS:
      return action.payload;

    default:
      return state;
  }
};

// Setting up Action Creators

export const getAllBooks = (payload) => (
  {
    type: GET_BOOKS,
    payload,
  }
);

export const fetchBooks = createAsyncThunk(GET_BOOKS, async (post, { dispatch }) => {
  try {
    const response = await BookAPI.fetchBooks();
    dispatch(getAllBooks(response)); // fire for this action creator
  } catch (err) {
    dispatch({ type: 'GET_BOOKS_REJECTED', payload: err });
  }
});

export const deleteBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await BookAPI.deleteBook(id);
  return id;
});

export const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await BookAPI.addBook({
    id: book.id,
    title: book.title,
    author: book.author,
    category: 'NAN',
  });
  return {
    id: book.id,
    title: book.title,
    author: book.author,
  };
});

export default bookReducer;
