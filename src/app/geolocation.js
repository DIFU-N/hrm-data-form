import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    locationList: [],
    error: '',
    selectedGeoLocation: {}
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

export const fetchGeoLocation = createAsyncThunk('locations/fetchGeoLocation', async () => {
    const token = await login();
    // return await axios
    // .get('https://genhive.onrender.com/geoLocation', {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //     'Authorization': `Bearer ${token}`
    //   }
    // })
    // .then((response) =>  {
    //     console.log(response.data.data);
    //     return response.data.data.map((user) => user.name)
    // })
    return await axios
    .get('https://genhive.onrender.com/geoLocation', {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    })
    .then((response) =>  {
      return response.data.data.map((location) => ({
        id: location.id,
        name: location.name,
        createdAt: location.createdAt,
        updatedAt: location.updatedAt,
      }));
    });
})


export const geoLocaleSlice = createSlice({
    name: 'geolocation',
    initialState,
    reducers: {
      setSelectedGeoLocation: (state, action) => {
        const { id, name, createdAt, updatedAt } = action.payload;
        state.selectedGeoLocation = {}
        state.selectedGeoLocation = {
          id,
          name,
          createdAt,
          updatedAt,
        };
      }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGeoLocation.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchGeoLocation.fulfilled, (state, action) => {
            state.loading = false
            state.locationList = action.payload
            console.log(state.locationList);
            state.error = ''
        })
        builder.addCase(fetchGeoLocation.rejected, (state, action) => {
            state.loading = false
            state.locationList = []
            console.log(action.error.message);
            state.error = action.error.message
        })
    }
});

export default geoLocaleSlice.reducer;
export const {setSelectedGeoLocation} = geoLocaleSlice.actions;