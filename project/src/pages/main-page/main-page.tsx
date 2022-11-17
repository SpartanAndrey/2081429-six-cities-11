import Account from '../../components/account/account';
import Logo from '../../components/logo/logo';
import ListCities from '../../components/list-cities/list-cities';
import ListOffers from '../../components/list-offers/list-offers';
import { Offer } from '../../types/offers';
import { useState } from 'react';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';

type MainPageProps = {
    placesCount: number;
    offers: Offer[];
}

function MainPage({placesCount, offers}: MainPageProps): JSX.Element {

  const dispatch = useAppDispatch();

  const selectedCity = useAppSelector((state) => state.city);
  const allOffers = useAppSelector((state) => state.offersList);
  const selectedOffers = allOffers.filter(({ city }) => city.name === selectedCity);

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const onListOfferHoverOn = (offerId: number | undefined) => {
    const currentOffer = selectedOffers.find((offer) => offer.id === offerId);

    setSelectedOffer(currentOffer);
  };

  const onCityClick = (city: string) => {
    dispatch(changeCity(city));
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <Account />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ListCities
              selectedCity={selectedCity}
              onCityChange={onCityClick}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{selectedOffers.length} {selectedOffers.length === 1 ? 'place' : 'places'} to stay in {selectedCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <ListOffers
                  offers={selectedOffers} onListOfferHoverOn={onListOfferHoverOn}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={selectedOffers} selectedOffer={selectedOffer} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
