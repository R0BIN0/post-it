import { useTaskCache } from "../../hooks/useTaskCache/useTaskCache";

export const useTaskContainer = () => {
  const { queryTask } = useTaskCache();

  return { isLoading: queryTask.isLoading, tasks: queryTask.data ?? [] };
};
