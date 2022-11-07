import Card from '../card/card';
import { Offer } from '../../types/offers';
import { useState } from 'react';

type ListFavoritesProps = {
    offers: Offer[];
}

function ListFavorites({offers}: ListFavoritesProps): JSX.Element {

  const cities = [...new Set(offers.map(({city}) => city.name))];

  const [, setActiveCard] = useState(0);

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
                onHoverOn={() => setActiveCard(offer.id)}
                onHoverAway={() => setActiveCard(0)}
              /> : '')}
          </div>
        </li>)
      )}
    </ul>
  );

}

export default ListFavorites;
