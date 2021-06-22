import React from "react";

export default function Course(props) {
  let { name, score } = props;
  return (
    <div className="course">
        {name}:{score}
    </div>
  );
}
