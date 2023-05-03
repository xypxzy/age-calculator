import {configureStore} from "@reduxjs/toolkit";
import themeReducer from './theme/themeSlice.ts'
import dateReducer from "./date/dateSlice.ts";
export const store = configureStore({
    reducer: {
        theme: themeReducer,
        date: dateReducer,
    },
    devTools: true,
})