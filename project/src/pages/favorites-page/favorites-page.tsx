import Account from '../../components/account/account';
import Logo from '../../components/logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavorites, getFavoritesQuantity } from '../../store/data-process/data-selectors';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import Favorites from '../../components/favorites/favorites';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { fetchFavoriteOffersAction } from '../../store/api-action';
import { useEffect } from 'react';

function FavoritesPage(): JSX.Element {

  const dispatch = useAppDispatch();

  const favoriteOffers = useAppSelector(getFavorites);

  const favoriteOffersQuantity = useAppSelector(getFavoritesQuantity);

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <Account />
          </div>
        </div>
      </header>

      {favoriteOffersQuantity === 0 ? <FavoritesEmpty /> : <Favorites offers={favoriteOffers} />}

      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
