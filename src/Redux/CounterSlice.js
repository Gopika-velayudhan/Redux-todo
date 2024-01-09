// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addby : (state,action ) => {
         state.value +=10;
    }
  },
});

export const { increment, decrement,addby } = counterSlice.actions;
export default counterSlice.reducer;
