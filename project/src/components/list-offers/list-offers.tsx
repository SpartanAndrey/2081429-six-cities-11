import Card from '../card/card';
import { Offer } from '../../types/offers';

type ListOffersProps = {
  offers: Offer[];
}

function ListOffers({offers = []}: ListOffersProps): JSX.Element {

  return (
    <>
      {offers.map((offer: Offer) => (
        <Card
          key={offer.id}
          offer={offer}
        />)
      )}
    </>
  );
}

export default ListOffers;
