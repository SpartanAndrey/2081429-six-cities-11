import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import {setCurrentCity, setOffers, setCurrentSortType } from './action';
import { CITIES, SortType } from '../const';

const initialState = {
  currentCity: CITIES[0],
  offersList: offers,
  currentSortType: SortType.Default as SortType,
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
    });
});

export {reducer};
