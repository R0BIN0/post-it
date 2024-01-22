import { memo } from "react";
import Edit from "../../icons/Edit/Edit";
import Delete from "../../icons/Delete/Delete";
import "./Task.css";
import { ITask } from "../../types/ITask";

const Task = memo((props: ITask) => {
  return (
    <div className="task-container" style={{ border: `3px solid ${props.color}` }}>
      <div className="task-top-container" style={{ background: props.color }}>
        <p>{props.title}</p>
        <div className="task-buttons-container">
          <button className="task-button task-button-edit">
            <Edit />
          </button>
          <button className="task-button task-button-delete">
            <Delete />
          </button>
        </div>
      </div>
      <div className="task-content-container">
        <p>{props.description}</p>
      </div>
    </div>
  );
});

export default Task;
