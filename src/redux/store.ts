import { configureStore } from "@reduxjs/toolkit";
import moviesReducer, { getMovies, searchMovies } from "./reducers/getMovies";
import { moviesApi } from "./services/movies";
import { seriesApi } from "./services/series";
import seriesReducer, { getSeries, searchSeries } from "./reducers/getSeries";
import themesReducer, { setTheme } from "./reducers/getThemes";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    series: seriesReducer,
    [seriesApi.reducerPath]: seriesApi.reducer,
    themes: themesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(moviesApi.middleware)
      .concat(seriesApi.middleware),
});

export { getSeries, getMovies, searchMovies, searchSeries, setTheme };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
