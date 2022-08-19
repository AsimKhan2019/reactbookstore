import React from 'react';
import { Link } from 'react-router-dom';
import title from '../images/title.png';
import login from '../images/login.png';

const Nav = () => (
  <div className="header">
    <div className="nav">
      <img src={title} alt="title comes here" />
      <nav className="navigation">
        <ul>
          <Link to="/"><li>Books</li></Link>
          <Link to="/categories"><li>Categories</li></Link>
        </ul>
      </nav>
    </div>
    <div className="login">
      <img src={login} alt="login comes here" />
    </div>
  </div>
);

export default Nav;
