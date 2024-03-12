

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loading: false,
  error: null
};

 const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  
fetchUsersStart(state) {
    state.loading = true;
    state.error = null;
  },
  fetchUsersSuccess(state, action) {
    console.log('fetchUsersSuccess dispatched');
    state.loading = false;
    state.users = action.payload;
  },
  fetchUsersFailure(state, action) {
    console.log('fetchUsersFailure dispatched');
    state.loading = false;
    state.error = action.payload;
  }
  
  }
});

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } = userSlice.actions;

export default userSlice.reducer;
