import { Review } from '../types/reviews';

export const reviews: Review[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Tue Nov 01 2022 18:46:27 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Max'
    }
  },
  {
    comment: 'super loud, tiny rooms, nowhere to put your stuff',
    date: 'Tue Nov 06 2022 10:25:30 GMT+0300 (Москва, стандартное время)',
    id: 2,
    rating: 1,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      isPro: false,
      name: 'Angelina'
    }
  }
];
