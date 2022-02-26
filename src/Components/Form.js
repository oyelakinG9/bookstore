import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/Books/Books';
import './Form.css';

const Form = () => {
  const dispatch = useDispatch();
  const [bookInfo, setBookInfo] = useState({
    item_id: uuidv4(),
    title: '',
    category: '',
  });
  const handleChange = (name) => (e) => {
    setBookInfo({ ...bookInfo, [name]: e.target.value });
  };
  // const onClick = () => {
  //   setBookInfo({ ...bookInfo, item_id:  });
  // };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createBook(bookInfo));
    setBookInfo({ title: '', category: '' });
  };

  return (
    <section className="add-new-book-section">
      <h2 className="add-book">ADD NEW BOOK</h2>
      <form onSubmit={(e) => onSubmit(e)} className="form">
        <input onChange={handleChange('title')} type="text" name="title" placeholder="Book title" value={bookInfo.title} className="title" />
        <input onChange={handleChange('category')} type="type" name="category" placeholder="category" value={bookInfo.category} className="category" />
        <button type="submit" className="add-btn">ADD BOOK</button>
      </form>
    </section>
  );
};

export default Form;
