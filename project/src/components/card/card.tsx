import { Link, useLocation } from 'react-router-dom';
import { MouseEventHandler } from 'react';
import { Offer } from '../../types/offers';
import { RATING_COEF } from '../../const';

type cardProps ={
  offer: Offer;
  onHoverOn: MouseEventHandler<HTMLElement>;
  onHoverAway: MouseEventHandler<HTMLElement>;
};

function Card({offer, onHoverOn, onHoverAway}: cardProps): JSX.Element {

  const {id, previewImage, isPremium, price, title, type, rating, isFavorite} = offer;

  const currentPath = useLocation().pathname;

  return (
    <article className={`${currentPath === '/favorites' ? 'favorites__card' : 'cities__card'} place-card`}
      onMouseEnter={onHoverOn}
      onMouseLeave={onHoverAway}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${currentPath === '/favorites' ? 'favorites__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <a href="#todo">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Something should be here"/>
        </a>
      </div>
      <div className={`${currentPath === '/favorites' ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ 'width': `${Math.round(rating) * RATING_COEF}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offers/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type" defaultValue='Apartment'>{type[0].toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
}

export default Card;
