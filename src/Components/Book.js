import React from 'react';

const Book = ({bookInfo}) => {
  const {
    title, author
  } = bookInfo;
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>  
    </div>
  );
}
 
export default Book;