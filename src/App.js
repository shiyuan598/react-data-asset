import React, { Fragment } from "react";
import Title from "./title";
import Create from "./create";
import ToDos from "./todos";
import State from "./state";
import Report from "./report";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  let data = useSelector((state) => state);
  return (
    <Fragment>
      <Report />
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
