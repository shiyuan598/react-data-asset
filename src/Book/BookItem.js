import React from "react";

export default function BookItem(props) {
  const handleClick = () => {
    props.handleClick(props.book.id);
  };
  const { book } = props;
  return (
    <li>
      <div>{book.title}</div>
      <div>{book.author}</div>
      <div>{book.publish}</div>
      <button onClick={handleClick}>好评{book.score}</button>
    </li>
  );
}
