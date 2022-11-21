import Account from '../../components/account/account';
import Logo from '../../components/logo/logo';
import ListCities from '../../components/list-cities/list-cities';
import ListOffers from '../../components/list-offers/list-offers';
import Sorting from '../../components/sorting/sorting';
import { Offer } from '../../types/offers';
import { useState } from 'react';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCurrentCity } from '../../store/action';
import { getSortOffers } from '../../utils';
import { getOffersList, getCurrentCity, getCurrentSortType } from '../../store/selector';

function MainPage(): JSX.Element {

  const dispatch = useAppDispatch();

  const allOffers = useAppSelector(getOffersList);
  const currentCity = useAppSelector(getCurrentCity);
  const currentSortType = useAppSelector(getCurrentSortType);

  const selectedOffers = allOffers.filter(({ city }) => city.name === currentCity);
  const sortOffers = getSortOffers(currentSortType, selectedOffers);

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const onListOfferHoverOn = (offerId: number | undefined) => {
    const currentOffer = selectedOffers.find((offer) => offer.id === offerId);

    setSelectedOffer(currentOffer);
  };

  const onCityClick = (city: string) => {
    dispatch(setCurrentCity(city));
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
              currentCity={currentCity}
              onCityChange={onCityClick}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{selectedOffers.length} {selectedOffers.length === 1 ? 'place' : 'places'} to stay in {currentCity}</b>
              <Sorting />
              <div className="cities__places-list places__list tabs__content">
                <ListOffers
                  offers={sortOffers} onListOfferHoverOn={onListOfferHoverOn}
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
