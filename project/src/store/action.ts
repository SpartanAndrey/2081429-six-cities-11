import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { AuthorizationStatus, AppRoute } from '../const';
import { UserData } from '../types/user-data';
import { Review } from '../types/reviews';

export const setCurrentCity = createAction('city/change', (city: string) => ({
  payload: city,
}));

export const loadOffers = createAction<Offer[]>('offers/load');

export const loadSelectedOffer = createAction<Offer>('offers/loadSelectedOffer');

export const loadOffersNearby = createAction<Offer[]>('offersNearby/load');

export const loadReviews = createAction<Review[]>('reviews/load');

export const setOffersLoadingStatus = createAction<boolean>('offers/setOffersLoadingStatus');

export const checkAuthorization = createAction<AuthorizationStatus>('server/checkAuthorization');

export const setUserData = createAction<UserData | null>('server/setUserData');

export const redirectToRoute = createAction<AppRoute>('site/redirectToRoute');
