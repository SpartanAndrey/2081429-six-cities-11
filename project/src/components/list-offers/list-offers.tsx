import Card from '../card/card';
import { Offer } from '../../types/offers';

type ListOffersProps = {
    offers: Offer[];
    onListOfferHoverOn: (id: number | undefined) => void;
}

function ListOffers({offers = [], onListOfferHoverOn}: ListOffersProps): JSX.Element {

  function handleHoverOn(id: number | undefined) {
    onListOfferHoverOn(Number(id));
  }

  function handleHoverAway() {
    onListOfferHoverOn(0);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onOfferHoverOn={handleHoverOn}
          onOfferHoverAway={handleHoverAway}
        />)
      )}
    </div>
  );
}

export default ListOffers;
