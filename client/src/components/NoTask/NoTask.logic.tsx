import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { IAppDispatch } from "../../redux/store";
import { setDialog } from "../../redux/reducers/dialogReducer";
import { IDialogs } from "../../types/IDialogs";

export const useNoTask = () => {
  const dispatchCtx = useDispatch<IAppDispatch>();

  const handleCreateTask = useCallback(() => {
    dispatchCtx(setDialog({ isOpen: IDialogs.TASK }));
  }, []);

  return { handleCreateTask };
};
