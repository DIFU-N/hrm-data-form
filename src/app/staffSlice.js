import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    staffDetails: [],
    error: ''
}

export const fetchCharacters = createAsyncThunk('staff/fetchCharacters', async () => {
    return await axios
    .get('http://127.0.0.1:5173/src/data/MOCK_DATA.json')
    .then((response) =>  {
        console.log(response.data);
        return response.data.map((user) => user)
    })
})


const staffSlice = createSlice({
    name: 'staff',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            state.loading = false
            state.staffDetails = action.payload
            console.log(action.payload);
            state.error = ''
        })
        builder.addCase(fetchCharacters.rejected, (state, action) => {
            state.loading = false
            state.staffDetails = []
            console.log(action.error.message);
            state.error = action.error.message
        })
    }
});


export default staffSlice.reducer;