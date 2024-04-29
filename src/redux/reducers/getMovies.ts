import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movies, MovieState } from "../../types/moviesTypes";

const initialState: MovieState = {
    genres: [],
    id: 0,
    loading: false,
    result: [] as Movies[],
    page: 1,
    total_pages: 1,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMovies: (state, action: PayloadAction<Movies[]>) => {
      state.result = action.payload;
    },
    searchMovies: (state, action: PayloadAction<Movies[]>) => {
      state.result = action.payload;
    }
  },
});
export const { getMovies, searchMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
