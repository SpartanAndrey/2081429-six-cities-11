import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { Favorite, Offer } from '../types/offers';
import { Review } from '../types/reviews';
import { APIRoute } from '../const';
import { AuthData } from '../types/auth-data.js';
import { UserData } from '../types/user-data.js';
import {saveToken, resetToken} from '../services/token';
import { NewReview } from '../types/review-post.js';
import { setOfferStatus } from './data-process/data-process';

export const fetchAllOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }>(
    'data/fetchOffers',
    async (_arg, {extra: api}) => {
      const {data} = await api.get<Offer[]>(APIRoute.Offers);
      return data;
    },
  );

export const fetchSelectedOfferAction = createAsyncThunk<Offer, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }>(
    'data/fetchSelectedOffer',
    async (id, {extra: api}) => {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      return data;
    }
  );

export const fetchOffersNearbyAction = createAsyncThunk<Offer[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }>(
    'data/fetchOffersNearBy',
    async (id, {extra: api}) => {
      const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
      return data;
    }
  );

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }>(
    'user/checkAuth',
    async (_arg, {extra: api}) => {
      const {data} = await api.get<UserData>(APIRoute.Login);
      return data;
    },
  );

export const loginAction = createAsyncThunk<UserData, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/login',
    async ({login: email, password}, {extra: api}) => {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      return data;
    },
  );

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }>(
    'user/logout',
    async (_arg, {extra: api}) => {
      await api.delete(APIRoute.Logout);
      resetToken();
    },
  );

export const fetchReviewsAction = createAsyncThunk<Review[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }>(
    'data/fetchReviews',
    async (id, {extra: api}) => {
      const {data} = await api.get<Review[]>(`${APIRoute.Reviews}/${id}`);
      return data;
    },
  );

export const postReviewAction = createAsyncThunk<Review[], NewReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }>(
    'data/sendReview',
    async ({id, comment, rating}, {extra: api}) => {
      const {data} = await api.post<Review[]>(`${APIRoute.Reviews}/${id}`, {comment, rating});
      return data;
    },
  );

export const fetchFavoriteOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  }>(
    'data/fetchFavoriteOffers',
    async (_arg, {extra: api}) => {
      const {data} = await api.get<Offer[]>(APIRoute.Favorites);
      return data;
    },
  );

export const changeFavoriteStatusAction = createAsyncThunk<void, Favorite, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/setFavoriteStatus',
  async ({id, status}, {dispatch, extra: api}) => {
    await api.post<void>(`${APIRoute.Favorites}/${id}/${status}`);
    try {
      dispatch(setOfferStatus({id, status}));
    } catch {
      throw(Error);
    }
  }
);
