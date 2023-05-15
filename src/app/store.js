import { configureStore } from "@reduxjs/toolkit";
import {staffSlice} from "./staff";


const store = configureStore({
    reducer: {
        staff: staffSlice.reducer,
    }
})

export default store;