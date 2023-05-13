import { configureStore } from "@reduxjs/toolkit";
import staffReducer from "./staffSlice";

const store = configureStore({
    reducer: {
        staff: staffReducer,
    }
})

export default store;