import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: null,
    movieVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.movies = action.payload;
    },
    addMovieVideo: (state, action) => {
      state.movieVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addMovieVideo } = movieSlice.actions;
export default movieSlice.reducer;
