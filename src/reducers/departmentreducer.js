import {
  GET_DEPARTMENTS,
  CREATE_DEPARTMENT,
  GET_DEPARTMENT,
  DELETE_DEPARTMENT,
  UPDATE_DEPARTMENT,
} from "../actions/types";

const initialState = {
  departments: [],
  department: {
    id: "",
    name: "",
  },
};

export default function departmentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DEPARTMENTS:
      return {
        ...state,
        departments: action.payload || [],
      };

    case GET_DEPARTMENT:
      return {
        ...state,
        department: action.payload || null,
      };

    case CREATE_DEPARTMENT:
      return {
        ...state,
        departments: [...state.departments, action.payload],
        department: action.payload || { id: "", name: "" },
      };
    case UPDATE_DEPARTMENT:
      return {
        ...state,
        departments: state.departments.map((dep) =>
          dep.id === action.payload.id ? action.payload : dep,
        ),
        department: action.payload || { id: "", name: "" },
      };

    case DELETE_DEPARTMENT:
      return {
        ...state,
        departments: state.departments.filter(
          (department) => department.id !== action.payload,
        ),
      };

    default:
      return state;
  }
}
