import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';

export const setCurrentCity = createAction('city/change', (city: string) => ({
  payload: city,
}));

export const setOffers = createAction<{offersList: Offer[]}>('offers/fillIn');
