import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav">
    <h1>Bookstore CMS</h1>
    <nav>
      <ul>
        <Link to="/"><li>Books</li></Link>
        <Link to="/categories"><li>Categories</li></Link>
      </ul>
    </nav>
  </div>
);

export default Nav;
