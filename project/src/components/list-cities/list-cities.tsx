import { Link } from 'react-router-dom';
import { CITIES } from '../../const';

type ListCitiesProps = {
  currentCity: string;
  onCityChange: (city: string) => void;
}

function ListCities({currentCity, onCityChange}: ListCitiesProps): JSX.Element {

  const handleMouseClick = (city: string) => {
    onCityChange(city);
  };

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li key={city} className="locations__item">
          <Link className={`locations__item-link tabs__item ${currentCity === city ? 'tabs__item--active' : ''}`} to={`#${city}`} onClick={() => handleMouseClick(city)}>
            <span>{city}</span>
          </Link>
        </li>)
      )}
    </ul>
  );
}

export default ListCities;
