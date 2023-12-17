import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from 'redux/operations/auth-operations';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isRefreshing: false,
  authenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.authenticated = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.authenticated = true;
      })
      .addCase(logoutThunk.pending, state => {})
      .addCase(logoutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.authenticated = false;
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => {})
      .addCase(refreshThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.authenticated = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
