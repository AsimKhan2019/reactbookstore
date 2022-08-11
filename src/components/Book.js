import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;

  return (
    <div className="book">
      <span>{title}</span>
      <span />
      <span>{author}</span>
      <span />
      <span><button type="button" value="remove">Remove Book</button></span>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
