import "./TaskContainer.css";
import { useTaskContainer } from "./TaskContainer.logic";

const TasksContainer = () => {
  const logic = useTaskContainer();

  return (
    <div className="taskContainer-container">
      <button onClick={logic.handleSubmit}>add task</button>
    </div>
  );
};

export default TasksContainer;
