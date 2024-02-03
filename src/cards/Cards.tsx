import React from 'react'
import Card from '../card/Card'
import './Cards.css'
import { TCardsProps } from '../types/types'

const Cards = ({ data }: TCardsProps) => {
	return (
		<div className='cards content__cards'>
			{/*{loading && <Spinner />}*/}
			{data.map((cardData) => (
				<Card key={cardData._id} data={cardData} />
			))}
		</div>
	)
}

export default Cards
