import React from 'react';
import Book from './Book';
import Form from './Form';

const books = [
  {
    id: 1,
    title: 'Study hard',
    author: 'John Doe',
  },
  {
    id: 1,
    title: 'Do the project',
    author: 'John Doe',
  },
  {
    id: 1,
    title: 'Do the chore',
    author: 'John Doe',
  },
];

const BookList = () => {
  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.id} >
            <Book bookInfo={book} />
            <button>remove</button>
          </li>
        ))}
      </ul>
      <Form />
    </>
  );
}
 
export default BookList;