import { Link } from 'react-router-dom';
import { CITIES } from '../../const';


type ListCitiesProps = {
    selectedCity: string;
    onCityChange: (city: string) => void;
}

function ListCities({selectedCity, onCityChange}: ListCitiesProps): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li key={city} className="locations__item">
          <Link className={`locations__item-link tabs__item ${selectedCity === city ? 'tabs__item--active' : ''}`} to={`#${city}`} onClick={(evt) => {
            evt.preventDefault();
            onCityChange(city);
          }}
          >
            <span>{city}</span>
          </Link>
        </li>)
      )}
    </ul>
  );
}

export default ListCities;