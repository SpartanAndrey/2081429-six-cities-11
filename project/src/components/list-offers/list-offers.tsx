import Card from '../card/card';
import { Offer } from '../../types/offers';
import { useState } from 'react';

type ListOffersProps = {
    offers: Offer[];
}

function ListOffers({offers}: ListOffersProps): JSX.Element {

  const [, setActiveCard] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onHoverOn={() => setActiveCard(offer.id)}
          onHoverAway={() => setActiveCard(0)}
        />)
      )}
    </div>
  );
}

export default ListOffers;
