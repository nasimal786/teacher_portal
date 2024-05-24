export const ADD_STUDENT = 'ADD_STUDENT';
export const EDIT_STUDENT = 'EDIT_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';

export const addStudent = (student) => ({
  type: ADD_STUDENT,
  payload: student,
});

export const editStudent = (id, student) => ({
  type: EDIT_STUDENT,
  payload: { id, student },
});

export const deleteStudent = (id) => ({
  type: DELETE_STUDENT,
  payload: id,
});
