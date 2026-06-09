import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { createEmployee } from "../../actions/employeeActions";

function AddEmployee() {
  const errors = useSelector((state) => state.errorReducerContent || {});
  const dispatch = useDispatch();
  const { departmentId } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    adress: "",
    email: "",
    phoneNumber: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createEmployee(departmentId, employee));
    navigate(`/employeeList/${departmentId}`);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h3 className="text-center mb-4">Create Employee</h3>

        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                value={employee.name}
                onChange={onChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Address</label>
              <input
                type="text"
                name="adress"
                className="form-control"
                value={employee.adress}
                onChange={onChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={employee.email}
                onChange={onChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Phone</label>
              <input
                type="text"
                name="phoneNumber"
                className="form-control"
                value={employee.phoneNumber}
                onChange={onChange}
              />
            </div>
          </div>

          <button className="btn btn-dark w-100 mt-3">Create Employee</button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
