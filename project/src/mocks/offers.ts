import { Offer } from '../types/offers';

export const offers: Offer[] = [
  {
    id: 1,
    previewImage: 'img/apartment-01.jpg',
    isPremium: true,
    price: 120,
    title: 'luxurious apartment at great location',
    type: 'apartment',
    rating: 4,
    isFavorite: true,
    city: {
      name: 'Dusseldorf',
    }
  },
  {
    id: 2,
    previewImage: 'img/apartment-02.jpg',
    isPremium: false,
    price: 90,
    title: 'cozy room at city center',
    type: 'room',
    rating: 3.2,
    isFavorite: false,
    city: {
      name: 'Amsterdam',
    }
  },
  {
    id: 3,
    previewImage: 'img/apartment-03.jpg',
    isPremium: false,
    price: 200,
    title: 'beautiful house on the outskirts of the city',
    type: 'house',
    rating: 3.9,
    isFavorite: true,
    city: {
      name: 'Amsterdam',
    }
  },
  {
    id: 4,
    previewImage: 'img/apartment-small-03.jpg',
    isPremium: true,
    price: 450,
    title: 'all inclusive hotel near the central square',
    type: 'hotel',
    rating: 4.8,
    isFavorite: true,
    city: {
      name: 'Amsterdam',
    }
  }

];
