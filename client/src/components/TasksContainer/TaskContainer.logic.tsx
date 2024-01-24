import { useTaskCache } from "../../hooks/useTaskCache/useTaskCache";

export const useTaskContainer = () => {
  const { queryTask } = useTaskCache();

  const handleSubmit = () => {};

  return { isLoading: queryTask.isLoading, handleSubmit };
};
