import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { changeCity, fillInOffersList } from './action';
import { CITIES } from '../const';

const initialState = {
  city: CITIES[0],
  offersList: offers,

};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillInOffersList, (state, action) => {
      const { offersList } = action.payload;
      state.offersList = offersList;
    });
});

export {reducer};
