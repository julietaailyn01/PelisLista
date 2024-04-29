import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Themes } from '../../types/themesTypes';


const initialState: Themes = {
    light: true,
}

const themesSlice = createSlice({
    name: 'themes',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<boolean>) => {
            state.light = action.payload;
        }
    }
});

export const { setTheme } = themesSlice.actions;

export default themesSlice.reducer;