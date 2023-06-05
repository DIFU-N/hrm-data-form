import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const initialState = {
    loading: false,
    staffDetails: [],
    error: '',
    selectedStaff: {},
}

export const login = async () => {
    const loginData = {
      staffId: 15522,
      password: "hussein",
      adminPassword: "123",
      // fcmToken: 'cAK4WtO9pZk:APA91bH5ddGFcRExO3lrKv6f_PwS7SK5jNzi92vlbfT9IF5EoZ-qN6zI9sPQWNYG5hI-1dUk-WjZqX7K22cG7Y2C0OZ9r7zv_LiBB3qHZW4k2DQa0aDfMn0OaR8iCmX2aWb4p5p86d1r',
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

// const staff = useSelector((state) => state.staff.selectedStaff)
export const updateStaff = createAsyncThunk('staff/updateStaff', async (data, thunkAPI) => {
  const {getState} = thunkAPI;
  const state = getState();
  const token = await login();
  const staff = state.staff.selectedStaff;
  const post = { ...staff, ...data }
  console.log(staff);
  const url = `https://genhive.onrender.com/staff/${staff.id}`;
  // setPost({...post, ...data})
  return await axios.put(url, post, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('Update successful:', response);
    })
    .catch(error => {
      console.error('Update failed:', error);
    });
})



export const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        setSelectedStaff: (state, action) => {
           const {id, firstName, lastName, middleName, departmentId, email, gender, geoLocationId, workLocationId, dob, phone1, phone2, address, cugLine, nationality, employmentDate, updatedAt, salary, catergory, stateOfOrigin, role, postionId, employmentStatus, maritalStatus, isConfirmed, createdAt, CUGLine, staffId, justification} = action.payload;
           state.selectedStaff = {}
           state.selectedStaff = {
                ...state.selectedStaff,
                // id, firstName, lastName, middleName, email, gender, nationality, phone1
                id, firstName, middleName, lastName, departmentId, email, gender, geoLocationId, workLocationId, dob, phone1, phone2, address, cugLine, nationality, employmentDate, updatedAt, salary, catergory, stateOfOrigin, role, postionId, employmentStatus, maritalStatus, isConfirmed, createdAt, CUGLine, staffId, justification
           }
           console.log(state.selectedStaff);
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