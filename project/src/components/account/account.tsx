import { useAppSelector } from '../../hooks';
import { getUserData, getAuthorizationStatus } from '../../store/user-process/user-selectors';
import { AuthorizationStatus } from '../../const';
import SignIn from '../sign-in/sign-in';
import SignOut from '../sign-out/sign-out';
import { fetchFavoriteOffersAction } from '../../store/api-action';
import { useEffect } from 'react';
import {useAppDispatch} from '../../hooks';

function Account(): JSX.Element {

  const dispatch = useAppDispatch();

  const user = useAppSelector(getUserData);
  const isAuthorized = useAppSelector(getAuthorizationStatus);

  const userCheck = user && isAuthorized === AuthorizationStatus.Auth;

  useEffect(() => {
    if (isAuthorized === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteOffersAction());
    }
  }, [dispatch, isAuthorized]);

  return(
    <nav className="header__nav">
      {userCheck ? <SignOut /> : <SignIn />}
    </nav>
  );
}

export default Account;
