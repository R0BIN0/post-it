import { memo } from "react";
import Button from "../Button/Button";
import { useTaskNav } from "./TaskNav.logic";
import "./TaskNav.css";

const TaskNav = memo(() => {
  const logic = useTaskNav();

  return (
    <div className="taskNav-container">
      <p className="taskNav-number">Nombre de Tâches 1</p>
      <Button title={"Créer une tâche"} onClick={logic.handleCreateTask} />
    </div>
  );
});

export default TaskNav;
