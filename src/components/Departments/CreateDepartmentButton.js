import React from "react";
import { Link } from "react-router-dom";

function CreateDepartmentButton() {
  return (
    <>
      <div className="container mt-4 d-flex justify-content-end">
        <Link to="/createDepartmentForm" className="btn btn-dark">
          + Create Department
        </Link>
      </div>
    </>
  );
}
export default CreateDepartmentButton;
