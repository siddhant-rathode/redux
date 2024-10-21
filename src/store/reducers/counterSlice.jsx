import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0,
  }

  const counterslice = createSlice({
    name: "counter",
    initialState,
    reducers:{},
  });

  export default counterslice.reducer;

  export const {} = counterslice.actions;