import { Review } from '../../types/reviews';
import ReviewCard from '../review-card/review-card';

type ListReviewsProps = {
  reviews: Review[];
};

function ListReviews({reviews = []}: ListReviewsProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
        />)
      )}
    </ul>
  );
}

export default ListReviews;
