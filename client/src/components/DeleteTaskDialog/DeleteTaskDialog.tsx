import DialogBanner from "../DialogBanner/DialogBanner";
import Delete from "../../icons/Delete/Delete";
import Button from "../Button/Button";
import { useDeleteTaskDialog } from "./DeleteTaskDialog.logic";
import "./DeleteDialog.css";

const DeleteTaskDialog = () => {
  const logic = useDeleteTaskDialog();

  return (
    <div className="deleteTaskDialog-container">
      <DialogBanner icon={<Delete />} title={"Supprimer une tâche"} alert />
      <div className="deleteTaskDialog-content">
        <p>
          Étes-vous sûr de vouloir supprimer votre tâche <strong>{logic.title}</strong> ? Elle sera définitivement supprimée
        </p>
        <div className="deleteTaskDialog-footer">
          <div className="deleteTaskDialog-footer-btns-container">
            <Button type="button" title="Annuler" onClick={logic.handleClose} />
            <Button type="button" title={"Supprimer"} onClick={logic.handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskDialog;
