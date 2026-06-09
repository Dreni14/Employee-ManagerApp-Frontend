import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../actions/TaskActions";
import { Link, useParams } from "react-router-dom";

function Tasks({ task }) {
  const dispatch = useDispatch();
  const { departmentId, employeeId } = useParams();

  const onDeleteTaskClick = () => {
    dispatch(deleteTask(departmentId, employeeId, task.id));
  };

  let priorityAsString = "";
  let headerClassname = "";

  if (task.priority === 1) {
    headerClassname = "bg-danger text-white";
    priorityAsString = "HIGH";
  } else if (task.priority === 2) {
    headerClassname = "bg-warning text-dark";
    priorityAsString = "MEDIUM";
  } else {
    headerClassname = "bg-info text-white";
    priorityAsString = "LOW";
  }

  return (
    <div className="card mb-3 shadow-sm border-0">
      <div className={`card-header ${headerClassname}`}>
        <strong>
          ID: {task.id} | {priorityAsString}
        </strong>
      </div>

      <div className="card-body">
        <p className="mb-1">{task.description}</p>
        <p className="text-muted">{task.acceptanceCriteria}</p>

        <div className="d-flex gap-2 mt-3">
          <Link
            to={`/UpdateTask/${departmentId}/${employeeId}/${task.id}`}
            className="btn btn-sm btn-outline-primary"
          >
            Update
          </Link>

          <button
            className="btn btn-sm btn-outline-danger"
            onClick={onDeleteTaskClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
