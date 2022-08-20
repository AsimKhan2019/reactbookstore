import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { Progress } from 'antd';
// import 'antd/dist/antd.css';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  return (
    props.bookDetails.map((book) => (
      <div className="book" key={book.id}>
        <div className="details">
          {/* <span className="left title">{book.title}</span> */}
          <h3>Category</h3>
          <h2>{book.title}</h2>
          <h4>{book.author}</h4>
          <ul>
            <li>Comments</li>
            <li>
              <button type="button" value="remove" onClick={() => dispatch(deleteBook(book.id))}>Remove Book</button>
            </li>
            <li>
              Edit
            </li>
          </ul>
        </div>
        <div className="percentage">
          <div className="spinner" />
          <div>
            <h2>
              {Math.floor(Math.random() * 100)}
              %
            </h2>
            <p>Completed</p>
          </div>
        </div>
        <div className="chapters">
          <h3>Current Chapter</h3>
          <h4>
            Chapter
            {Math.floor(Math.random() * 10)}
          </h4>
          <button type="button">Update Chapter</button>
        </div>
      </div>
    )));
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
