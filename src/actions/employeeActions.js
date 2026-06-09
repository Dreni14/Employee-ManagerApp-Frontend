import {
  GET_EMPLOYEES,
  GET_EMPLOYEE,
  CREATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  GET_ERRORS,
  UPDATE_EMPLOYEE,
} from "./types";
import axios from "axios";

const API_URL = "http://localhost:8080";

export const getEmployeeList = (departmentId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/employees/all/${departmentId}`,
    );
    dispatch({ type: GET_EMPLOYEES, payload: response.data || [] });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response?.data || { message: error.message },
    });
  }
};

export const createEmployee = (departmentId, employee) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/employees/${departmentId}`,
      employee,
    );
    dispatch({ type: CREATE_EMPLOYEE, payload: response.data || employee });
    dispatch(getEmployeeList(departmentId));
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response?.data || { message: error.message },
    });
  }
};

export const getEmployee = (departmentId, employeeId) => async (dispatch) => {
  if (!departmentId || !employeeId) return;
  try {
    const response = await axios.get(
      `${API_URL}/api/employees/${departmentId}/${employeeId}`,
    );
    dispatch({ type: GET_EMPLOYEE, payload: response.data || {} });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response?.data || { message: error.message },
    });
  }
};

export const updateEmployee =
  (departmentId, employeeId, employeeData) => async (dispatch) => {
    try {
      const response = await axios.put(
        `${API_URL}/api/employees/${departmentId}/${employeeId}`,
        employeeData,
      );
      dispatch({
        type: UPDATE_EMPLOYEE,
        payload: response.data || employeeData,
      });
      return response.data;
    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload: error.response?.data || { message: error.message },
      });
      throw error;
    }
  };

export const deleteEmployee =
  (departmentId, employeeId) => async (dispatch) => {
    if (!departmentId || !employeeId) return;
    if (!window.confirm("Are you sure you want to delete this employee?"))
      return;
    try {
      await axios.delete(
        `${API_URL}/api/employees/delete/${departmentId}/${employeeId}`,
      );
      dispatch({ type: DELETE_EMPLOYEE, payload: employeeId });
      dispatch(getEmployeeList(departmentId));
    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload: error.response?.data || { message: error.message },
      });
    }
  };
