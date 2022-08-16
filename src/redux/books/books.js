//Setting Actions and Reducers for the Books 
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK'; 

const initialBookArray = [];

const bookReducer = (state = initialBookArray, action) => {
  switch(action.type) {
    case ADD_BOOK:
      return [
      ...state,
      {
        id: action.id, 
        title: action.title,
        author: action.author
      }
    ];

    case REMOVE_BOOK: 
      return state.filter((book) => (book.id) !== action.id);
    
    default:
      return state;
  };
}

//Setting up Action Creators 
export const addBooktolist = (book) => (
  {
    type: ADD_BOOK,
    book: book
  }
);

export const removeBookfromlist = (id) => (
  {
    type: REMOVE_BOOK,
    id: id
  }
);

export default bookReducer;