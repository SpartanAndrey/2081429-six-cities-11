import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';

export const setCurrentCity = createAction('city/change', (city: string) => ({
  payload: city,
}));

export const loadOffersFromServer = createAction<Offer[]>('offers/load');

export const loadOffersNearbyFromServer = createAction<Offer[]>('offersNearby/load');

export const setOffersLoadingStatus = createAction<boolean>('offers/setOffersLoadingStatus');
