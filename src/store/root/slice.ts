import { createSlice } from "@reduxjs/toolkit";
import { rootInitialState } from "./initialState";

export const rootSlice = createSlice({
  name: "root",
  initialState: rootInitialState,
  reducers: {
    //
  },
});
