import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SeriesState, Series } from "../../types/seriesTypes";

const initialState: SeriesState = {
    genres: [],
    id: 0,
    loading: false,
    series: [] as Series[],
    page: 1,
    total_pages: 1,
};

const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {
    getSeries: (state, action: PayloadAction<Series[]>) => {
      state.series = action.payload;
    },
    searchSeries: (state, action: PayloadAction<Series[]>) => {
      state.series = action.payload;
    }
  },
});

export const { getSeries, searchSeries } = seriesSlice.actions;


export default seriesSlice.reducer;
