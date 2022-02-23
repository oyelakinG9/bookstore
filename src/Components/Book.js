import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/Books/Books';

const Book = ({ bookInfo }) => {
  const dispatch = useDispatch();
  const { id, title, author } = bookInfo;
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-itme">
          <p className="category">Action, Adventure, Comedy</p>
          <h3>{title}</h3>
          <p className="author">{author}</p>
          <div className="book-options">
            <button onClick={() => dispatch(removeBook(id))} type="button">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
