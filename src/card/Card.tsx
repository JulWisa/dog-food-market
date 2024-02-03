import React from 'react'
import './Card.css'
import { CardPropsType } from '../types/types'
import { Link, useLocation } from 'react-router-dom'

const Card = ({
	data: { discount = 0, name, price, pictures, wight, available },
}: CardPropsType) => {
	const location = useLocation()

	return (
		<article className='card'>
			<div className='card__sticky card__sticky_type_top-left'>
				{!!discount && <span className='card__discount'>{discount}</span>}
				<span className='tag tag_type_new'>new</span>
				{!!discount && <span className='tag tag_type_sale'>sale</span>}
			</div>
			<div className='card__sticky card__sticky_type_top-right'>
				<button className='card__favorite card__favorite_is-active'>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
						className='card__favorite-icon'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M12 21C12.2115 21 12.5136 20.8627 12.7351 20.7353C18.4048 17.2059 22 13.098 22 8.92157C22 5.45098 19.5529 3 16.29 3C14.427 3 12.9164 3.86275 12 5.18627C11.1037 3.87255 9.57301 3 7.70997 3C4.44713 3 2 5.45098 2 8.92157C2 13.098 5.59517 17.2059 11.2749 20.7353C11.4864 20.8627 11.7885 21 12 21ZM12 19.3431C11.9597 19.3431 11.8892 19.2941 11.7986 19.2255C7.57905 16.5 3.62135 12.5686 3.62135 8.92157C3.62135 6.31373 5.35347 4.57843 7.68983 4.57843C9.58308 4.57843 10.6707 5.72549 11.3152 6.70588C11.5871 7.09804 11.7583 7.20588 12 7.20588C12.2417 7.20588 12.3927 7.08824 12.6848 6.70588C13.3797 5.7451 14.427 4.57843 16.3102 4.57843C18.6465 4.57843 20.3787 6.31373 20.3787 8.92157C20.3787 12.5686 16.4209 16.5 12.2115 19.2255C12.1108 19.2941 12.0403 19.3431 12 19.3431Z'
						></path>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M12 19.3432C11.9597 19.3432 11.8892 19.2942 11.7986 19.2255C7.57904 16.5001 3.62134 12.5687 3.62134 8.92163C3.62134 6.31379 5.35346 4.57849 7.68982 4.57849C9.58307 4.57849 10.6707 5.72555 11.3152 6.70594C11.5871 7.0981 11.7583 7.20594 12 7.20594C12.2417 7.20594 12.3927 7.08829 12.6848 6.70594C13.3796 5.74516 14.427 4.57849 16.3102 4.57849C18.6465 4.57849 20.3786 6.31379 20.3786 8.92163C20.3786 12.5687 16.4209 16.5001 12.2115 19.2255C12.1108 19.2942 12.0403 19.3432 12 19.3432Z'
						></path>
					</svg>
				</button>
			</div>
			<Link
				className='card__link'
				to='/product/622c779c77d63f6e70967d1c'
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
						<span
							className={`price_discount price card__price ${discount ? 'card__price_type_discount' : ''}`}
						>
							{Math.floor(price * (1 - discount * 0.01))}&nbsp;₽
						</span>
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
