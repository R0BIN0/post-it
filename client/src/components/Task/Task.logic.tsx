import { useDispatch } from "react-redux";
import { IAppDispatch } from "../../redux/store";
import { setDialog } from "../../redux/reducers/dialogReducer";
import { IDialogs } from "../../types/IDialogs";
import { ITask } from "../../types/ITask";
import { useCallback } from "react";

export const useTask = (props: ITask) => {
  const dispatchCtx = useDispatch<IAppDispatch>();

  const handleEdit = useCallback(() => {
    dispatchCtx(setDialog({ isOpen: IDialogs.TASK, data: props }));
  }, [props]);

  return { handleEdit };
};
