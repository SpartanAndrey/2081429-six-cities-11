import CardFavorite from '../card-favorite/card-favorite';
import { Offer } from '../../types/offers';

type ListFavoritesProps = {
    offers: Offer[];
}

function ListFavorites({offers}: ListFavoritesProps): JSX.Element {

  const cities = Array.from(new Set(offers.map(({city}) => city.name)));

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
            {offers.map((offer) => offer.city.name === city ? <CardFavorite key={offer.id} offer={offer}/> : '')}
          </div>
        </li>)
      )}
    </ul>
  );

}

export default ListFavorites;
