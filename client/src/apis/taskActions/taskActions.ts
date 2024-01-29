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

export const createTaskAction = async (params: ITaskDTO): Promise<ITask> => {
  const res = await axios.post(`${LOCAL_ROUTE}/Tasks`, params);
  return res.data;
};

export const editTaskAction = async (params: ITask): Promise<void> => {
  await axios.put(`${LOCAL_ROUTE}/Tasks/${params.id}`, params);
};

export const deleteTaskAction = async (id: string): Promise<void> => {
  await axios.delete(`${LOCAL_ROUTE}/Tasks/${id}`);
};

export const getAllTasks = tryCatch(getAllTasksAction);
export const createTask = tryCatch(createTaskAction);
export const editTask = tryCatch(editTaskAction);
export const deleteTask = tryCatch(deleteTaskAction);
