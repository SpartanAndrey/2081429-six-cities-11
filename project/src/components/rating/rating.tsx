import { ChangeEvent } from 'react';

type RatingProps = {
    title: string;
    value: string;
    fieldChangeHandle: (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function Rating({title, value, fieldChangeHandle}: RatingProps): JSX.Element {
  return (
    <>
      <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio"/>
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default Rating;
