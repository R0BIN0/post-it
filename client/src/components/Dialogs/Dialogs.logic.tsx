import { useMemo } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { IDialogs } from "../../types/IDialogs";
import AddTaskDialog from "../TaskDialog/TaskDialog";

export const useDialogs = () => {
  const isOpen = useSelector((s: IRootState) => s.dialog.isOpen);

  const dialogs = useMemo(
    () => [
      {
        show: isOpen === IDialogs.TASK,
        component: <AddTaskDialog />,
      },
    ],
    [isOpen]
  );

  return { isOpen, dialogs };
};
