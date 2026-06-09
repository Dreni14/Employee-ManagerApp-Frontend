import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeeList } from "../actions/employeeActions";
import Employee from "../components/Employees/Employee";
import { Link } from "react-router-dom";

function EmployeeList() {
  const { departmentId } = useParams();
  const dispatch = useDispatch();

  const employeeList = useSelector(
    (state) => state.employeeReducerContent.employees,
  );

  useEffect(() => {
    dispatch(getEmployeeList(departmentId));
  }, [dispatch, departmentId]);

  return (
    <div className="container mt-4">
      {/* HEADER */}
      <div className="card shadow-sm border-0 mb-3">
        <div className="card-body d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Employees of Department {departmentId}</h4>

          <Link
            to={`/createEmployeeForm/${departmentId}`}
            className="btn btn-dark"
          >
            + Create Employee
          </Link>
        </div>
      </div>

      {/* LIST */}
      <div>
        {Array.isArray(employeeList) &&
          employeeList.map((employee) => (
            <Employee
              departmentId={departmentId}
              key={employee.id}
              employee={employee}
            />
          ))}
      </div>
    </div>
  );
}

export default EmployeeList;
