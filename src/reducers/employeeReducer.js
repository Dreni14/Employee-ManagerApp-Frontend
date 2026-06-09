import {
  GET_EMPLOYEES,
  GET_EMPLOYEE,
  DELETE_EMPLOYEE,
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from "../actions/types";

const initialState = {
  employees: [],
  employee: {},
};

export default function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
        employee: action.payload,
      };

    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload || [],
      };

    case GET_EMPLOYEE:
      return {
        ...state,
        employee: action.payload || null,
      };

    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((emp) =>
          emp.id === action.payload.id ? action.payload : emp,
        ),
        employee:
          state.employee.id === action.payload.id
            ? action.payload
            : state.employee,
      };

    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload,
        ),
      };

    default:
      return state;
  }
}
