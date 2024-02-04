import React, { BaseSyntheticEvent, useState } from 'react'
import { TReviewsProps } from '../types/types'
import Rating from '../rating/Rating'
import { fetchReviewedProduct } from '../services/product/productSlice'
import { useAppDispath } from '../services/hooks'

const ReviewForm = ({ product }: TReviewsProps) => {
	const dispatch = useAppDispath()
	const [rating, setRating] = useState(0)
	const [text, setText] = useState('')

	const clear = () => {
		setText('')
		setRating(0)
	}

	const handleTextChange = (event: BaseSyntheticEvent) => {
		setText(event.target.value)
	}

	const handleSubmit = (event: BaseSyntheticEvent) => {
		event.preventDefault()
		const productId = product?._id || ''
		const reviewData = { text, rating } as Pick<Review, 'text' | 'rating'>
		if (product?._id)
			dispatch(fetchReviewedProduct({ productId, reviewData })).then(() => {
				clear()
			})
	}
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
					value={text}
					onChange={handleTextChange}
				></textarea>
				<button
					type='submit'
					className='form__btn pramary'
					onClick={handleSubmit}
				>
					Отправить отзыв
				</button>
			</form>
		</>
	)
}

export default ReviewForm
