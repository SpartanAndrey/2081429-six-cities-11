import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import {setCurrentCity, setOffers } from './action';
import { CITIES } from '../const';

const initialState = {
  currentCity: CITIES[0],
  offersList: offers,

};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      const { offersList } = action.payload;
      state.offersList = offersList;
    });
});

export {reducer};
