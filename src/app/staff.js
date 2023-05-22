import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    staffDetails: [],
    error: '',
    selectedStaff: {}
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

export const fetchStaff = createAsyncThunk('staff/fetchStaff', async () => {
    const token = await login();
    return await axios
    .get('https://genhive.onrender.com/staff', {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    })
    .then((response) =>  {
        // console.log(response.data.data);
        return response.data.data.map((user) => user)
    })
})


export const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        setSelectedStaff: (state, action) => {
           const {id, firstName, lastName, department, email, gender, location} = action.payload;
           state.selectedStaff = {}
           state.selectedStaff = {
                ...state.selectedStaff,
                id, firstName, lastName, department, email, gender, location
           }
          //  console.log(state.selectedStaff);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStaff.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchStaff.fulfilled, (state, action) => {
            state.loading = false
            state.staffDetails = [...action.payload]
            console.log(state.staffDetails);
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