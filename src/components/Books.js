// import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const bookLists = useSelector((state) => state.books);

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
