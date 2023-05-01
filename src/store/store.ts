import {configureStore} from "@reduxjs/toolkit";
import themeReducer from './theme/themeSlice.ts'
export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
    devTools: true,
})