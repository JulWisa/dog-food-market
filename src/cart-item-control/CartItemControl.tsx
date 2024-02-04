import React, { BaseSyntheticEvent } from 'react'
import { useAppDispath, useAppSelector } from '../services/hooks'
import { selectCartElements } from '../services/cart/selectors'
import { add, remove } from '../services/cart/cartSlice'

type TCartItemControl = {
	product: Product
}

const CartItemControl = ({ product }: TCartItemControl) => {
	const dispatch = useAppDispath()
	const cartProducts = useAppSelector(selectCartElements)
	const count = cartProducts.filter((prod) => prod._id === product._id).length
	const handleRemoveClick = (event: BaseSyntheticEvent) => {
		event.preventDefault()
		dispatch(remove(product))
	}
	const handleAddClick = (event: BaseSyntheticEvent) => {
		event.preventDefault()
		dispatch(add(product))
	}
	return (
		<div className='button-count'>
			<button
				className='button-count__minus'
				disabled={count === 0}
				onClick={handleRemoveClick}
			>
				-
			</button>
			<span>{count}</span>
			<button
				className='button-count__plus'
				disabled={(product.stock || 0) === count}
				onClick={handleAddClick}
			>
				+
			</button>
		</div>
	)
}

export default CartItemControl
