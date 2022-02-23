import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="nav">
      <Link to="/"><h1>Bookstore CMS</h1></Link>
      <ul className="navBar">
        <li className="nav-link">
          <Link to="/">BOOKS</Link>
        </li>
        <li className="nav-link">
          <Link to="categories">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
