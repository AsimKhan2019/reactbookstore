import React from 'react';
import { useSelector } from 'react-redux/es/exports';
// import { fetchBooks } from '../redux/books/books';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const bookLists = useSelector((state) => state.books);

  return (
    <div className="container">
      <div className="list">
        <Book bookDetails={bookLists} />
      </div>
      <AddBook />
    </div>
  );
};

export default Books;
