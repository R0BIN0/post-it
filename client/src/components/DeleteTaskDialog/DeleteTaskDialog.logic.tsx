import { useDispatch, useSelector } from "react-redux";
import { IAppDispatch, IRootState } from "../../redux/store";
import { closeDialog } from "../../redux/reducers/dialogReducer";
import { useCallback } from "react";
import { useTaskCache } from "../../hooks/useTaskCache/useTaskCache";

export const useDeleteTaskDialog = () => {
  const dispatchCtx = useDispatch<IAppDispatch>();
  const { data: task } = useSelector((s: IRootState) => s.dialog);
  const { deleteTaskMutation } = useTaskCache();

  const handleClose = useCallback(() => {
    dispatchCtx(closeDialog());
  }, []);

  const handleSubmit = useCallback(() => {
    deleteTaskMutation.mutate(task.id);
    handleClose();
  }, [task.id]);

  return { handleClose, handleSubmit, title: task?.title ?? "" };
};
