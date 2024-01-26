import { useDispatch } from "react-redux";
import { IAppDispatch } from "../../redux/store";
import { setDialog } from "../../redux/reducers/dialogReducer";
import { IDialogs } from "../../types/IDialogs";
import { useTaskCache } from "../../hooks/useTaskCache/useTaskCache";
import { useCallback } from "react";

export const useTaskNav = () => {
  const dispatchCtx = useDispatch<IAppDispatch>();

  const { queryTask } = useTaskCache();

  const handleCreateTask = useCallback(() => {
    dispatchCtx(setDialog({ isOpen: IDialogs.TASK, data: undefined }));
  }, []);

  return { handleCreateTask, tasks: queryTask.data ?? [] };
};
