import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/userSlice";
import movieReducer from "../store/movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});

export default appStore;
export type RootState = ReturnType<typeof appStore.getState>;
