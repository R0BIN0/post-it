import Task from "../Task/Task";
import "./TaskContainer.css";
import { useTaskContainer } from "./TaskContainer.logic";

const TasksContainer = () => {
  const logic = useTaskContainer();

  return (
    <div className="taskContainer-container">
      {logic.tasks.map((t) => (
        <Task key={t.id} {...t} />
      ))}
    </div>
  );
};

export default TasksContainer;
