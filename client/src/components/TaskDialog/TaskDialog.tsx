import DialogBanner from "../DialogBanner/DialogBanner";
import "./TaskDialog.css";
import Input from "../Input/Input";
import { useTaskDialog } from "./TaskDialog.logic";
import Button from "../Button/Button";
import ColorPicker from "../ColorPicker/ColorPicker";
import { inps } from "./TaskDialog.const";
import { v4 as uuidv4 } from "uuid";
import Add from "../../icons/Add/Add";

const AddTaskDialog = () => {
  const logic = useTaskDialog();

  return (
    <div className="taskDialog-container">
      <DialogBanner icon={<Add />} title={"Créer une tâche"} />
      <div className="taskDialog-content">
        <form onSubmit={logic.handleSubmit(logic.onSubmit)}>
          <div className="taskDialog-inputs-container">
            {inps.map((i) => (
              <Input key={uuidv4()} {...i} control={logic.control} errors={logic.errors} />
            ))}
          </div>
          <ColorPicker name="color" control={logic.control} />
          <div className="taskDialog-footer">
            <div className="taskDialog-footer-btns-container">
              <Button type="button" title="Annuler" onClick={logic.handleClose} />
              <Button type="submit" title="Créer" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskDialog;
