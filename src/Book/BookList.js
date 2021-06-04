import React, { Component } from "react";
import BookItem from "./BookItem";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: []
    };
    this.handleScore = this.handleScore.bind(this);
  }
  componentDidMount() {
    this.setState({
      bookData: [
        {
          id: 1,
          title: "《JavaScript权威指南》",
          author: "弗兰纳根",
          publish: "2021-04",
          score: 7
        },
        {
          id: 2,
          title: "《CSS深入解析》",
          author: "基思.格兰特",
          publish: "2020-06",
          score: 8
        },
        {
          id: 3,
          title: "《React小书》",
          author: "哈哈",
          publish: "2017-12",
          score: 6
        }
      ]
    });
  }
  handleScore(id) {
    const bookData = this.state.bookData.map((item) => {
      const newItem =
        item.id === id ? { ...item, score: item.score + 1 } : item;
      return newItem;
    });
    this.setState({
      bookData
    });
  }
  render() {
    return (
      <div>
        书籍列表:
        <ul>
          {this.state.bookData.map((item) => (
            <BookItem book={item} onScore={this.handleScore} />
          ))}
        </ul>
      </div>
    );
  }
}
