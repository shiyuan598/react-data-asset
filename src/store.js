import { createStore } from "redux";
// import reducer from "./reducer";
import reducer, { combine } from './reducer/index'

console.info(reducer);

export default createStore(combine);
