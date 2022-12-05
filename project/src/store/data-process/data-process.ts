import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITIES, NameSpace } from '../../const';
import { DataProcess } from '../../types/state';
import { Favorite } from '../../types/offers';
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
  },
  offersNearby: {
    data: [],
  },
  reviews: {
    data: [],
  },
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
    setOfferStatus: (state, action: PayloadAction<Favorite>) => {

      action.payload.status === 0 ? state.favorites.quantity -= 1 : state.favorites.quantity += 1;

      state.offers.data.forEach((offer) => {
        if (offer.id === action.payload.id) {
          offer.isFavorite = !offer.isFavorite;
        }
      });

      if (state.offers.selectedOffer) {
        state.offers.selectedOffer.isFavorite = !state.offers.selectedOffer.isFavorite;
      }

      state.offersNearby.data.forEach((offer) => {
        if (offer.id === action.payload.id) {
          offer.isFavorite = !offer.isFavorite;
        }
      });

      state.favorites.data = state.favorites.data.filter((offer) => offer.isFavorite === false);
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
      .addCase(fetchSelectedOfferAction.fulfilled, (state, action) => {
        state.offers.selectedOffer = action.payload;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby.data = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews.data = action.payload;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews.data = action.payload;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favorites.data = action.payload;
      });
  }
});

export const {setCurrentCity, setOfferStatus} = dataProcess.actions;
