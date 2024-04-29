import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  SeriesDetails,
  SeriesResponse,
} from "../../types/seriesTypes";

export const apiKey = "cb67e4fae11db3c001b9484fbf41491c";

export const seriesApi = createApi({
  reducerPath: "seriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getSeries: builder.query<SeriesResponse, number>({
      query: (page) =>
        `tv/popular?api_key=${apiKey}&page=${page}&language=es-ES`,
    }),
    getSeriesById: builder.query<SeriesDetails, { id: string }>({
      query: ({ id }) => `tv/${id}?api_key=${apiKey}&language=es-ES`,
    }),
    getSeriesTop: builder.query<SeriesResponse, number>({
      query: (page) =>
        `tv/top_rated?api_key=${apiKey}&page=${page}&language=es-ES`,
    }),
    searchSeries: builder.query<SeriesResponse, string>({
      query: (title: "") =>
        `search/tv?api_key=${apiKey}&query=${title}&language=es-ES`,
    }),
  }),
});

export const {
  useGetSeriesQuery,
  useGetSeriesByIdQuery,
  useGetSeriesTopQuery,
  useSearchSeriesQuery,
} = seriesApi;
