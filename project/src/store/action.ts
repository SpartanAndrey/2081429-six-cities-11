import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { AuthorizationStatus, AppRoute } from '../const';
import { UserData } from '../types/user-data';

export const setCurrentCity = createAction('city/change', (city: string) => ({
  payload: city,
}));

export const loadOffersFromServer = createAction<Offer[]>('offers/load');

export const loadSelectedOfferFromServer = createAction<Offer>('offers/loadSelectedOffer');

export const loadOffersNearbyFromServer = createAction<Offer[]>('offersNearby/load');

export const setOffersLoadingStatus = createAction<boolean>('offers/setOffersLoadingStatus');

export const checkAuthorization = createAction<AuthorizationStatus>('server/checkAuthorization');

export const setUserData = createAction<UserData | null>('server/setUserData');

export const redirectToRoute = createAction<AppRoute>('site/redirectToRoute');
