import { ChangeEvent } from 'react';

type RatingProps = {
  title: string;
  value: string;
  currentRating: string;
  fieldChangeHandle: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function Rating({title, value, currentRating, fieldChangeHandle}: RatingProps): JSX.Element {

  return (
    <>
      <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" checked={Number(value) === Number(currentRating)}/>
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default Rating;
