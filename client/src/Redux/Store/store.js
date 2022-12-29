import { configureStore } from "@reduxjs/toolkit";
import summaryTask from "../Slices/summary-task";
import taskSlice from "../Slices/task-slice";

export default configureStore({
    reducer:{

        Task: taskSlice,
        Count: summaryTask
        
    }
})