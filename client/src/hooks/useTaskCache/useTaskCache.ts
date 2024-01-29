import { useMutation, useQuery } from "react-query";
import { createTask, deleteTask, editTask, getAllTasks } from "../../apis/taskActions/taskActions";
import { IQueryKey } from "../../types/IQueryKey";
import { ITask } from "../../types/ITask";
import { queryOptions } from "../../utils/queryOptions";
import { queryClient } from "../../main";
import { useDispatch } from "react-redux";
import { IAppDispatch } from "../../redux/store";
import { setBanner } from "../../redux/reducers/bannerReducer";
import { catchError } from "../../utils/tryCatch";
import { useCallback } from "react";

export const useTaskCache = () => {
  const dispatchCtx = useDispatch<IAppDispatch>();

  const onError = useCallback((err: unknown) => {
    dispatchCtx(setBanner({ txt: catchError(err), success: false }));
  }, []);

  const queryTask = useQuery<ITask[]>([IQueryKey.TASK], getAllTasks, {
    ...queryOptions,
    staleTime: Infinity,
    onError,
  });

  const createTaskMutation = useMutation(createTask, {
    onSuccess: (res: ITask) => {
      queryClient.setQueryData([IQueryKey.TASK], (oldData: ITask[] | undefined) => {
        if (!oldData) return [];
        const newData = [...oldData, res];
        return newData;
      });
      dispatchCtx(setBanner({ txt: "Votre tâche a été correctement créée", success: true }));
    },
    onError,
  });

  const editTaskMutation = useMutation(editTask, {
    onSuccess: (_: undefined, variable: ITask) => {
      queryClient.setQueryData([IQueryKey.TASK], (oldData: ITask[] | undefined) => {
        if (!oldData) return [];
        const newData = oldData.map((item) => (item.id === variable.id ? { ...item, ...variable } : item));
        return newData;
      });
      dispatchCtx(setBanner({ txt: "Votre tâche a bien été mise à jour", success: true }));
    },
    onError,
  });

  const deleteTaskMutation = useMutation(deleteTask, {
    onSuccess: (_: undefined, variable: string) => {
      queryClient.setQueryData([IQueryKey.TASK], (oldData: ITask[] | undefined) => {
        if (!oldData) return [];
        const newData = oldData.filter((item) => item.id !== variable);
        return newData;
      });
      dispatchCtx(setBanner({ txt: "Votre tâche a été correctement supprimée", success: true }));
    },
    onError,
  });

  return { queryTask, createTaskMutation, editTaskMutation, deleteTaskMutation };
};
