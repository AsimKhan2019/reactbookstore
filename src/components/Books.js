import React from 'react';
import { useSelector } from 'react-redux/es/exports';
// import { fetchBooks } from '../redux/books/books';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const bookLists = useSelector((state) => state.books);

  return (
    <div className="main-content">
      <section className="list">
        <Book bookDetails={bookLists} />
      </section>
      <section>
        <AddBook />
      </section>
    </div>
  );
};

export default Books;
