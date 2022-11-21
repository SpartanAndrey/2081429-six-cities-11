import { State } from '../types/state';

export const getOffersList = (state: State) => state.offersList;

export const getCurrentCity = (state: State) => state.currentCity;

export const getCurrentSortType = (state: State) => state.currentSortType;
