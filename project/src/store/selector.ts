import { State } from '../types/state';

export const getOffersList = (state: State) => state.serverOffers;

export const getCurrentCity = (state: State) => state.currentCity;

export const getCurrentSortType = (state: State) => state.currentSortType;

export const getOffersLoadingStatus = (state: State) => state.isOffersLoading;

