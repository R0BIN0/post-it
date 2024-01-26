/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */

import { ZodError } from "zod";

const defaultErrorMessage = "Une erreur est survenue";

export const tryCatch = (callback: Function) => async (data?: unknown) => {
  try {
    return await callback(data);
  } catch (err) {
    throw catchError(err);
  }
};

export const catchError = (err: any): string => {
  let error: string = "";
  if (err instanceof ZodError) {
    error = err.errors[0].message;
  } else if (err.response) {
    error = err.response.data.error;
  } else if (err.request) {
    error = defaultErrorMessage;
  } else if (typeof err === "string") {
    error = err;
  } else {
    error = defaultErrorMessage;
  }
  return error || defaultErrorMessage;
};
