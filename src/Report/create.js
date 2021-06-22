import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

export default function Create() {
  const course = useRef();
  const score = useRef();
  const [state, setState] = useState({
    name: "",
    score: ""
  });
  const dispatch = useDispatch();
  return (
    <div className="create">
      <div className="attr">
        <label htmlFor="">Course: </label>
        <input
          type="text"
          ref={course}
          defaultValue={state.course}
          onChange={({ target }) => {
            setState({
              ...state,
              name: target.value
            });
          }}
        />
      </div>
      <div className="attr">
        <label htmlFor="">Score:</label>
        <input
          type="text"
          ref={score}
          defaultValue={state.score}
          onChange={({ target }) => {
            setState({
              ...state,
              score: target.value
            });
          }}
        />
      </div>
      <button
        onClick={() => {
          dispatch({
            type: "COURSE_ADD",
            ...state
          });

          setState({
            name: "",
            score: ""
          });

          //   dispatch({
          //     type: "COURSE_ADD",
          //     name: course.current.value,
          //     score: score.current.value
          //   });
        }}
      >
        +
      </button>
    </div>
  );
}
