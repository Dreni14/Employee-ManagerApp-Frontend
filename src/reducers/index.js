import { combineReducers } from "redux";
import errorReducer from "./errorReducers";
import departmentReducer from "./departmentreducer";
import employeeReducer from "./employeeReducer";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
  errorReducerContent: errorReducer,
  departmentReducerContent: departmentReducer,
  employeeReducerContent: employeeReducer,
  taskReducerContent: taskReducer,
});

export default rootReducer;
