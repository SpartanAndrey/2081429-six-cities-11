import Account from '../../components/account/account';
import Logo from '../../components/logo/logo';
import ListCities from '../../components/list-cities/list-cities';
import ListOffers from '../../components/list-offers/list-offers';
import Sorting from '../../components/sorting/sorting';
import { useState } from 'react';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSortOffers } from '../../utils';
import { getCurrentOffer, getOffers } from '../../store/data-process/data-selectors';
import { SortType } from '../../const';
import { getCurrentCity } from '../../store/data-process/data-selectors';
import { setCurrentCity } from '../../store/data-process/data-process';
import MainEmpty from '../../components/main-empty/main-empty';

function MainPage(): JSX.Element {

  const dispatch = useAppDispatch();

  const allOffers = useAppSelector(getOffers);
  const currentCity = useAppSelector(getCurrentCity);
  const selectedOffer = useAppSelector(getCurrentOffer);

  const [currentSortType, setCurrentSortType] = useState<SortType>(SortType.Default);

  const onSortTypeClick = (sortType: SortType) => {
    setCurrentSortType(sortType);
  };

  const selectedOffers = allOffers.filter(({ city }) => city.name === currentCity);
  const sortOffers = getSortOffers(currentSortType, selectedOffers);

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
        {selectedOffers.length === 0 ? <MainEmpty currentCity={currentCity} /> :
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{selectedOffers.length} {selectedOffers.length === 1 ? 'place' : 'places'} to stay in {currentCity}</b>
                <Sorting currentSortType={currentSortType} onSortTypeClick={onSortTypeClick}/>
                <div className="cities__places-list places__list tabs__content">
                  <ListOffers
                    offers={sortOffers}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={selectedOffers} selectedOffer={selectedOffer} />
                </section>
              </div>
            </div>
          </div>}
      </main>
    </div>
  );
}

export default MainPage;
