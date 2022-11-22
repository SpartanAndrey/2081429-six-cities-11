import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PropertyPage from '../../pages/property-page/property-page';
import { Offer } from '../../types/offers';
import { Review } from '../../types/reviews';
import LoadingOffers from '../loading-offers/loading-offers';
import { getOffersLoadingStatus } from '../../store/selector';

type AppProps = {
  offers: Offer[];
  offersNearby: Offer[];
  reviews: Review[];
}

function App({offers, offersNearby, reviews}: AppProps): JSX.Element {

  const isOffersLoading = useAppSelector(getOffersLoadingStatus);

  if (isOffersLoading) {
    return (
      <LoadingOffers />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage />
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage
                offers = {offers}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Room}
        >
          <Route
            path={AppRoute.Room}
            element={<PropertyPage offers={offers} offersNearby={offersNearby} reviews={reviews}/>}
          />
        </Route>
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
