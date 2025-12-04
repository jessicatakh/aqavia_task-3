import { configureStore, createSlice } from "@reduxjs/toolkit";

let savedValue = localStorage.getItem("data") || "";
   const dataSlice = createSlice({
  name: "data",
  initialState: {
    value: savedValue,
  },
  reducers: {
    updateValue: (state, action) => {
          state.value = action.payload;
      localStorage.setItem("data", action.payload);
    },
  },
});

export const { updateValue } = dataSlice.actions;
    const store = configureStore({
  reducer: {
     data: dataSlice.reducer,
  },
});

export default store;
