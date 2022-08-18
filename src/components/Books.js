import React from 'react';
import { useSelector } from 'react-redux/es/exports';
// import { fetchBooks } from '../redux/books/books';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const bookLists = useSelector((state) => state.books);
  // const bookLists = useSelector(getAllBooks);
  // const dispatch = useDispatch();

  // useEffect(() => dispatch(fetchBooks()), []);

  return (
    <div className="container">
      <h1>Book List</h1>
      <div className="list">
        <Book bookDetails={bookLists} />
      </div>
      <AddBook />
    </div>
  );
};

export default Books;
