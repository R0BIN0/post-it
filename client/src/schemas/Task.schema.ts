import * as z from "zod";
import { colorSchema } from "./Colors.schema";
import { IColors } from "../types/IColors";

export const taskSchema = z.object({
  id: z.string(),
  title: z.string().max(20, { message: "Le titre est trop long" }).min(1, { message: "Ce champs est requis" }),
  description: z.string().optional(),
  color: colorSchema.default(IColors.ORANGE),
});
