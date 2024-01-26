/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDialogs } from "../../types/IDialogs";

const initialState: {
  isOpen: IDialogs | undefined;
  data?: any;
} = {
  isOpen: undefined,
  data: undefined,
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState: initialState,
  reducers: {
    setDialog(state, action: PayloadAction<Pick<typeof initialState, "isOpen" | "data">>) {
      Object.assign(state, action.payload);
    },
    closeDialog(state) {
      state.isOpen = undefined;
      state.data = undefined;
    },
  },
});

export const { setDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
