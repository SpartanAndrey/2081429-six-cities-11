import { useState, ChangeEvent, FormEvent } from 'react';
import { Ratings } from '../../const';
import { useAppDispatch } from '../../hooks';
import { postReviewAction } from '../../store/api-action';
import Rating from '../rating/rating';

type ReviewFormProps = {
  offerId: number;
}

function ReviewForm({ offerId }: ReviewFormProps): JSX.Element {

  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });

  const fieldChangeHandle = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const submitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(postReviewAction({
      id: offerId,
      comment: formData.review,
      rating: Number(formData.rating),
    }));

    setFormData({rating: '', review:''});

  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={submitHandle}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Ratings.map(({title, value}) => (
          <Rating
            key={value}
            title={title}
            value={value}
            currentRating={formData.rating}
            fieldChangeHandle={fieldChangeHandle}
          />
        )
        )}
      </div>
      <textarea onChange={fieldChangeHandle} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={formData.review}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
