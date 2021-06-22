export default function todo(todos = [], action) {
  switch (action.type) {
    case "TODO_ADD":
      return [
          ...todos,
        {
          id: Date.now(),
          title: action.title,
          done: false
        }
      ];

    case "TODO_DONE":
      todos.forEach((item) => {
        if (item.id === action.id) {
          item.done = action.done;
        }
      });
      return [...todos];
    case "TODO_EDIT":
      todos.forEach((item) => {
        if (item.id === action.id) {
          item.title = action.title;
        }
      });
      return [...todos];
    case "TODO_REMOVE":
      return [...todos.filter((item) => item.id !== action.id)];
    case "TODO_REMOVE_DONE":
      return [...todos.filter((item) => !item.done)];
    default:
      break;
  }
  return todos;
}
