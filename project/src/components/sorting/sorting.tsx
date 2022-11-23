import { useState } from 'react';
import { SortType } from '../../const';

type SortingProps = {
  currentSortType: SortType;
  onSortTypeClick: (sortType: SortType) => void;
}

function Sorting({ currentSortType, onSortTypeClick }: SortingProps): JSX.Element {

  const [popupState, setPopupState] = useState(false);

  const handlePopupClick = () => {
    setPopupState(!popupState);
  };

  const handleSortListClick = (sortType: SortType) => {
    setPopupState(!popupState);
    onSortTypeClick(sortType);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handlePopupClick}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${popupState ? 'places__options--opened' : ''}`}>
        {Object.values(SortType).map((type) => (
          <li key={type} className={`places__option ${type === currentSortType ? 'places__option--active' : ''}`} tabIndex={0} onClick={() => handleSortListClick(type)}>
            {type}
          </li>)
        )}
      </ul>
    </form>
  );
}

export default Sorting;
