import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0,
  }

  const counterslice = createSlice({
    name: "counter",
    initialState,
    reducers:{
      increment: (state,action) => {
        state.value = action.payload;
      },
      decrement: (state,action) => {
        state.value = action.payload;
      },
      
    }, //actions
  });

  export default counterslice.reducer;

  export const {increment, decrement} = counterslice.actions;