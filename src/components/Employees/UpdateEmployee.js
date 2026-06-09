import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateEmployee } from "../../actions/employeeActions";

function UpdateEmployee() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { departmentId, employeeId } = useParams();
  const errors = useSelector((state) => state.errorReducerContent);

  const [employee, setEmployee] = useState({
    name: "",
    adress: "",
    email: "",
    phoneNumber: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateEmployee(departmentId, employeeId, employee));
      navigate(`/employeeList/${departmentId}`);
    } catch (err) {
      console.log("Update dështoi", err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h3 className="text-center mb-4">Update Employee</h3>

        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                placeholder="Employee Name"
                name="name"
                value={employee.name || ""}
                onChange={onChange}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className={`form-control ${errors.adress ? "is-invalid" : ""}`}
                placeholder="Employee Address"
                name="adress"
                value={employee.adress || ""}
                onChange={onChange}
              />
              {errors.adress && (
                <div className="invalid-feedback">{errors.adress}</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Employee Email"
                name="email"
                value={employee.email || ""}
                onChange={onChange}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className={`form-control ${
                  errors.phoneNumber ? "is-invalid" : ""
                }`}
                placeholder="Employee Phone Number"
                name="phoneNumber"
                value={employee.phoneNumber || ""}
                onChange={onChange}
              />
              {errors.phoneNumber && (
                <div className="invalid-feedback">{errors.phoneNumber}</div>
              )}
            </div>
          </div>

          <button type="submit" className="btn btn-success w-100 mt-3">
            Update Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateEmployee;
