import { configureStore } from "@reduxjs/toolkit";
import {staffSlice} from "./staff";
import {departmentSlice} from "./department";
import { divisionSlice } from "./division";
import { localeSlice } from "./location";
import { geoLocaleSlice } from "./geoLocation";

const store = configureStore({
    reducer: {
        staff: staffSlice.reducer,
        department: departmentSlice.reducer,
        division: divisionSlice.reducer,
        locale: localeSlice.reducer,
        geolocation: geoLocaleSlice.reducer,
    }
})

export default store;