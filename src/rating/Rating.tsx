import React from 'react'
import { TRatingProps } from '../types/types'

type TStarProps = {
	filled: boolean
}

const Star = ({ filled }: TStarProps) => (
	<span>
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='#CFD8DC'
			xmlns='http://www.w3.org/2000/svg'
			className={`star ${filled ? 'rating-filled' : ''}`}
		>
			<path d='M12.1108 14.2238C12.357 14.0388 12.411 13.7344 12.2609 13.3047L11.0061 9.58649L14.2121 7.30066C14.5844 7.03806 14.7345 6.75756 14.6384 6.46511C14.5424 6.17267 14.2602 6.02943 13.7979 6.0354L9.86538 6.06524L8.67062 2.32914C8.52652 1.89346 8.31039 1.66667 7.99819 1.66667C7.69199 1.66667 7.47586 1.89346 7.33177 2.32914L6.13701 6.06524L2.2045 6.0354C1.74221 6.02943 1.46003 6.17267 1.36397 6.46511C1.26191 6.75756 1.418 7.03806 1.79024 7.30066L4.99628 9.58649L3.74148 13.3047C3.59139 13.7344 3.64542 14.0388 3.89158 14.2238C4.13773 14.4148 4.44993 14.3491 4.82217 14.0806L7.99819 11.7589L11.1802 14.0806C11.5524 14.3491 11.8586 14.4148 12.1108 14.2238Z'></path>
		</svg>
	</span>
)

const Rating = ({ rating = 0 }: TRatingProps) => {
	const starsArray = Array(5)
	if (rating > 1) starsArray.fill(<Star filled />, 0, rating)
	starsArray.fill(<Star filled={false} />, rating, 5)

	return <div>{starsArray}</div>
}

export default Rating
