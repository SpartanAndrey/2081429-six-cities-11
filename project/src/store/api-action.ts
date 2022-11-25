import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { Offer } from '../types/offers';
import { loadOffersFromServer, loadOffersNearbyFromServer, setOffersLoadingStatus, checkAuthorization, setUserData, redirectToRoute } from './action';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { AuthData } from '../types/auth-data.js';
import { UserData } from '../types/user-data.js';
import {saveToken, dropToken} from '../services/token';

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }>(
    'data/fetchOffers',
    async (_arg, {dispatch, extra: api}) => {
      dispatch(setOffersLoadingStatus(true));
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      dispatch(setOffersLoadingStatus(false));
      dispatch(loadOffersFromServer(data));
    },
  );

export const fetchOffersNearbyAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }>(
    'data, fetchOffersNearBy',
    async (id, {dispatch, extra: api}) => {
      const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);

      dispatch(loadOffersNearbyFromServer(data));
    }
  );

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }>(
    'user/checkAuth',
    async (_arg, {dispatch, extra: api}) => {
      try {
        const {data} = await api.get<UserData>(APIRoute.Login);
        dispatch(checkAuthorization(AuthorizationStatus.Auth));
        dispatch(setUserData(data));
      } catch {
        dispatch(checkAuthorization(AuthorizationStatus.NoAuth));
      }
    },
  );

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/login',
    async ({login: email, password}, {dispatch, extra: api}) => {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(checkAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserData(data));
      dispatch(redirectToRoute(AppRoute.Main));
    },
  );

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/logout',
    async (_arg, {dispatch, extra: api}) => {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(checkAuthorization(AuthorizationStatus.NoAuth));
    },
  );
