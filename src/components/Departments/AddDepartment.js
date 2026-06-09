import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createDepartment } from "../../actions/departmentActions";

function AddDepartment() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errors = useSelector((state) => state.errorReducerContent || {});

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createDepartment({ name }));
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h3 className="text-center mb-4">Create Department</h3>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Department Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Enter department name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

          <button className="btn btn-dark w-100">Create Department</button>
        </form>
      </div>
    </div>
  );
}

export default AddDepartment;
