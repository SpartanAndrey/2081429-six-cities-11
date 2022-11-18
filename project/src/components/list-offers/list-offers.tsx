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
    <>
      {offers.map((offer: Offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onOfferHoverOn={handleHoverOn}
        />)
      )}
    </>
  );
}

export default ListOffers;
