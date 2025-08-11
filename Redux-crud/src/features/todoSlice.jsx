import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [{ id: 1, title: "learn Redux", status: true }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.push({
        id: action.payload,
        title: action.payload,
        status: false,
      });
    },
    remove: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    update: (state, action) => {
      const { index, title, status } = action.payload;
      state.value[index] = { title, status };
    },
  },
});

export const { add, remove, update } = todoSlice.actions;
export default todoSlice.reducer;
