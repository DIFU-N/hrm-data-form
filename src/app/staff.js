import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    staffDetails: [],
    error: '',
    selectedStaff: {}
}

export const fetchStaff = createAsyncThunk('staff/fetchStaff', async () => {
    return await axios
    .get('http://127.0.0.1:5173/src/data/MOCK_DATA.json')
    .then((response) =>  {
        // console.log(response.data);
        return response.data.map((user) => user)
    })
})


export const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        setSelectedStaff: (state, action) => {
           const {id, first_name, last_name, department, email, gender, location} = action.payload;
           state.selectedStaff = {}
           state.selectedStaff = {
                id, first_name, last_name, department, email, gender, location
           }
        //    console.log(state.selectedStaff);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStaff.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchStaff.fulfilled, (state, action) => {
            state.loading = false
            state.staffDetails = [...action.payload]
            // console.log(state.staffDetails);
            state.error = ''
        })
        builder.addCase(fetchStaff.rejected, (state, action) => {
            state.loading = false
            state.staffDetails = []
            console.log(action.error.message);
            state.error = action.error.message
        })
    }
});

export default staffSlice.reducer;
export const {setSelectedStaff} = staffSlice.actions;