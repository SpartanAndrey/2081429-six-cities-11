import { createAction } from '@reduxjs/toolkit';
import { SortType } from '../const';
import { Offer } from '../types/offers';

export const setCurrentCity = createAction('city/change', (city: string) => ({
  payload: city,
}));

export const setOffers = createAction<{offersList: Offer[]}>('offers/fillIn');

export const setCurrentSortType = createAction('offers/sort', (sortType: SortType) => ({
  payload: sortType,
}));
