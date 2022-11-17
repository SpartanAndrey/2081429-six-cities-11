import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';

export const changeCity = createAction('city/change', (city: string) => ({
  payload: city,
}));

export const fillInOffersList = createAction<{offersList: Offer[]}>('offers/fillIn');
