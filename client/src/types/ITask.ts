import * as z from "zod";
import { taskSchema } from "../schemas/Task.schema";

export type ITask = z.infer<typeof taskSchema>;
export type ITaskDTO = Omit<ITask, "id">;
