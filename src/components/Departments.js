import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDepartments } from "../actions/departmentActions";
import CreateDepartmentButton from "./Departments/CreateDepartmentButton";
import Department from "./Departments/Department";

function Departments() {
  const dispatch = useDispatch();

  const departments = useSelector(
    (state) => state.departmentReducerContent.departments || [],
  );

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getDepartments());
  }, [dispatch]);

  // Filter për search
  const filteredDepartments = departments.filter((dep) =>
    dep.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container mt-4">
      {/* Header + Search */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Departments</h3>

        <input
          type="text"
          className="form-control w-25"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Button */}
      <CreateDepartmentButton />

      {/* Content */}
      {filteredDepartments.length === 0 ? (
        <div className="text-center mt-5">
          <h5 className="text-muted">No departments found</h5>
        </div>
      ) : (
        <div className="row mt-3">
          {filteredDepartments.map((dep) => (
            <Department key={dep.id} department={dep} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Departments;
