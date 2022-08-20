import React from 'react';
import { NavLink } from 'react-router-dom';
import login from '../images/login.png';

const Nav = () => (
  <header>
    <div className="container">
      <h1>Bookstore CMS</h1>
      <nav>
        <ul>
          <NavLink to="/" className="navLink" activeClassName="active"><li>Books</li></NavLink>
          <NavLink to="/categories" className="navLink" activeClassName="active"><li>Categories</li></NavLink>
        </ul>
      </nav>
      <img className="loginimg" src={login} alt="login comes here" />
    </div>
  </header>
);

export default Nav;
