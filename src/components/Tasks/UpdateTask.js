import React, { useEffect, useState } from "react";
import { getTask, updateTask } from "../../actions/TaskActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function UpdateTask() {
  const { departmentId, employeeId, taskId } = useParams();
  const dispatch = useDispatch();

  const errors = useSelector((state) => state.errorReducerContent);
  const task = useSelector((state) => state.taskReducerContent.task);

  const [taskData, setTaskData] = useState({
    description: "",
    acceptanceCriteria: "",
    status: "INPUT QUEUE",
    priority: 0,
  });

  useEffect(() => {
    dispatch(getTask(departmentId, employeeId, taskId));
  }, [dispatch, departmentId, employeeId, taskId]);

  useEffect(() => {
    if (task) {
      setTaskData(task);
    }
  }, [task]);

  const onChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTask(departmentId, employeeId, taskId, taskData));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h3 className="text-center mb-4">Update Task</h3>

        <form onSubmit={onSubmit}>
          <input
            className="form-control mb-3"
            name="description"
            value={taskData.description}
            onChange={onChange}
          />

          <input
            className="form-control mb-3"
            name="acceptanceCriteria"
            value={taskData.acceptanceCriteria}
            onChange={onChange}
          />

          <select
            className="form-control mb-3"
            name="priority"
            value={taskData.priority}
            onChange={onChange}
          >
            <option value={0}>Select Priority</option>
            <option value={1}>HIGH</option>
            <option value={2}>MEDIUM</option>
            <option value={3}>LOW</option>
          </select>

          <select
            className="form-control mb-3"
            name="status"
            value={taskData.status}
            onChange={onChange}
          >
            <option>INPUT QUEUE</option>
            <option>IN PROGRES</option>
            <option>DONE</option>
          </select>

          <button className="btn btn-success w-100">Update Task</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateTask;
