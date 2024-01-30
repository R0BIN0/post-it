import Information from "../../icons/Information/Information";
import { useNoTask } from "./NoTask.logic";
import "./NoTask.css";
import Button from "../Button/Button";

const NoTask = () => {
  const logic = useNoTask();

  return (
    <div className="noTask-container">
      <Information />
      <p>Vous n'avez pas encore de tâche. Vous pouvez en créer une directement en cliquant juste en dessous</p>
      <Button type="button" title={"Créer une tâche"} onClick={logic.handleCreateTask} />
    </div>
  );
};

export default NoTask;
