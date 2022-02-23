import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import BookList from './Components/BookList';
import Categories from './Components/Categories';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
