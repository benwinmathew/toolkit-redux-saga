import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        isLoading: false,
        error: null
    }, 
    reducers: {
        getUsersFetch: (state) => {
            state.isLoading = true; 
        },
        getUsersSuccess: (state, action) => {
            state.isLoading = false;
            state.users = action.payload
        },
        getUsersFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
}) 

export const { getUsersFetch, getUsersSuccess, getUsersFailure } = userSlice.actions;
export default userSlice.reducer;