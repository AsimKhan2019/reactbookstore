import React from 'react';
import { useDispatch } from 'react-redux';
import { addBooktolist } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    dispatch(addBooktolist(e.target.title.value, e.target.author.value));
    e.target.reset();
  };

  return (
    <div className="entry">
      <form onSubmit={handleSubmit}>
        <h1>Add New Book</h1>
        <input type="text" name="title" placeholder="Enter title of the book" id="title" />
        <input type="text" name="author" placeholder="Enter author name" id="author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
