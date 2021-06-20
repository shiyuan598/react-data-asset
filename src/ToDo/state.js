import React from "react";
export default function State() {
  return (
    <div id="todo-stats">
      <span className="todo-count">
        <span className="number">2</span>
        <span className="word">项待完成</span>
      </span>
      <span className="todo-clear">
        <span className="number">2</span>
        <span className="word">已完成事项</span>
      </span>
    </div>
  );
}
