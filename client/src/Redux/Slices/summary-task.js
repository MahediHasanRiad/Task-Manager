import { createSlice } from "@reduxjs/toolkit";

const summarySlice = createSlice({
    name: "TotalCount",

    initialState: {
        value: []
    },

    reducers: {
        count: (state, action)=> {
            state.value = action.payload
        }
    }
})

export default summarySlice.reducer
export const {count} = summarySlice.actions