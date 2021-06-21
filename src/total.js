import React from "react";
import { useSelector } from "react-redux";

export default function Total() {
  const data = useSelector((state) => state.courses);
  const sum = data.reduce((pre, cur) => {
    return pre.value + cur.value;
  }, 0);
  return <div>Total: {sum}</div>;
}
