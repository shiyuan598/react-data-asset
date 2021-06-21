import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
export default function ToDo(props) {
  let { id, title, done } = props;
  const [isEdit, changeEdit] = useState(false);
  const dispatch = useDispatch();
  let edit = useRef();
  let [val, setVal] = useState(title);
  useEffect(() => {
    if (isEdit) {
      edit.current.focus();
    }
  }, [isEdit]);
  return (
    <li>
      <div className="todo">
        <div className="display">
          <input
            type="checkbox"
            className="check"
            checked={done}
            onChange={({ target }) => {
              dispatch({
                type: "TODO_DONE",
                id: id,
                done: target.checked
              });
            }}
          />
          <div
            className="todo-content"
            onDoubleClick={() => {
              changeEdit(true);
            }}
          >
            {title}
          </div>
          <div
            className="todo-destory"
            onClick={() => {
              dispatch({
                type: "TODO_REMOVE",
                id
              });
            }}
          >
            &times;
          </div>
        </div>
        <div className="edit">
          <input
            type="text"
            className="todo-input"
            ref={edit}
            value={val}
            onChange={({ target }) => {
              setVal(target.value);
            }}
            onBlur={({ target }) => {
              if (val.trim()) {
                dispatch({
                  type: "TODO_EDIT",
                  id,
                  title: val
                });
              } else {
                setVal(title);
              }
              changeEdit(false);
            }}
          />
        </div>
      </div>
    </li>
  );
}
