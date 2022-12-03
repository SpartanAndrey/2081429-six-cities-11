import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITIES, NameSpace } from '../../const';
import { DataProcess } from '../../types/state';
import { fetchAllOffersAction, fetchSelectedOfferAction, fetchOffersNearbyAction, fetchReviewsAction, postReviewAction } from '../api-action';

const initialState: DataProcess = {
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
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
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
      });
  }
});

export const {setCurrentCity} = dataProcess.actions;
