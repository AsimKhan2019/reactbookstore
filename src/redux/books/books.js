import { v4 as uuidv4 } from 'uuid';
// Setting Actions and Reducers for the Books
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialBookArray = [];

const bookReducer = (state = initialBookArray, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        { id: uuidv4(), title: action.payload.title, author: action.payload.author },
      ];

    case REMOVE_BOOK:
      return state.filter((book) => (book.id) !== action.id);

    default:
      return state;
  }
};

// Setting up Action Creators
export const addBooktolist = (title, author) => (
  {
    type: ADD_BOOK,
    payload: {
      title,
      author,
    },
  }
);

export const removeBookfromlist = (id) => (
  {
    type: REMOVE_BOOK,
    id,
  }
);

export default bookReducer;
