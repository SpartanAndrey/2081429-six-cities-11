import Card from '../card/card';
import { Offer } from '../../types/offers';

type FavoritesProps = {
  offers: Offer[];
  onListOfferHoverOn: (id: number | undefined) => void;
}

function Favorites({offers = [], onListOfferHoverOn}: FavoritesProps): JSX.Element {

  const cities = [...new Set(offers.map(({city}) => city.name))];

  const handleHoverOn = (id: number | undefined) => {
    onListOfferHoverOn(id);
  };

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {cities.map((city) => (
              <li className="favorites__locations-items" key={city}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#todo">
                      <span>{city}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map((offer) => offer.city.name === city ?
                    <Card
                      key={offer.id}
                      offer={offer}
                      onOfferHoverOn={handleHoverOn}
                    /> : '')}
                </div>
              </li>)
            )}
          </ul>
        </section>
      </div>
    </main>
  );

}

export default Favorites;
