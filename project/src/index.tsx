import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { offers } from './mocks/offers';
import { offersNearby } from './mocks/offers-nearby';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  PlacesCount: 150,
} as const;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        placesCount = {Setting.PlacesCount}
        offers = {offers}
        offersNearby = {offersNearby}
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>,
);
