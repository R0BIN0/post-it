import { useMemo } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { IDialogs } from "../../types/IDialogs";
import AddTaskDialog from "../TaskDialog/TaskDialog";
import DeleteTaskDialog from "../DeleteTaskDialog/DeleteTaskDialog";

export const useDialogs = () => {
  const isOpen = useSelector((s: IRootState) => s.dialog.isOpen);

  const dialogs = useMemo(
    () => [
      {
        show: isOpen === IDialogs.TASK,
        component: <AddTaskDialog />,
      },
      {
        show: isOpen === IDialogs.TASK_DELETE,
        component: <DeleteTaskDialog />,
      },
    ],
    [isOpen]
  );

  return { isOpen, dialogs };
};
