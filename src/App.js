import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Report from "./Report/index";
import Title from "./title";
import Create from "./create";
import ToDos from "./todos";
import State from "./state";
import "./App.css";

function App() {
  let data = useSelector((state) => state.todos);
  return (
    <Fragment>
      <div className="report-app">
        <Report />
      </div>
      <div id="todoApp">
        <Title />
        <div className="content">
          <Create />
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
    </Fragment>
  );
}

export default App;
