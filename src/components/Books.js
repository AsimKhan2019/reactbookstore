import React, { useState } from 'react';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const [books] = useState([
    {
      id: 1,
      title: 'This is my book',
      author: 'Written by me',
    },
    {
      id: 2,
      title: 'This is my second book',
      author: 'Written also by me',
    },
  ]);

  return (
    <div className="container">
      <h1>Book List</h1>
      <div className="list">
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </div>
      <AddBook />
    </div>
  );
};

export default Books;
