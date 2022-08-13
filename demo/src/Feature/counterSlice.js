import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  user: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
   
    changeFirstName: (state, action) => {
      state.first_name = action.payload;
    },
    changeSecondName: (state, action) => {
      state.second_name = action.payload;
    },
    handleAddName: (state) => {
      state.user.push({
        first_name: state.first_name,
        second_name: state.second_name,
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeFirstName,
  changeSecondName,
  handleAddName,
} = counterSlice.actions;

export default counterSlice.reducer;
