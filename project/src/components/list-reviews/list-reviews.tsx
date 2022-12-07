import ReviewCard from '../review-card/review-card';
import { Review } from '../../types/reviews';
import { MAX_REVIEWS_NUMBER } from '../../const';
import { getSortReviewsByDate } from '../../utils';

type ListReviewsProps = {
  reviews: Review[];
};

function ListReviews({ reviews }: ListReviewsProps): JSX.Element {

  const processedReviews = reviews.slice(0, MAX_REVIEWS_NUMBER).sort(getSortReviewsByDate);

  return (
    <ul className="reviews__list">
      {processedReviews.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
        />)
      )}
    </ul>
  );
}

export default ListReviews;
