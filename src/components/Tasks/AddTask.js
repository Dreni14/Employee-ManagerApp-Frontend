import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../../actions/TaskActions";

function AddTask() {
  const { departmentId, employeeId } = useParams();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errorReducerContent);

  const [taskDate, setTaskDate] = useState({
    description: "",
    acceptanceCriteria: "",
    status: "INPUT QUEUE",
    priority: 0,
  });

  const onChange = (e) => {
    setTaskDate({ ...taskDate, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask(departmentId, employeeId, { ...taskDate }));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h3 className="text-center mb-4">Create New Task</h3>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className={`form-control form-control-lg ${
                errors.description ? "is-invalid" : ""
              }`}
              name="description"
              placeholder="Task description"
              value={taskDate.description}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className={`form-control form-control-lg ${
                errors.acceptanceCriteria ? "is-invalid" : ""
              }`}
              name="acceptanceCriteria"
              placeholder="Acceptance criteria"
              value={taskDate.acceptanceCriteria}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <select
              className={`form-control form-control-lg ${
                errors.priority ? "is-invalid" : ""
              }`}
              name="priority"
              value={taskDate.priority}
              onChange={onChange}
            >
              <option value={0}>Select Priority</option>
              <option value={1}>HIGH</option>
              <option value={2}>MEDIUM</option>
              <option value={3}>LOW</option>
            </select>
          </div>

          <button className="btn btn-dark w-100">Create Task</button>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
