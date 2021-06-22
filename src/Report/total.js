import React from "react";
import { useSelector } from "react-redux";

export default function Total() {
    const courses = useSelector(state=>state.courses);
    let sum = courses.reduce((pre, cur)=>{
        return pre + Number(cur.score)
    }, 0)
  return (<div className="total">
      <span>Num:</span> {courses.length}
      <span>Sum:</span> {sum}
  </div>);
}
