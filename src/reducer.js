export default function reducer(
  state = {
    courses: [
      {
        id: Date.now(),
        name: "yuwf",
        score: 113
      }
    ],
    todos: []
  },
  action
) {
  switch (action.type) {
    case "COURSE_ADD":
      return {
        ...state,
        courses: [
          ...state.courses,
          {
            id: Date.now(),
            name: action.name,
            score: action.score
          }
        ]
      };
    case "TODO_ADD":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            title: action.title,
            done: false
          }
        ]
      };
    case "TODO_DONE":
      state.todos.forEach((item) => {
        if (item.id === action.id) {
          item.done = action.done;
        }
      });
      return { ...state, todos: [...state.todos] };
    case "TODO_EDIT":
      state.todos.forEach((item) => {
        if (item.id === action.id) {
          item.title = action.title;
        }
      });
      return { ...state, todos: [...state.todos] };
    case "TODO_REMOVE":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.id)
      };
    case "TODO_REMOVE_DONE":
      return {
        ...state,
        todos: state.todos.filter((item) => !item.done)
      };
    default:
      break;
  }
  return state;
}
