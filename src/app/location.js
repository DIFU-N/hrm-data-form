import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    locationList: [],
    error: '',
    selectedWorkLocation: {}
}

export const login = async () => {
    const loginData = {
      staffId: 15522,
      password: "hussein",
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

export const fetchWorkLocation = createAsyncThunk('locations/fetchWorkLocation', async () => {
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


export const localeSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setSelectedWorkLocation: (state, action) => {
           const {id, firstName, lastName, department, division, email, gender, location} = action.payload;
           state.selectedWorkLocation = {}
           state.selectedWorkLocation = {
                ...state.selectedWorkLocation,
                id, firstName, lastName, department, division, email, gender, location
           }
        //    console.log(state.selectedWorkLocation);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWorkLocation.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchWorkLocation.fulfilled, (state, action) => {
            state.loading = false
            state.locationList = [...action.payload]
            console.log(state.locationList);
            state.error = ''
        })
        builder.addCase(fetchWorkLocation.rejected, (state, action) => {
            state.loading = false
            state.locationList = []
            console.log(action.error.message);
            state.error = action.error.message
        })
    }
});

export default localeSlice.reducer;
export const {setSelectedWorkLocation} = localeSlice.actions;