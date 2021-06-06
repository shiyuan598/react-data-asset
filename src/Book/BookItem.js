import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BookItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      book: props.book
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.book !== nextProps.book) {
      this.setState({
        book: nextProps.book
      });
    }
  }

  handleClick() {
    this.props.onScore(this.props.book.id);
  }

  handleEdit() {
    const editing = this.state.editing;
    if (editing) {
      this.props.onSave(this.state.book);
    }
    this.setState({
      editing: !editing
    });
  }

  handleTitleChange(event) {
    console.info(event.target);
    const newBook = {
      ...this.props.book,
      title: event.target.value
    };
    this.setState({
      book: newBook
    });
  }

  render() {
    const { book } = this.state;
    return (
      <li>
        <div>
          {this.state.editing ? (
            <form>
              <textarea value={book.title} onChange={this.handleTitleChange} />
            </form>
          ) : (
            book.title
          )}
        </div>
        <div>{book.author}</div>
        <div>{book.publish}</div>
        <button onClick={this.handleClick}>好评{book.score}</button>
        <button onClick={this.handleEdit}>
          {this.state.editing ? "保存" : "编辑"}
        </button>
      </li>
    );
  }
}
BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    score: PropTypes.number
  }).isRequired,
  onScore: PropTypes.func
};
