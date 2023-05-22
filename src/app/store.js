import { configureStore } from "@reduxjs/toolkit";
import {staffSlice} from "./staff";
import {departmentSlice} from "./department";


const store = configureStore({
    reducer: {
        staff: staffSlice.reducer,
        department: departmentSlice.reducer,
    }
})

export default store;