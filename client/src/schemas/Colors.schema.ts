import * as z from "zod";
import { IColors } from "../types/IColors";

export const ColorSchema = z.nativeEnum(IColors);
