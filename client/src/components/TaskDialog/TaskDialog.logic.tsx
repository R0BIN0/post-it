import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ITaskDTO } from "../../types/ITask";
import { IColors } from "../../types/IColors";
import { taskSchema } from "../../schemas/Task.schema";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { IAppDispatch } from "../../redux/store";
import { closeDialog } from "../../redux/reducers/dialogReducer";
import { useTaskCache } from "../../hooks/useTaskCache/useTaskCache";

export const useTaskDialog = () => {
  const dispatchCtx = useDispatch<IAppDispatch>();
  const { createTaskMutation } = useTaskCache();

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ITaskDTO>({
    resolver: zodResolver(taskSchema.omit({ id: true })),
    mode: "onSubmit",
    defaultValues: {
      title: "",
      description: "",
      color: IColors.ORANGE,
    },
  });

  const handleClose = useCallback(() => dispatchCtx(closeDialog()), []);

  const onSubmit: SubmitHandler<ITaskDTO> = useCallback((data) => {
    createTaskMutation.mutate(data);
    handleClose();
  }, []);

  return { control, errors, register, handleSubmit, handleClose, onSubmit };
};
