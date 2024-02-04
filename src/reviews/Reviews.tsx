import React from 'react'
import { TReviewsProps } from '../types/types'
import Review from '../review/Review'
import ReviewForm from '../review-form/ReviewForm'

const Reviews = ({ product }: TReviewsProps) => {
	console.log(product, product?.reviews)
	return (
		<div className='product__reviews'>
			{product?.reviews?.map((review) => (
				<Review key={review._id} data={review} />
			))}
			<ReviewForm product={product} />
		</div>
	)
}

export default Reviews
