import React from 'react'
import './Card.css'
import { CardPropsType } from '../types/types'
import { Link, useLocation } from 'react-router-dom'
import { getPriceWIthDiscount } from '../utils'
import FavoriteButton from '../favorite-button/FavoriteButton'

const Card = ({
	data: {
		discount = 0,
		name,
		price,
		pictures,
		wight,
		available,
		_id,
		tags,
		likes,
	},
	user,
}: CardPropsType) => {
	const location = useLocation()

	return (
		<article className='card'>
			<div className='card__sticky card__sticky_type_top-left'>
				{!!discount && <span className='card__discount'>-{discount}%</span>}
				{tags?.map((tag) => (
					<span key={tag} className={`tag tag_type_${tag}`}>
						{tag}
					</span>
				))}
			</div>
			<div className='card__sticky card__sticky_type_top-right'>
				<FavoriteButton productId={_id} likes={likes} userId={user?._id} />
			</div>
			<Link
				className='card__link'
				to={`/product/${_id}`}
				state={{ prevLocation: location }}
			>
				<img src={pictures} alt={name} className='card__image' loading='lazy' />
				<div className='card__desc'>
					<div className='price-small price-wrap'>
						{!!discount && (
							<span className='price_old price_left card__old-price'>
								{price}&nbsp;₽
							</span>
						)}
						{!!discount && (
							<span
								className={`price_discount price card__price ${discount ? 'card__price_type_discount' : ''}`}
							>
								{discount ? getPriceWIthDiscount(price, discount) : price}
								&nbsp;₽
							</span>
						)}
					</div>
					<span className='card__wight'>{wight}</span>
					<h3 className='card__name'>{name}</h3>
				</div>
			</Link>
			{available && (
				<a href='/' className='card__cart card__btn card__btn_type_primary'>
					В корзину
				</a>
			)}
		</article>
	)
}

export default Card
