import React from "react";
import { Link } from "react-router-dom";
import { deleteEmployee } from "../../actions/employeeActions";
import { useDispatch } from "react-redux";

function Employee({ employee, departmentId }) {
  const dispatch = useDispatch();

  const onClickDelete = (departmentId, employeeId) => {
    dispatch(deleteEmployee(departmentId, employeeId));
  };

  return (
    <div className="container">
      <div className="card shadow-sm mb-3 border-0">
        <div className="card-body">
          <div className="row">
            {/* INFO */}
            <div className="col-lg-6 col-md-6 col-12">
              <h5 className="mb-2">{employee.name}</h5>

              <p className="mb-1 text-muted">{employee.adress}</p>
              <p className="mb-1 text-muted">{employee.email}</p>
              <p className="mb-0 text-muted">{employee.phoneNumber}</p>
            </div>

            {/* ACTIONS */}
            <div className="col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-center align-items-md-end mt-3 mt-md-0">
              <Link
                to={`/TaskList/${departmentId}/${employee.id}`}
                className="btn btn-sm btn-outline-primary mb-2 w-100 w-md-auto"
              >
                Employee Board
              </Link>

              <Link
                to={`/updateEmployee/${departmentId}/${employee.id}`}
                className="btn btn-sm btn-outline-warning mb-2 w-100 w-md-auto"
              >
                Update Employee
              </Link>

              <button
                onClick={() => onClickDelete(departmentId, employee.id)}
                className="btn btn-sm btn-outline-danger w-100 w-md-auto"
              >
                Delete Employee
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
