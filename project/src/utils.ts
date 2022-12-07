import { SortType } from './const';
import { Offer } from './types/offers';
import { Review } from './types/reviews';

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

export const capitalizeFirstLetter = (str: string) => str[0].toUpperCase() + str.slice(1);

export const pluralCheck = (value: number, str: string) => value === 1 ? str : str.concat('s');

export const getSortReviewsByDate = (review: Review, reviewNext: Review) => Date.parse(reviewNext.date) - Date.parse(review.date);
