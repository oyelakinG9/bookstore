import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/Books/Books';
import Book from './Book';
import Form from './Form';
import './Booklist.css';

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const { booksReducer } = useSelector((state) => state);
  const { books } = booksReducer;
  return (
    <div className="books-page">
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.item_id} style={{ listStyle: 'none' }}>
            <Book bookInfo={book} />
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default BookList;
