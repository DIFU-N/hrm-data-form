import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    locationList: [],
    error: '',
    selectedLocation: {}
}

export const login = async () => {
    const loginData = {
      staffId: 1,
      password: "Chukwu",
      adminPassword: "123",
    };
  
    const response = await axios.post('https://genhive.onrender.com/auth/login', loginData, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return response.data.data.token;
  }

export const fetchLocation = createAsyncThunk('locations/fetchLocation', async () => {
    const token = await login();
    return await axios
    .get('https://genhive.onrender.com/location', {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    })
    .then((response) =>  {
        console.log(response.data.data);
        return response.data.data.map((user) => user.name)
    })
})


export const locationSlice = createSlice({
    name: 'location',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchLocation.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchLocation.fulfilled, (state, action) => {
            state.loading = false
            state.locationList = [...action.payload]
            console.log(state.locationList);
            state.error = ''
        })
        builder.addCase(fetchLocation.rejected, (state, action) => {
            state.loading = false
            state.locationList = []
            console.log(action.error.message);
            state.error = action.error.message
        })
    }
});

export default locationSlice.reducer;