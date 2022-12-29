import { createSlice } from '@reduxjs/toolkit'

const TaskSlice = createSlice({
    name: "Task",

    initialState: {
        New: [],
        Completed: [],
        Progress: [],
        Cenceled: []
    },

    reducers: {
        setNewTask : (state, action) => {
            state.New = action.payload
        },
        setCompleted : (state, action) => {
            state.Completed = action.payload
        },
        setProgress : (state, action) => {
            state.Progress = action.payload
        }, 
        setCenceled : (state, action) => {
            state.Cenceled = action.payload
        }
    }
})

export default TaskSlice.reducer
export const {setNewTask, setCompleted, setProgress, setCenceled} = TaskSlice.actions