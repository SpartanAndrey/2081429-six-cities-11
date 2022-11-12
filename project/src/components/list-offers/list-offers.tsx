import Card from '../card/card';
import { Offer } from '../../types/offers';

type ListOffersProps = {
    offers: Offer[];
    onListOfferHoverOn: (id: number | undefined) => void;
}

function ListOffers({offers = [], onListOfferHoverOn}: ListOffersProps): JSX.Element {

  const handleHoverOn = (id: number | undefined) => {
    onListOfferHoverOn(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onOfferHoverOn={handleHoverOn}
        />)
      )}
    </div>
  );
}

export default ListOffers;
