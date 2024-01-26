/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldErrors } from "react-hook-form";

export type IInputProps = {
  name: string;
  placeholder: string;
  control: Control<any, any>;
  errors: FieldErrors;
};
