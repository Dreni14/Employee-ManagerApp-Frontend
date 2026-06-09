import {
  GET_TASKS,
  GET_TASK,
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
} from "../actions/types";

const initialState = {
  tasks: [],
  task: {},
};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload || [],
      };

    case GET_TASK:
      return {
        ...state,
        task: action.payload || null,
      };

    case CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        task: action.payload,
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task,
        ),
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
}
