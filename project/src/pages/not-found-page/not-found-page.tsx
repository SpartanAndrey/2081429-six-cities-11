import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';

function NotFoundPage(): JSX.Element {
  return(
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 style={{textAlign: 'center'}}>404.Page not found</h1>
        <Link style={{textAlign: 'center'}} to="/">Вернуться на главную</Link>
      </main>
    </div>
  );
}

export default NotFoundPage;
