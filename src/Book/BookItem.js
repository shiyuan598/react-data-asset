import React from "react";
import PropTypes from "prop-types";

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    score: PropTypes.number
  }).isRequired,
  onScore: PropTypes.func
};
export default function BookItem(props) {
  const handleClick = () => {
    props.onScore(props.book.id);
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
