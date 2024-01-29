import { useMutation, useQuery } from "react-query";
import { createTask, deleteTask, editTask, getAllTasks } from "../../apis/taskActions/taskActions";
import { IQueryKey } from "../../types/IQueryKey";
import { ITask } from "../../types/ITask";
import { queryOptions } from "../../utils/queryOptions";
import { queryClient } from "../../main";

export const useTaskCache = () => {
  const queryTask = useQuery<ITask[]>([IQueryKey.TASK], getAllTasks, {
    ...queryOptions,
    staleTime: Infinity,
  });

  const createTaskMutation = useMutation(createTask, {
    onSuccess: (res: ITask) => {
      queryClient.setQueryData([IQueryKey.TASK], (oldData: ITask[] | undefined) => {
        if (!oldData) return [];
        const newData = [...oldData, res];
        return newData;
      });
    },
  });

  const editTaskMutation = useMutation(editTask, {
    onSuccess: (_: undefined, variable: ITask) => {
      queryClient.setQueryData([IQueryKey.TASK], (oldData: ITask[] | undefined) => {
        if (!oldData) return [];
        const newData = oldData.map((item) => (item.id === variable.id ? { ...item, ...variable } : item));
        return newData;
      });
    },
  });

  const deleteTaskMutation = useMutation(deleteTask, {
    onSuccess: (_: undefined, variable: string) => {
      queryClient.setQueryData([IQueryKey.TASK], (oldData: ITask[] | undefined) => {
        if (!oldData) return [];
        const newData = oldData.filter((item) => item.id !== variable);
        return newData;
      });
    },
  });

  return { queryTask, createTaskMutation, editTaskMutation, deleteTaskMutation };
};
