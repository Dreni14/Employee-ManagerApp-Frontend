import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteDepartment } from "../../actions/departmentActions";

function Department({ department }) {
  const dispatch = useDispatch();

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card shadow-sm h-100 border-0">
        <div className="card-body">
          <h5 className="card-title">{department.name}</h5>
          <p className="text-muted">ID: {department.id}</p>

          <div className="d-flex flex-column gap-2 mt-3">
            <Link
              to={`/employeeList/${department.id}`}
              className="btn btn-outline-primary btn-sm"
            >
              View Employees
            </Link>

            <Link
              to={`/updateDepartment/${department.id}`}
              className="btn btn-outline-warning btn-sm"
            >
              Edit
            </Link>

            <button
              onClick={() => dispatch(deleteDepartment(department.id))}
              className="btn btn-outline-danger btn-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Department;
