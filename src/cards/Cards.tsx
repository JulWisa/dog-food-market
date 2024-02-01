import React from 'react'
import Card from '../card/Card'
import { CardsPropsType, CardType } from '../types/types'
import './Cards.css'

const Cards = (props: CardsPropsType) => {
	console.log(props)
	return (
		<div className='cards content__cards'>
			{props.data.map((cardData: CardType) => (
				<Card key={cardData.name} data={cardData} />
			))}
		</div>
	)
}

export default Cards
