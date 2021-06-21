import React from "react";
import ToDo from "./todo";
import { useSelector } from "react-redux";

export default function ToDos() {
  const data = useSelector((state) => state);
  return (
    <ul className="todo-list">
      {
          data.map(item=>(<ToDo key={item.id} {...item} />))
      }
    </ul>
  );
}
