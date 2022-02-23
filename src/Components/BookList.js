import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const BookList = () => {
  const { booksReducer } = useSelector((state) => state);
  const { books } = booksReducer;
  return (
    <div className="books-page">
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id}>
            <Book bookInfo={book} />
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default BookList;
