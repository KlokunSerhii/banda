import { createSlice } from '@reduxjs/toolkit';
import {
  logout,
  login,
  register,
  refreshUser,
  updateAvatar,
} from './operations';

const registerFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const loginFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const updateAvatarFulfilled = (state, { payload }) => {
  state.user.avatarURL = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const logoutFulfilled = state => {
  state.user = { email: null, name: null };
  state.token = null;
  state.isLoggedIn = false;
};

const refreshUserPending = state => {
  state.isRefreshing = true;
};

const refreshUserFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const refreshUserRejected = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: '',
      name: '',
      avatarURL: '',
      bodyParams: {
        height: '',
        currentWeight: '',
        desiredWeight: '',
        birthdate: '',
        blood: '',
        sex: '',
        levelActivity: '',
        dailySportTime: '',
        bmr: '',
        defaultParams: '',
      },
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: {
    [register.fulfilled]: registerFulfilled,
    [login.fulfilled]: loginFulfilled,
    [updateAvatar.fulfilled]: updateAvatarFulfilled,
    [logout.fulfilled]: logoutFulfilled,
    [refreshUser.pending]: refreshUserPending,
    [refreshUser.fulfilled]: refreshUserFulfilled,
    [refreshUser.rejected]: refreshUserRejected,
  },
});

export default authSlice.reducer;
