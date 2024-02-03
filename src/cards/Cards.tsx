import React from 'react'
import Card from '../card/Card'
import './Cards.css'
import { TCardsProps } from '../types/types'

const Cards = ({ data, user }: TCardsProps) => {
	return (
		<div className='cards content__cards'>
			{/*{loading && <Spinner />}*/}
			{data.map((cardData) => (
				<Card key={cardData._id} data={cardData} user={user} />
			))}
		</div>
	)
}

export default Cards
