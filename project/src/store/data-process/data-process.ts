import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITIES, NameSpace } from '../../const';
import { DataProcess } from '../../types/state';
import { Offer } from '../../types/offers';
import { fetchAllOffersAction, fetchSelectedOfferAction, fetchOffersNearbyAction, fetchReviewsAction, postReviewAction, fetchFavoriteOffersAction } from '../api-action';

const initialState: DataProcess = {
  currentCity: CITIES[0],
  favorites: {
    data: [],
    quantity: 0,
  },
  offers: {
    data: [],
    isOffersLoading: false,
    isSelectedOffersLoading: false,
  },
  offersNearby: {
    data: [],
  },
  reviews: {
    data: [],
    sendingStatus: false,
  },
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
    setCurrentOffer: (state, action: PayloadAction<Offer | undefined>) => {
      state.offers.currentOffer = action.payload;
    },
    changeFavoriteOffersNumber: (state, action: PayloadAction<boolean>) => {
      const count = action.payload ? 1 : -1;
      state.favorites.quantity += count;
    },
    setOfferStatus: (state, action: PayloadAction<number>) => {
      state.offers.data.forEach((offer) => {
        if (offer.id === action.payload) {
          offer.isFavorite = !offer.isFavorite;
        }
      });

      if (state.offers.selectedOffer) {
        state.offers.selectedOffer.isFavorite = !state.offers.selectedOffer.isFavorite;
      }

      state.offersNearby.data.forEach((offer) => {
        if (offer.id === action.payload) {
          offer.isFavorite = !offer.isFavorite;
        }
      });

      state.favorites.data = state.favorites.data.filter((offer) => offer.id !== action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllOffersAction.pending, (state) => {
        state.offers.isOffersLoading = true;
      })
      .addCase(fetchAllOffersAction.fulfilled, (state, action) => {
        state.offers.data = action.payload;
        state.offers.isOffersLoading = false;
      })
      .addCase(fetchSelectedOfferAction.pending, (state) => {
        state.offers.isSelectedOffersLoading = true;
      })
      .addCase(fetchSelectedOfferAction.fulfilled, (state, action) => {
        state.offers.selectedOffer = action.payload;
        state.offers.isSelectedOffersLoading = false;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby.data = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews.data = action.payload;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.reviews.sendingStatus = true;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews.sendingStatus = false;
        state.reviews.data = action.payload;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favorites.data = action.payload;
        state.favorites.quantity = action.payload.length;
      });
  }
});

export const {setCurrentCity, setOfferStatus, changeFavoriteOffersNumber, setCurrentOffer} = dataProcess.actions;
