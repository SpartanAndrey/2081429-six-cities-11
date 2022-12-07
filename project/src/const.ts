export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offers/:id',
  NotFound ='*',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Reviews ='/comments',
  Favorites ='/favorite',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}

export enum SortType {
  Default = 'Popular',
  PriceUp = 'Price: low to high',
  PriceDown = 'Price: high to low',
  Top = 'Top rated first',
}

export const CITIES: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const defaultCity = {
  name: 'Paris',
  location: {
    latitude: 48.8534,
    longitude: 2.3488,
    zoom: 10,
  },
};

export const RATING_COEF = 20;

export const REVIEW_MIN_LENGTH = 50;

export const REVIEW_MAX_LENGTH = 300;

export const MAX_REVIEWS_NUMBER = 10;

export const MAX_PHOTOS_NUMBER = 6;

export const Ratings = [
  {title: 'perfect', value: '5'},
  {title: 'good', value: '4'},
  {title: 'not bad', value: '3'},
  {title: 'badly', value: '2'},
  {title: 'terribly', value: '1'},
];

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export const URL_MARKER_DEFAULT = '/img/pin.svg';
