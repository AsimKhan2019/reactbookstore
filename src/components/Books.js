import React, { useState } from 'react';
import AddBook from './AddBook';

const Books = () => {
  const [books, setBooks] = useState({
    id: 1,
    title: 'This is my book',
    author: 'Written by me',
  });

  const getBooks = () => {
    setBooks({ id: 1, title: 'This is my book', author: 'Written by me' });
  };

  const { id, title, author } = books;
  return (
    <div className="container">
      <h1>Book List</h1>
      <div className="list" onLoad={getBooks}>
        <ul>
          <li>
            <span>{id}</span>
            <span> </span>
            <span>{title}</span>
            <span> </span>
            <span>{author}</span>
          </li>
        </ul>
      </div>
      <AddBook />
    </div>
  );
};

export default Books;
