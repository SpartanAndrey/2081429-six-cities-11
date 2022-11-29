import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { Offer } from '../types/offers';
import { Review } from '../types/reviews';
import { loadOffers, loadSelectedOffer, loadOffersNearby, loadReviews, setOffersLoadingStatus, checkAuthorization, setUserData, redirectToRoute } from './action';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { AuthData } from '../types/auth-data.js';
import { UserData } from '../types/user-data.js';
import {saveToken, resetToken} from '../services/token';

export const fetchAllOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }>(
    'data/fetchOffers',
    async (_arg, {dispatch, extra: api}) => {
      dispatch(setOffersLoadingStatus(true));
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      dispatch(setOffersLoadingStatus(false));
      dispatch(loadOffers(data));
    },
  );

export const fetchSelectedOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }>(
    'data/fetchSelectedOffer',
    async (id, {dispatch, extra: api}) => {
      try {
        const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
        dispatch(loadSelectedOffer(data));
      } catch {
        dispatch(redirectToRoute(AppRoute.NotFound));
      }
    }
  );

export const fetchOffersNearbyAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }>(
    'data/fetchOffersNearBy',
    async (id, {dispatch, extra: api}) => {
      const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
      dispatch(loadOffersNearby(data));
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
      resetToken();
      dispatch(checkAuthorization(AuthorizationStatus.NoAuth));
    },
  );

export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }>(
    'data/fetchReviews',
    async (id, {dispatch, extra: api}) => {
      const {data} = await api.get<Review[]>(`${APIRoute.Reviews}/${id}`);
      dispatch(loadReviews(data));
    },
  );
