import Account from '../../components/account/account';
import Logo from '../../components/logo/logo';
import ListReviews from '../../components/list-reviews/list-reviews';
import ReviewForm from '../../components/review-form/review-form';
import Map from '../../components/map/map';
import ListOffers from '../../components/list-offers/list-offers';
import { Review } from '../../types/reviews';
import { useParams } from 'react-router-dom';
import { RATING_COEF } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getOffers, getOffersNearby } from '../../store/selector';
import { useEffect } from 'react';
import { fetchOffersNearbyAction } from '../../store/api-action';
import { capitalizeFirstLetter, pluralCheck } from '../../utils';

type propertyPageProps = {
  reviews: Review[];
}

function PropertyPage({ reviews = [] }: propertyPageProps): JSX.Element {

  const dispatch = useAppDispatch();

  const allOffers = useAppSelector(getOffers);

  const params = useParams();

  const currentId = Number(params.id);

  const selectedOffer = allOffers.find((offer) => offer.id === currentId);

  useEffect(() => {
    dispatch(fetchOffersNearbyAction(currentId));
  }, [currentId, dispatch]);

  const offersNearby = useAppSelector(getOffersNearby);

  const offersOnMap = selectedOffer ? [...offersNearby, selectedOffer] : offersNearby;


  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <Account />
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {selectedOffer && selectedOffer.images.map((image) => (
                <div key ={image} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Something should be here"/>
                </div>)
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {selectedOffer && selectedOffer.isPremium &&
                <div className="place-card__mark">
                  <span>Premium</span>
                </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {selectedOffer && selectedOffer.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={selectedOffer && { 'width': `${Math.round(selectedOffer.rating) * RATING_COEF}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{selectedOffer && selectedOffer.rating }</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {selectedOffer && capitalizeFirstLetter(selectedOffer.type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {selectedOffer && selectedOffer.bedrooms} {selectedOffer && pluralCheck(selectedOffer.bedrooms, 'Bedroom')}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {selectedOffer && selectedOffer.maxAdults} {selectedOffer && pluralCheck(selectedOffer.maxAdults, 'adult')}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{selectedOffer && selectedOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {selectedOffer && selectedOffer.goods.map((item) => (
                    <li key={item} className="property__inside-item">
                      {item}
                    </li>)
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={selectedOffer && selectedOffer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {selectedOffer && selectedOffer.host.name}
                  </span>
                  {selectedOffer && selectedOffer.host.isPro &&
                  <span className="property__user-status">
                    Pro
                  </span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {selectedOffer && selectedOffer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ListReviews reviews={reviews}/>
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={offersOnMap} selectedOffer={undefined} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <ListOffers
                offers={offersNearby} onListOfferHoverOn={() => undefined}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyPage;

