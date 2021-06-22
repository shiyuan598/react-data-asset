import { combineReducers } from "redux";
// 不同模块的reducer分别定义
import course from "./course";
import todo from "./todo";

// 也可以这样合并
export const combine = combineReducers({
  courses: course,
  todos: todo
});


// 合并reducer
export default function reducer(state = {}, action) {
    return {
      courses: course(state.courses, action),
      todos: todo(state.todos, action)
    };
  }