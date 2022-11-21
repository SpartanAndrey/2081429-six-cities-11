import { SortType } from './const';
import { Offer } from './types/offers';

export const getSortOffers = (sortType: SortType, offers: Offer[]) => {
  switch (sortType) {
    case (SortType.PriceUp):
      return offers.sort((offer: Offer, offerNext: Offer) => offer.price - offerNext.price);
    case (SortType.PriceDown):
      return offers.sort((offer: Offer, offerNext: Offer) => offerNext.price - offer.price);
    case (SortType.Top):
      return offers.sort((offer: Offer, offerNext: Offer) => offerNext.rating - offer.rating);
    default:
      return offers;
  }
};

