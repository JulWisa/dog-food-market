import React, { useState } from 'react'
import { TReviewsProps } from '../types/types'
import Rating from '../rating/Rating'

const ReviewForm = ({ product }: TReviewsProps) => {
	const [rating, setRating] = useState(0)
	return (
		<>
			<h2>Отзыв о товаре {product?.name}</h2>
			<Rating rating={rating} onRate={setRating} />
			<form className='form'>
				<textarea
					className='input textarea'
					name='text'
					id='text'
					placeholder='Напишите текст отзыва'
				></textarea>
				<button type='submit' className='form__btn pramary'>
					Отправить отзыв
				</button>
			</form>
		</>
	)
}

export default ReviewForm
