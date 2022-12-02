import { State } from '../types/state';

export const getOffers = (state: State) => state.offers.data;

export const getSelectedOffer = (state: State) => state.offers.selectedOffer;

export const getOffersNearby = (state: State) => state.offersNearby.data;

export const getReviews = (state: State) => state.reviews.data;

export const getCurrentCity = (state: State) => state.currentCity;

export const getOffersLoadingStatus = (state: State) => state.offers.isOffersLoading;

export const getAuthorizationStatus = (state: State) => state.userData.authStatus;

export const getUserData = (state: State) => state.userData.user;

