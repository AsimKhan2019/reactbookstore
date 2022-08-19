import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      id: uuidv4(),
      title: e.target.title.value,
      author: e.target.author.value,
      category: 'Fiction',
    }));
    e.target.reset();
  };

  return (
    <div className="entry">
      <form onSubmit={handleSubmit}>
        <h1>Add New Book</h1>
        <input type="text" name="title" placeholder="Enter title of the book" id="title" />
        <input type="text" name="author" placeholder="Enter author name" id="author" />
        <span className="right"><button className="chapterbutton" type="submit">Add Book</button></span>
      </form>
    </div>
  );
};

export default AddBook;
