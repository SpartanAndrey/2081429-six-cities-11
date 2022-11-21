import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SortType } from '../../const';
import { setCurrentSortType } from '../../store/action';
import { getCurrentSortType } from '../../store/selector';

function Sorting(): JSX.Element {

  const dispatch = useAppDispatch();
  const currentSortType = useAppSelector(getCurrentSortType);

  const [popupState, setPopupState] = useState(false);

  const handlePopupClick = () => {
    setPopupState(!popupState);
  };

  const handleSortListClick = (sortType: SortType) => {
    setPopupState(!popupState);
    dispatch(setCurrentSortType(sortType));
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
