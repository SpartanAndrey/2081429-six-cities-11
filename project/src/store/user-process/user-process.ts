import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus } from '../../const';
import { UserProcess } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';

const initialState: UserProcess = {
  userData: {
    authStatus: AuthorizationStatus.Unknown,
    user: null,
  }
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.userData.authStatus = AuthorizationStatus.Auth;
        state.userData.user = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.userData.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.userData.authStatus = AuthorizationStatus.Auth;
        state.userData.user = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.userData.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.userData.authStatus = AuthorizationStatus.NoAuth;
      });
  }
});
