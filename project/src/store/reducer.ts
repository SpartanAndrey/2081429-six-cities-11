import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import {setCurrentCity, setOffers, setCurrentSortType, loadOffersFromServer, setOffersLoadingStatus } from './action';
import { CITIES, SortType } from '../const';
import { Offer } from '../types/offers';

type initState = {
  currentCity: string;
  offersList: Offer[];
  serverOffers: Offer[];
  currentSortType: SortType;
  isOffersLoading: boolean;
}

const initialState: initState = {
  currentCity: CITIES[0],
  offersList: offers,
  serverOffers: [],
  currentSortType: SortType.Default,
  isOffersLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      const { offersList } = action.payload;
      state.offersList = offersList;
    })
    .addCase(setCurrentSortType, (state, action) => {
      state.currentSortType = action.payload;
    })
    .addCase(loadOffersFromServer, (state, action) => {
      state.serverOffers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    });
});

export {reducer};
