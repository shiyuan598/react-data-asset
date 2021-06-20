import React, { Fragment } from "react";
import Title from "./title";
import Create from "./create";
import ToDos from "./todos";
import State from "./state";
import { useSelector } from "react-redux";

export default function ToDoApp() {
  let data = useSelector((state) => state);
  console.info(data);
  return (
    <div id="todoApp">
      <Title />
      <div className="content">
        <Create />
        <ToDos />
        <State />
        {data.length > 0 ? (
          <Fragment>
            <ToDos />
            <State />
          </Fragment>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
