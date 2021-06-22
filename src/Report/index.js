import React from "react";
import Create from "./create";
import Course from "./course";
import Total from "./total";
import { useSelector } from "react-redux";
import "./index.css";

export default function Report() {
  let courses = useSelector((state) => state.courses);
  return (
    <div className="report">
      <h3 className="title">Report</h3>
      <Create />
      <div className="course-list">
        {courses.map((item) => (
          <Course key={item.id} {...item} />
        ))}
      </div>
      <Total />
    </div>
  );
}
