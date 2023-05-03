import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit";

export interface IDateState {
    year: string,
    month: string,
    day: string,
}

const initialState : IDateState = {
    year: '',
    month: '',
    day: '',
}

export const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        allDate: (state, action: PayloadAction<IDateState>) => {
            let date = new Date(`${action.payload.year}-${action.payload.month}-${action.payload.day}`)
            date.setMonth(new Date().getMonth() - date.getMonth())
            date.setDate(new Date().getDate() - date.getDate())
            date.setFullYear(new Date().getFullYear() - date.getFullYear())
            state.year = String(date.getFullYear());
            state.month = String(date.getMonth());
            state.day = String(date.getDate());
        }
    }
})

export const {allDate} = dateSlice.actions;
export default dateSlice.reducer;