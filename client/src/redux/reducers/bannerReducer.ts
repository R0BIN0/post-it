/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState: {
  items: { id: string; txt: string; success: boolean }[];
} = {
  items: [],
};

const bannerSlice = createSlice({
  name: "banner",
  initialState: initialState,
  reducers: {
    setBanner(state, action: PayloadAction<{ txt: string; success: boolean }>) {
      const isExisting = state.items.find((i) => i.txt === action.payload.txt);
      if (isExisting) return state;
      state.items.push({ id: uuidv4(), ...action.payload });
    },
    removeBanner(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});

export const { setBanner, removeBanner } = bannerSlice.actions;
export default bannerSlice.reducer;
