// departmentActions.js
import {
  GET_DEPARTMENTS,
  GET_ERRORS,
  GET_DEPARTMENT,
  DELETE_DEPARTMENT,
  CREATE_DEPARTMENT,
  UPDATE_DEPARTMENT,
} from "./types";
import axios from "axios";

const API_URL = "http://localhost:8080";

export const createDepartment = (department) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/api/departments`, department);
    dispatch({ type: CREATE_DEPARTMENT, payload: response.data || department });
    dispatch(getDepartments());
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response?.data || { message: error.message },
    });
  }
};

export const getDepartments = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/api/departments/all`);
    dispatch({ type: GET_DEPARTMENTS, payload: response.data });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response?.data || { message: error.message },
    });
  }
};

export const getDepartment = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/api/departments/${id}`);
    dispatch({ type: GET_DEPARTMENT, payload: response.data });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response?.data || { message: error.message },
    });
  }
};

export const updateDepartment = (id, department) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${API_URL}/api/departments/${id}`,
      department,
    );
    dispatch({ type: UPDATE_DEPARTMENT, payload: response.data });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response?.data || { message: error.message },
    });
  }
};

export const deleteDepartment = (id) => async (dispatch) => {
  if (!window.confirm("Are you sure?")) return;
  try {
    await axios.delete(`${API_URL}/api/departments/delete/${id}`);
    dispatch({ type: DELETE_DEPARTMENT, payload: id });
    dispatch(getDepartments());
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response?.data || { message: error.message },
    });
  }
};
