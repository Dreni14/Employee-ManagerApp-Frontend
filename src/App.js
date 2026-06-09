import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Layout/Header";
import Departments from "./components/Departments";
import AddDepartment from "./components/Departments/AddDepartment";
import UpdateDepartment from "./components/Departments/UpdateDepartment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/Employees/AddEmployee";
import UpdateEmployee from "./components/Employees/UpdateEmployee";
import TaskList from "./components/TaskList";
import AddTask from "./components/Tasks/AddTask";
import UpdateTask from "./components/Tasks/UpdateTask";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Departments />} />
          <Route
            exact
            path="/createDepartmentForm"
            element={<AddDepartment />}
          />
          <Route
            exact
            path="/updateDepartment/:id"
            element={<UpdateDepartment />}
          />

          <Route
            exact
            path="/employeeList/:departmentId"
            element={<EmployeeList />}
          />

          <Route
            exact
            path="/createEmployeeForm/:departmentId"
            element={<AddEmployee />}
          />

          <Route
            exact
            path="/updateEmployee/:departmentId/:employeeId"
            element={<UpdateEmployee />}
          />

          <Route
            exact
            path="/TaskList/:departmentId/:employeeId"
            element={<TaskList />}
          />
          <Route
            exact
            path="/AddTask/:departmentId/:employeeId"
            element={<AddTask />}
          ></Route>
          <Route
            exact
            path="/UpdateTask/:departmentId/:employeeId/:taskId"
            element={<UpdateTask />}
          ></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
