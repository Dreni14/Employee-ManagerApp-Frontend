import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  updateDepartment,
  getDepartment,
} from "../../actions/departmentActions";

function UpdateDepartment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const department = useSelector(
    (state) => state.departmentReducerContent.department,
  );

  const errors = useSelector((state) => state.errorReducerContent || {});

  const [name, setName] = useState("");

  // Merr department nga backend
  useEffect(() => {
    dispatch(getDepartment(id));
  }, [dispatch, id]);

  // Mbush formën kur vjen data
  useEffect(() => {
    if (department) {
      setName(department.name || "");
    }
  }, [department]);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(updateDepartment(id, { name }));

    // Redirect pas update
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h3 className="text-center mb-4">Update Department</h3>

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

          <div className="d-flex gap-2">
            <button className="btn btn-warning w-100">Update</button>

            <button
              type="button"
              className="btn btn-secondary w-100"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateDepartment;
