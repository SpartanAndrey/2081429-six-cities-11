import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Offer } from '../../types/offers';
import { Review } from '../../types/reviews';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers.data;

export const getSelectedOffer = (state: State): Offer | undefined => state[NameSpace.Data].offers.selectedOffer;

export const getOffersNearby = (state: State): Offer[] => state[NameSpace.Data].offersNearby.data;

export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews.data;

export const getReviewSendingStatus = (state: State): boolean => state[NameSpace.Data].reviews.sendingStatus;

export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Data].offers.isOffersLoading;

export const getSelectedOfferLoadingStatus = (state: State): boolean => state[NameSpace.Data].offers.isSelectedOffersLoading;

export const getCurrentCity = (state: State): string => state[NameSpace.Data].currentCity;

export const getFavorites = (state: State): Offer[] => state[NameSpace.Data].favorites.data;

export const getFavoritesQuantity = (state: State): number => state[NameSpace.Data].favorites.quantity;

export const getCurrentOffer = (state: State): Offer | undefined => state[NameSpace.Data].offers.currentOffer;
