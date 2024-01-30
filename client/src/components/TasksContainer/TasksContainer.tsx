import Loader from "../Loader/Loader";
import NoTask from "../NoTask/NoTask";
import Task from "../Task/Task";
import "./TaskContainer.css";
import { useTaskContainer } from "./TaskContainer.logic";

const TasksContainer = () => {
  const logic = useTaskContainer();

  if (logic.isLoading) return <Loader message="Chargement des tâches" fullSize />;

  if (!logic.tasks.length) return <NoTask />;

  return (
    <div className="taskContainer-container">
      {logic.tasks.map((t) => (
        <Task key={t.id} {...t} />
      ))}
    </div>
  );
};

export default TasksContainer;
