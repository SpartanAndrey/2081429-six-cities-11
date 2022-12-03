import Account from '../../components/account/account';
import ListFavorites from '../../components/list-favorites/list-favorites';
import Logo from '../../components/logo/logo';
import { Offer } from '../../types/offers';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getOffers } from '../../store/data-process/data-selectors';

function FavoritesPage(): JSX.Element {

  const allOffers = useAppSelector(getOffers);

  const favoriteOffers = allOffers.filter((offer) => offer.isFavorite);

  const [, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const onListOfferHoverOn = (offerId: number | undefined) => {
    const currentOffer = allOffers.find((offer) => offer.id === offerId);

    setSelectedOffer(currentOffer);
  };

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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ListFavorites offers={favoriteOffers} onListOfferHoverOn={onListOfferHoverOn}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
