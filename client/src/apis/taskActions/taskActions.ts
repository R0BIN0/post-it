import axios from "axios";
import { ITask, ITaskDTO } from "../../types/ITask";
import { tryCatch } from "../../utils/tryCatch";
import { taskSchema } from "../../schemas/Task.schema";
import { z } from "zod";
import { LOCAL_ROUTE } from "../../const/const";

export const getAllTasksAction = async (): Promise<ITask[]> => {
  const res = await axios.get(`${LOCAL_ROUTE}/Tasks`);
  return z.array(taskSchema).parse(res.data);
};

export const createTaskAction = async (params: { task: ITaskDTO }): Promise<ITask> => {
  const res = await axios.post(`${LOCAL_ROUTE}/Tasks`, params.task);
  return taskSchema.parse(res.data);
};

export const getAllTasks = tryCatch(getAllTasksAction);
export const createTask = tryCatch(createTaskAction);
