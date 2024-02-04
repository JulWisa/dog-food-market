import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import './CartPage.css'
import BackLink from '../../back-link/BackLink'
import { useAppSelector } from '../../services/hooks'
import { selectCartElements } from '../../services/cart/selectors'
import CartItem from '../../cart-item/CartItem'
import { getPriceWIthDiscount } from '../../utils'

const CartPage = () => {
	const cartProducts = useAppSelector(selectCartElements)
	const uniqueIds = new Set(cartProducts.map((product) => product._id))
	const totalPrice = cartProducts.reduce(
		(total, product) => product.price + total,
		0
	)
	const totalDiscount = cartProducts.reduce(
		(total, product) => (product.discount || 0) + total,
		0
	)
	const totalPriceWithDiscount = getPriceWIthDiscount(totalPrice, totalDiscount)
	return (
		<>
			<Header />
			<BackLink />
			<main className='main'>
				<div className='content container'>
					<div className='content-cart'>
						<div className='cart-title'>
							<span>{cartProducts.length} товаров</span> в корзине
						</div>
						<div className='cart-list'>
							{Array.from(uniqueIds).map((id) => (
								<CartItem
									key={id}
									product={
										cartProducts.find((prod) => prod._id === id) ||
										({} as Product)
									}
								/>
							))}
						</div>
						<div className='cart-amount'>
							<h1 className='cart-amount__title'>Ваша корзина</h1>
							<div className='cart-amount__table'>
								<div className='cart-amount__table-row'>
									<span className='cart-amount__table-title'>
										Товары ({cartProducts.length})
									</span>
									<span className='cart-amount__table-value'>
										{totalPrice} ₽
									</span>
								</div>
								<div className='cart-amount__table-row'>
									<span className='cart-amount__table-title'>Скидка</span>
									<span className='cart-amount__table-value cart-amount__table-value-discount'>
										- {totalDiscount} ₽
									</span>
								</div>
							</div>
							<div className='cart-amount__total-cost'>
								<h2 className='cart-amount__total-cost-title'>
									Общая стоимость
								</h2>
								<span className='cart-amount__total-cost-value'>
									{totalPriceWithDiscount} ₽
								</span>
							</div>
							<div className='button button_type_primary button_type_wide'>
								Оформить заказ
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default CartPage
