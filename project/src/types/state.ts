import { store } from '../store/index.js';
import {AuthorizationStatus} from '../const';
import { Offer } from './offers.js';
import { Review } from './reviews.js';
import { UserData } from './user-data.js';

export type DataProcess = {
  currentCity: string;
  favorites: {
    data: Offer[];
    quantity: number;
  };
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
}

export type UserProcess = {
  userData: {
    authStatus: AuthorizationStatus;
    user: UserData | null;
  };
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
