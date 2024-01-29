import axios from "axios";
import { tryCatch } from "../../utils/tryCatch";
import { taskSchema } from "../../schemas/Task.schema";
import { z } from "zod";
import { LOCAL_ROUTE } from "../../const/const";

const getAllTasksAction = z
  .function()
  .returns(z.promise(z.array(taskSchema)))
  .implement(async () => {
    const res = await axios.get(`${LOCAL_ROUTE}/Tasks`);
    return res.data;
  });

const createTaskAction = z
  .function()
  .args(taskSchema.omit({ id: true }))
  .returns(z.promise(taskSchema))
  .implement(async (params) => {
    const res = await axios.post(`${LOCAL_ROUTE}/Tasks`, params);
    return res.data;
  });

const editTaskAction = z
  .function()
  .args(taskSchema)
  .returns(z.promise(z.void()))
  .implement(async (params) => {
    await axios.put(`${LOCAL_ROUTE}/Tasks/${params.id}`, params);
  });

const deleteTaskAction = z
  .function()
  .args(z.string())
  .returns(z.promise(z.void()))
  .implement(async (id) => {
    await axios.delete(`${LOCAL_ROUTE}/Tasks/${id}`);
  });

export const getAllTasks = getAllTasksAction;
export const createTask = tryCatch(createTaskAction);
export const editTask = tryCatch(editTaskAction);
export const deleteTask = tryCatch(deleteTaskAction);
