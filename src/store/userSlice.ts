import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user slice",
  initialState: {
    userName: "",
    token: "",
  },
  reducers: {
    signin: (state, action) => {
      state.userName = action.payload.userName;
      state.token = action.payload.token;
    },
    signout: () => {
      return {
        userName: "",
        token: "",
      };
    },
  },
});

export const { signin, signout } = userSlice.actions;
export default userSlice.reducer;
