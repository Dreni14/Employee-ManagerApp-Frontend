import axios from "axios";
import {
  GET_TASKS,
  GET_TASK,
  CREATE_TASK,
  DELETE_TASK,
  GET_ERRORS,
  UPDATE_TASK,
} from "./types";

const API_URL = "http://localhost:8080";

export const getTasks = (dep_id, emp_id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/tasks/${dep_id}/${emp_id}`,
    );
    dispatch({ type: GET_TASKS, payload: response.data });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response?.data || { message: error.message },
    });
  }
};

export const getTask = (dep_id, emp_id, task_id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/tasks/${dep_id}/${emp_id}/${task_id}`,
    );
    dispatch({ type: GET_TASK, payload: response.data });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response?.data || { message: error.message },
    });
  }
};

export const createTask = (dep_id, emp_id, task) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/tasks/${dep_id}/${emp_id}`,
      task,
    );
    dispatch({ type: CREATE_TASK, payload: response.data });
    window.location.href = `/TaskList/${dep_id}/${emp_id}`;
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response?.data || { message: error.message },
    });
  }
};

export const updateTask =
  (dep_id, emp_id, task_id, task) => async (dispatch) => {
    try {
      const response = await axios.put(
        `${API_URL}/api/tasks/${dep_id}/${emp_id}/${task_id}`,
        task,
      );
      dispatch({ type: UPDATE_TASK, payload: response.data });
      window.location.href = `/TaskList/${dep_id}/${emp_id}`;
    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload: error.response?.data || { message: error.message },
      });
    }
  };

export const deleteTask = (dep_id, emp_id, task_id) => async (dispatch) => {
  if (!window.confirm("Are you sure you want to delete this Task?")) return;
  try {
    await axios.delete(
      `${API_URL}/api/tasks/delete/${dep_id}/${emp_id}/${task_id}`,
    );
    dispatch({ type: DELETE_TASK, payload: task_id });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response?.data || { message: error.message },
    });
  }
};
