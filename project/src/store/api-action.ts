import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { Offer } from '../types/offers';
import { loadOffersFromServer, loadOffersNearbyFromServer, setOffersLoadingStatus } from './action';
import { APIRoute } from '../const';

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
