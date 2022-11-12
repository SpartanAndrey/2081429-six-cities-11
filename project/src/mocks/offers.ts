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
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
      },
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
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
      },
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
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
      },
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
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
      },
    }
  }

];
