export default function course(courses = [], action) {
  switch (action.type) {
    case "COURSE_ADD":
      return [
        ...courses,
        {
          id: Date.now(),
          name: action.name,
          score: action.score
        }
      ];
    default:
      break;
  }
  return courses;
}
