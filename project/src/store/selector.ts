import { State } from '../types/state';

export const getOffers = (state: State) => state.offers.data;

export const getOffersNearby = (state: State) => state.offersNearby.data;

export const getCurrentCity = (state: State) => state.currentCity;

export const getOffersLoadingStatus = (state: State) => state.offers.isOffersLoading;

export const getAuthorizationStatus = (state: State) => state.server.authStatus;

export const getUserData = (state: State) => state.server.userData;
