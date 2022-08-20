import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookStatus } from '../redux/categories/categories';

const Categories = () => {
  const categoryStatus = useSelector((state) => (state.categories));
  const dispatch = useDispatch();
  return (
    <div className="category">
      <p>
        {categoryStatus}
      </p>

      <button className="categorybutton" type="button" onClick={() => dispatch(getBookStatus())}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
