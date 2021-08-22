import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userID: null,
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setUserID: (state, action) => {
      state.userID = action.payload;
    },
  },
});

export const { setUserID } = userAuthSlice.actions;

export default userAuthSlice.reducer;
