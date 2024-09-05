import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentWeatherData: {}
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    updateCurrentWeatherData: (state, action) => {
      state.currentWeatherData = action.payload;
    }
  }
});

export const { updateCurrentWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;
