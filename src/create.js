import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Create() {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  return (
    <div id="create-todo">
      <input
        id="new-todo"
        type="text"
        placeholder="请输入要完成的项"
        value={val}
        onChange={({ target }) => {
          setVal(target.value);
        }}
        onKeyDown={({ keyCode }) => {
          if (keyCode === 13 && val.trim()) {
            dispatch({
              type: "TODO_ADD",
              title: val
            });
            setVal("");
          }
        }}
      />
    </div>
  );
}
