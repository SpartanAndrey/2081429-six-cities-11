import {Link} from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getUserData } from '../../store/user-process/user-selectors';
import {logoutAction} from '../../store/api-action';
import {useAppDispatch} from '../../hooks';
import { AppRoute } from '../../const';
import { getFavoritesQuantity } from '../../store/data-process/data-selectors';

function SignOut(): JSX.Element {

  const dispatch = useAppDispatch();

  const user = useAppSelector(getUserData);

  const favoriteOffersQuantity = useAppSelector(getFavoritesQuantity);

  const handleSignOut = () => {
    dispatch(logoutAction());
  };

  return(
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{user?.name}</span>
            <span className="header__favorite-count">{favoriteOffersQuantity}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link" to={AppRoute.Login} onClick={handleSignOut}>
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SignOut;
