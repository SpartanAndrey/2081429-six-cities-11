import { Offer } from '../types/offers';

export const offersNearby: Offer[] = [
  {
    id: 100,
    previewImage: 'img/apartment-02.jpg',
    isPremium: true,
    price: 500,
    title: 'best apartment ever',
    type: 'apartment',
    rating: 5,
    isFavorite: true,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.2909553943508,
        longitude: 4.83309666406198,
      },
    },
    location: {
      latitude: 52.2909553943508,
      longitude: 4.83309666406198,
    },
  },
  {
    id: 101,
    previewImage: 'img/apartment-03.jpg',
    isPremium: false,
    price: 50,
    title: 'the most ordinary room',
    type: 'room',
    rating: 3.7,
    isFavorite: false,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3709553943508,
        longitude: 4.82309666406198,
      },
    },
    location: {
      latitude: 52.3709553943508,
      longitude: 4.82309666406198,
    },
  },
  {
    id: 102,
    previewImage: 'img/apartment-03.jpg',
    isPremium: true,
    price: 100,
    title: 'better to see once',
    type: 'house',
    rating: 4.4,
    isFavorite: false,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.1909553943508,
        longitude: 4.729309666406198,
      },
    },
    location: {
      latitude: 52.1909553943508,
      longitude: 4.729309666406198,
    },
  }
];
