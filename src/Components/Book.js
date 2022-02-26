import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/Books/Books';
import './Book.css';

const Book = ({ bookInfo }) => {
  const dispatch = useDispatch();
  const { item_id: id, title, category } = bookInfo;
  const progress = Math.floor(Math.random() * 101);
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-item">
          <p className="category">Action, Adventure, Comedy</p>
          <h3>{title}</h3>
          <p className="author">{category}</p>
          <div className="book-options">
            <button type="button" className="btn-card">Comments</button>
            <button onClick={() => dispatch(removeBook(id))} type="button" className="btn-card">Remove</button>
            <button type="button" className="btn-card">Edit</button>
          </div>
        </div>
        <div className="card-progress">
          <div className="progress-bar" style={{ width: 80, height: 80 }}>
            <CircularProgressbar value={progress} />
          </div>
          <div className="progress-info">
            <p className="completed">
              {progress}
              %
            </p>
            <p className="text-completed">Completed</p>
          </div>
        </div>
        <div className="card-chapter">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter">Chapter 1</p>
          <button type="button" className="update-progress">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
