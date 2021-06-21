import React from "react";
import { useSelector } from "react-redux";

export default function State() {
  const data = useSelector((state) => state);
  const done = data.filter((item) => item.done);
  return (
    <div id="todo-stats">
      <span className="todo-count">
        <span className="word">待完成事项</span>
        <span className="number">{done.length}</span>
      </span>
      <br/>
  <span className="todo-clear">已完成事项-{data.length - done.length}</span>
    </div>
  );
}
