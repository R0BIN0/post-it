import { memo } from "react";
import Edit from "../../icons/Edit/Edit";
import Delete from "../../icons/Delete/Delete";
import "./Task.css";
import { ITask } from "../../types/ITask";
import { useTask } from "./Task.logic";

const Task = memo((props: ITask) => {
  const logic = useTask(props);

  return (
    <div className="task-container" style={{ border: `3px solid ${props.color}` }}>
      <div className="task-top-container" style={{ background: props.color }}>
        <p>{props.title}</p>
        <div className="task-buttons-container">
          <button className="task-button task-button-edit" onClick={logic.handleEdit}>
            <Edit />
          </button>
          <button className="task-button task-button-delete" onClick={logic.handleDelete}>
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
