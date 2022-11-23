import { createReducer } from '@reduxjs/toolkit';
import {setCurrentCity, loadOffersFromServer, loadOffersNearbyFromServer, setOffersLoadingStatus } from './action';
import { CITIES } from '../const';
import { Offer } from '../types/offers';

type initState = {
  currentCity: string;
  offers: {
    data: Offer[];
    isOffersLoading: boolean;
  };
  offersNearby: {
    data: Offer[];
  };
}

const initialState: initState = {
  currentCity: CITIES[0],
  offers: {
    data: [],
    isOffersLoading: false,
  },
  offersNearby: {
    data: [],
  }
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(loadOffersFromServer, (state, action) => {
      state.offers.data = action.payload;
    })
    .addCase(loadOffersNearbyFromServer, (state, action) => {
      state.offersNearby.data = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.offers.isOffersLoading = action.payload;
    });
});

export {reducer};
