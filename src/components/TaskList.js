import React, { useEffect } from "react";
import { getTasks } from "../actions/TaskActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Tasks from "./Tasks/Tasks";

function TaskList() {
  const { departmentId, employeeId } = useParams();
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.taskReducerContent.tasks || []);

  useEffect(() => {
    dispatch(getTasks(departmentId, employeeId));
  }, [dispatch, departmentId, employeeId]);

  const inputQueue = tasks.filter((t) => t.status === "INPUT QUEUE");
  const inProgres = tasks.filter((t) => t.status === "IN PROGRES");
  const done = tasks.filter((t) => t.status === "DONE");

  const cardBodyStyle = {
    maxHeight: "550px",
    overflowY: "auto",
    backgroundColor: "#f9fafb",
  };

  const columnHeaderStyle = {
    backgroundColor: "#f3f4f6",
    color: "#111827",
    fontWeight: "600",
    textAlign: "center",
    borderBottom: "1px solid #e5e7eb",
  };

  return (
    <div className="container mt-4">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 style={{ color: "#111827", fontWeight: "600" }}>Task Board</h3>

        <Link
          to={`/AddTask/${departmentId}/${employeeId}`}
          className="btn btn-outline-dark"
        >
          + Create Task
        </Link>
      </div>

      {/* BOARD */}
      <div className="row g-3">
        {/* INPUT */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-header" style={columnHeaderStyle}>
              INPUT QUEUE ({inputQueue.length})
            </div>

            <div className="card-body p-2" style={cardBodyStyle}>
              {inputQueue.length === 0 ? (
                <p className="text-center text-muted mt-3">No tasks</p>
              ) : (
                inputQueue.map((t) => <Tasks key={t.id} task={t} />)
              )}
            </div>
          </div>
        </div>

        {/* IN PROGRESS */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-header" style={columnHeaderStyle}>
              IN PROGRESS ({inProgres.length})
            </div>

            <div className="card-body p-2" style={cardBodyStyle}>
              {inProgres.length === 0 ? (
                <p className="text-center text-muted mt-3">No tasks</p>
              ) : (
                inProgres.map((t) => <Tasks key={t.id} task={t} />)
              )}
            </div>
          </div>
        </div>

        {/* DONE */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-header" style={columnHeaderStyle}>
              DONE ({done.length})
            </div>

            <div className="card-body p-2" style={cardBodyStyle}>
              {done.length === 0 ? (
                <p className="text-center text-muted mt-3">No tasks</p>
              ) : (
                done.map((t) => <Tasks key={t.id} task={t} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
