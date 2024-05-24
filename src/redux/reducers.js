import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT } from "./actions";

const initialState = {
  students: [
    { id: 1, name: "Sean Abot", subject: "Maths", marks: 77 },
    { id: 2, name: "Shawn Tate", subject: "English", marks: 72 },
    { id: 3, name: "Shivam", subject: "Physics", marks: 78 },
    { id: 4, name: "Mitchelle", subject: "Maths", marks: 78 },
    { id: 5, name: "Shiv Yadav", subject: "Chemistry", marks: 80 },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter((_, index) => index !== action.payload),
      };
    case EDIT_STUDENT:
      const { id, student } = action.payload;
      const updatedStudents = state.students.map((item, idx) =>
        item.id === id ? student : item
      );
      console.log(updatedStudents);
      return {
        ...state,
        students: updatedStudents,
      };
    default:
      return state;
  }
};

export default rootReducer;
