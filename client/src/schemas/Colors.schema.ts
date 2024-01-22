import * as z from "zod";
import { IColors } from "../types/IColors";

export const colorSchema = z.nativeEnum(IColors);
