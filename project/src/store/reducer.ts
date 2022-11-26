import { createReducer } from '@reduxjs/toolkit';
import {setCurrentCity, loadOffersFromServer, loadSelectedOfferFromServer, loadOffersNearbyFromServer, setOffersLoadingStatus, checkAuthorization, setUserData, loadReviewsFromServer } from './action';
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
  server: {
    authStatus: AuthorizationStatus;
    userData: UserData | null;
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
  server: {
    authStatus: AuthorizationStatus.Unknown,
    userData: null,
  }
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(loadOffersFromServer, (state, action) => {
      state.offers.data = action.payload;
    })
    .addCase(loadSelectedOfferFromServer, (state, action) => {
      state.offers.selectedOffer = action.payload;
    })
    .addCase(loadOffersNearbyFromServer, (state, action) => {
      state.offersNearby.data = action.payload;
    })
    .addCase(loadReviewsFromServer, (state, action) => {
      state.reviews.data = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.offers.isOffersLoading = action.payload;
    })
    .addCase(checkAuthorization, (state, action) => {
      state.server.authStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.server.userData = action.payload;
    });
});

export {reducer};
