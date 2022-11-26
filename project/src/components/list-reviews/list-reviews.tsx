import ReviewCard from '../review-card/review-card';
import { Review } from '../../types/reviews';

type ListReviewsProps = {
  reviews: Review[];
};

function ListReviews({ reviews }: ListReviewsProps): JSX.Element {

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
