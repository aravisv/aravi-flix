import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user slice",
  initialState: {
    userName: "",
    displayName: "",
    token: "",
    imageUrl: "",
  },
  reducers: {
    signin: (state, action) => {
      state.userName = action.payload.userName;
      state.token = action.payload.token;
      state.imageUrl = action.payload.imageUrl;
    },
    signout: () => {
      return {
        userName: "",
        displayName: "",
        token: "",
        imageUrl: "",
      };
    },
  },
});

export const { signin, signout } = userSlice.actions;
export default userSlice.reducer;
