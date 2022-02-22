import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';
import BookList from '../src/Components/BookList';
import CATEGORIES from '../src/Components/Categories';

class App extends Component {
  state = {  } 
  render() { 
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
            <Route path="categories" element={<CATEGORIES />} />
          </Routes>
        </div>
    </Router>
    );
  }
}
 
export default App;


