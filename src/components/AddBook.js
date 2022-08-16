import React from 'react';

const AddBook = () => (
  <div className="entry">
    <h1>Add New Book</h1>
    <input type="text" placeholder="Enter title of the book" id="title" />
    <input type="text" placeholder="Enter author name" id="author" />
    <button type="button" text="Add" value="Add" label="Add">Add Book</button>
  </div>
);

export default AddBook;
