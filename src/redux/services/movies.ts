import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MoviesDetails, MoviesResponse } from "../../types/moviesTypes";

export const apiKey = process.env.REACT_APP_API_KEY;

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesResponse, number>({
      query: (page) =>
        `movie/popular?api_key=${apiKey}&page=${page}&language=es-ES`,
    }),
    getMoviesById: builder.query<MoviesDetails, { id: string }>({
      query: ({ id }) => `movie/${id}?api_key=${apiKey}&language=es-ES`,
    }),
    getMoviesTop: builder.query<MoviesResponse, number>({
      query: (page) =>
        `movie/top_rated?api_key=${apiKey}&page=${page}&language=es-ES`,
    }),
    searchMovies: builder.query<MoviesResponse, string>({
      query: (title: "") =>
        `search/movie?api_key=${apiKey}&query=${title}&language=es-ES`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMoviesByIdQuery,
  useGetMoviesTopQuery,
  useSearchMoviesQuery,
} = moviesApi;
