import React, { useEffect } from 'react'
import Card from '../card/Card'
import './Cards.css'
import { useAppDispath, useAppSelector } from '../services/hooks'
import { selectProducts } from '../services/products/selectors'
import { fetchProducts } from '../services/products/productsSlice'
import { TProductsResponseDto } from '../api'

const Cards = () => {
	const dispatch = useAppDispath()
	const data: TProductsResponseDto | null = useAppSelector(selectProducts)

	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	useEffect(() => {
		console.log(data)
	}, [data])

	return (
		<div className='cards content__cards'>
			{data?.products?.map((cardData) => (
				<Card key={cardData.name} data={cardData} />
			))}
		</div>
	)
}

export default Cards
