import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  return (
    props.bookDetails.map((book) => (
      <div className="book" key={book.id}>
        <div className="details">
          <span className="left title">{book.title}</span>
          <div className="clr" />
          <span className="left">{book.author}</span>
          <div className="clr" />
          <span className="left"><button className="remove" type="button" value="remove" onClick={() => dispatch(deleteBook(book.id))}>Remove Book</button></span>
        </div>
        <div className="percentage">
          <Progress type="circle" percent={Math.floor(Math.random() * 10)} />
          <div>
            <span className="highlight">
              {Math.floor(Math.random() * 10)}
              %
              Completed
            </span>
          </div>
        </div>
        <div className="chapters">
          <span className="left title">Current Chapter</span>
          <div className="clr" />
          <span className="left">
            Chapter
            {Math.floor(Math.random() * 10)}
          </span>
          <div className="clr" />
          <span className="left"><button className="chapterbutton" type="button">Update Chapter</button></span>
        </div>
      </div>
    )));
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
