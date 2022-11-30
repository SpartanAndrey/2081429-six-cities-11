import { createReducer } from '@reduxjs/toolkit';
import {setCurrentCity, loadOffers, loadSelectedOffer, loadOffersNearby, setOffersLoadingStatus, checkAuthorization, setUserData, loadReviews, addReview } from './action';
import { CITIES, AuthorizationStatus } from '../const';
import { Offer } from '../types/offers';
import { UserData } from '../types/user-data';
import { Review } from '../types/reviews';

type initState = {
  currentCity: string;
  offers: {
    data: Offer[];
    isOffersLoading: boolean;
    selectedOffer?: Offer;
  };
  offersNearby: {
    data: Offer[];
  };
  reviews: {
    data: Review[];
  };
  userData: {
    authStatus: AuthorizationStatus;
    user: UserData | null;
  };
}

const initialState: initState = {
  currentCity: CITIES[0],
  offers: {
    data: [],
    isOffersLoading: false,
  },
  offersNearby: {
    data: [],
  },
  reviews: {
    data: [],
  },
  userData: {
    authStatus: AuthorizationStatus.Unknown,
    user: null,
  }
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers.data = action.payload;
    })
    .addCase(loadSelectedOffer, (state, action) => {
      state.offers.selectedOffer = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby.data = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews.data = action.payload;
    })
    .addCase(addReview, (state, action) => {
      state.reviews.data = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.offers.isOffersLoading = action.payload;
    })
    .addCase(checkAuthorization, (state, action) => {
      state.userData.authStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData.user = action.payload;
    });
});

export {reducer};
