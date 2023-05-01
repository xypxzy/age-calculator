import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export type themeType = 'dark' | 'light';

export interface IThemeState {
    theme: themeType
}

const initialState: IThemeState = {
    theme: 'light'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<themeType>) => {
            state.theme = action.payload
        },

    }
})

export const {setTheme} = themeSlice.actions
export default themeSlice.reducer;
