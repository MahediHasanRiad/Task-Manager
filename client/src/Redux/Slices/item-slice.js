import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: "Item",

    initialState: {
        Edit: [],
        Delete: []
    },

    reducers: {
        Delete: (state, action) => {
            state.Delete.splice(action.payload, 1)
        }
    }
})

export default itemSlice.reducer
export const {Delete} = itemSlice.actions