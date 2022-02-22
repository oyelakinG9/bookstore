import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';
import BookList from './Components/BookList';
import Categories from './Components/Categories';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Bookstore CMS</h1>
          <nav className="nav">
            <ul className="navBar">
              <li className="nav-link">
                <Link to="booklist">BOOKS</Link>
              </li>
              <li className="nav-link">
                <Link to="categories">CATEGORIES</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="booklist" element={<BookList />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
