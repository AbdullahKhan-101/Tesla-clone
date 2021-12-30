import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Modal S", "Modal 3", "Modal X", "Modal Y"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;
export default carSlice.reducer;
