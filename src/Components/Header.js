import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <Link to="/" style={{ textDecoration: 'none' }}><h1 className="logo">Bookstore CMS</h1></Link>
    <nav className="nav">
      <ul className="navBar">
        <li className="nav-link books">
          <Link to="/" style={{ textDecoration: 'none' }}>BOOKS</Link>
        </li>
        <li className="nav-link categories">
          <Link to="categories" style={{ textDecoration: 'none' }}>CATEGORIES</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
