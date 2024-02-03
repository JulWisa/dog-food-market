import React from 'react'
import { TReviewProps } from '../types/types'
import Rating from '../rating/Rating'

const Review = ({
	data: { name, city, author, text, rating, created_at, updated_at, _id },
}: TReviewProps) => {
	return (
		<div className='review'>
			<div className='review__header'>
				{!!author && <div className='review__name'>{author.name}</div>}
				<div className='review__date'>
					{created_at ? new Date(created_at).toLocaleDateString('ru-Ru') : ''}
				</div>
			</div>
			<Rating rating={rating} />
			<p className='review__text'>{text}</p>
		</div>
	)
}

export default Review
