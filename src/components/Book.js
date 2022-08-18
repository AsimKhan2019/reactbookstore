import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  return (
    props.bookDetails.map((book) => (
      <div className="book" key={book.id}>
        <span>{book.title}</span>
        <span />
        <span>{book.author}</span>
        <span />
        <span><button type="button" value="remove" onClick={() => dispatch(deleteBook(book.id))}>Remove Book</button></span>
      </div>
    )));
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
