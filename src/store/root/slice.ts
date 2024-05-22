import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { rootInitialState } from "./initialState";
import { IClinic, IDoctor, IDoctorNearby } from "./interfaces";

export const rootSlice = createSlice({
  name: "root",
  initialState: rootInitialState,
  reducers: {
    handleSetDoctors(state, action: PayloadAction<IDoctor[]>) {
      state.doctors = action.payload;
    },
    handleSetDoctorNearby(state, action: PayloadAction<IDoctorNearby[]>) {
      state.doctorsNearby = action.payload;
    },
    handleSetClinics(state, action: PayloadAction<IClinic[]>) {
      state.clinics = action.payload;
    },
    handleSetMenu(state, action: PayloadAction<number>) {
      state.menu = action.payload;
    },
  },
});
