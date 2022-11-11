import Card from '../card/card';
import { Offer } from '../../types/offers';

type ListFavoritesProps = {
    offers: Offer[];
    onListOfferHoverOn: (id: number | undefined) => void;
}

function ListFavorites({offers = [], onListOfferHoverOn}: ListFavoritesProps): JSX.Element {

  const cities = [...new Set(offers.map(({city}) => city.name))];

  function handleHoverOn(id: number | undefined) {
    onListOfferHoverOn(id);
  }

  function handleHoverAway() {
    onListOfferHoverOn(0);
  }

  return (
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
                onOfferHoverAway={handleHoverAway}
              /> : '')}
          </div>
        </li>)
      )}
    </ul>
  );

}

export default ListFavorites;
