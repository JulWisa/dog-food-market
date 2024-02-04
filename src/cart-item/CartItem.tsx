import React, { BaseSyntheticEvent } from 'react'
import { getPriceWIthDiscount } from '../utils'
import CartItemControl from '../cart-item-control/CartItemControl'
import { useAppDispath } from '../services/hooks'
import { removeAll } from '../services/cart/cartSlice'

type TCartItemProps = {
	product: Product
}

const CartItem = ({ product }: TCartItemProps) => {
	const dispatch = useAppDispath()
	const handleTrashClick = (event: BaseSyntheticEvent) => {
		event.preventDefault()
		dispatch(removeAll(product))
	}
	return (
		<div className='cart-item'>
			<div className='cart-item__desc'>
				<img
					src={product.pictures}
					alt={product.name}
					className='cart-item__image'
				/>
				<a
					className='cart-item__title'
					href='/product/6451cfed8fbc473fa8a24b4b'
				>
					<h2>{product.name}</h2>
				</a>
				<p className='cart-item__weight'>{product.wight}</p>
			</div>
			<CartItemControl product={product} />
			<div className='cart-item__price'>
				<div className='price-big price-wrap'>
					<span className='price_old price_right'>{product.price}&nbsp;₽</span>
					<span className='price_discount price'>
						{getPriceWIthDiscount(product.price, product.discount || 0)}&nbsp;₽
					</span>
				</div>
			</div>
			<button className='cart-item__bnt-trash' onClick={handleTrashClick}>
				<svg
					width='20'
					height='20'
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M13.5563 18.3337C14.6643 18.3337 15.4081 17.6377 15.4623 16.5675L15.9969 5.68585H16.9267C17.2443 5.68585 17.5 5.42391 17.5 5.11707C17.5 4.81023 17.2443 4.55578 16.9267 4.55578H13.3858V3.43319C13.3858 2.35551 12.6343 1.66699 11.4411 1.66699H8.54339C7.35021 1.66699 6.6064 2.35551 6.6064 3.43319V4.55578H3.07335C2.76343 4.55578 2.5 4.81772 2.5 5.11707C2.5 5.42391 2.76343 5.68585 3.07335 5.68585H4.01085L4.54545 16.5749C4.59969 17.6451 5.328 18.3337 6.45145 18.3337H13.5563ZM12.1539 4.55578H7.84608V3.50803C7.84608 3.08145 8.16374 2.78209 8.63636 2.78209H11.3559C11.8285 2.78209 12.1539 3.08145 12.1539 3.50803V4.55578ZM13.4323 17.2036H6.55992C6.11829 17.2036 5.78512 16.8818 5.76188 16.4402L5.21953 5.68585H14.7572L14.2459 16.4402C14.2226 16.8893 13.8972 17.2036 13.4323 17.2036ZM12.3011 15.8939C12.5568 15.8939 12.7428 15.6918 12.7505 15.4075L12.9829 7.55684C12.9907 7.27993 12.797 7.07038 12.5336 7.07038C12.2934 7.07038 12.0919 7.28742 12.0842 7.55684L11.8517 15.4C11.844 15.6769 12.0377 15.8939 12.3011 15.8939ZM7.70661 15.8939C7.97004 15.8939 8.16374 15.6769 8.156 15.4L7.91581 7.55684C7.90806 7.28742 7.70661 7.07038 7.46643 7.07038C7.203 7.07038 7.0093 7.27993 7.01705 7.55684L7.24949 15.4075C7.25723 15.6918 7.44318 15.8939 7.70661 15.8939ZM9.99999 15.8939C10.2557 15.8939 10.4726 15.6769 10.4726 15.4075V7.55684C10.4726 7.28742 10.2557 7.07038 9.99999 7.07038C9.75206 7.07038 9.53511 7.28742 9.53511 7.55684V15.4075C9.53511 15.6769 9.75206 15.8939 9.99999 15.8939Z'
						fill='#7B8E98'
					></path>
				</svg>
			</button>
		</div>
	)
}

export default CartItem