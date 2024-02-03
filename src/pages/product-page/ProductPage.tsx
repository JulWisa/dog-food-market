import React, { useEffect } from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import './ProductPage.css'
import BackLink from '../../back-link/BackLink'
import { useAppDispath, useAppSelector } from '../../services/hooks'
import { TProductResponseDto } from '../../api'
import {
	selectProduct,
	// selectProductLoading,
} from '../../services/product/selectors'
import { fetchProduct } from '../../services/product/productSlice'
import { useParams } from 'react-router-dom'
import { getPriceWIthDiscount } from '../../utils'
import Spinner from '../../spinner/Spinner'
import Reviews from '../../reviews/Reviews'

const ProductPage = () => {
	const dispatch = useAppDispath()
	const data: TProductResponseDto | null = useAppSelector(selectProduct)
	const { id } = useParams()
	// const loading = useAppSelector(selectProductLoading)

	useEffect(() => {
		dispatch(fetchProduct(id as string))
	}, [])

	useEffect(() => {
		console.log(data)
	}, [data])

	if (!data) return <Spinner />

	const {
		price,
		name,
		_id,
		discount,
		pictures,
		description,
		available,
		wight,
		created_at,
		isPublished,
		stock,
	} = data

	return (
		<>
			<Header />
			<main className='main' style={{ backgroundColor: '#FFFFFF' }}>
				<div className='content container'>
					<BackLink />
					<h1 className='header-title'>{name}</h1>
					<p className='acticul'>
						Артикул: <b>{_id}</b>
					</p>
					<div>
						<span>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='#CFD8DC'
								xmlns='http://www.w3.org/2000/svg'
								className='star rating-filled'
							>
								<path d='M12.1108 14.2238C12.357 14.0388 12.411 13.7344 12.2609 13.3047L11.0061 9.58649L14.2121 7.30066C14.5844 7.03806 14.7345 6.75756 14.6384 6.46511C14.5424 6.17267 14.2602 6.02943 13.7979 6.0354L9.86538 6.06524L8.67062 2.32914C8.52652 1.89346 8.31039 1.66667 7.99819 1.66667C7.69199 1.66667 7.47586 1.89346 7.33177 2.32914L6.13701 6.06524L2.2045 6.0354C1.74221 6.02943 1.46003 6.17267 1.36397 6.46511C1.26191 6.75756 1.418 7.03806 1.79024 7.30066L4.99628 9.58649L3.74148 13.3047C3.59139 13.7344 3.64542 14.0388 3.89158 14.2238C4.13773 14.4148 4.44993 14.3491 4.82217 14.0806L7.99819 11.7589L11.1802 14.0806C11.5524 14.3491 11.8586 14.4148 12.1108 14.2238Z'></path>
							</svg>
						</span>

						<span>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='#CFD8DC'
								xmlns='http://www.w3.org/2000/svg'
								className='star rating-filled'
							>
								<path d='M12.1108 14.2238C12.357 14.0388 12.411 13.7344 12.2609 13.3047L11.0061 9.58649L14.2121 7.30066C14.5844 7.03806 14.7345 6.75756 14.6384 6.46511C14.5424 6.17267 14.2602 6.02943 13.7979 6.0354L9.86538 6.06524L8.67062 2.32914C8.52652 1.89346 8.31039 1.66667 7.99819 1.66667C7.69199 1.66667 7.47586 1.89346 7.33177 2.32914L6.13701 6.06524L2.2045 6.0354C1.74221 6.02943 1.46003 6.17267 1.36397 6.46511C1.26191 6.75756 1.418 7.03806 1.79024 7.30066L4.99628 9.58649L3.74148 13.3047C3.59139 13.7344 3.64542 14.0388 3.89158 14.2238C4.13773 14.4148 4.44993 14.3491 4.82217 14.0806L7.99819 11.7589L11.1802 14.0806C11.5524 14.3491 11.8586 14.4148 12.1108 14.2238Z'></path>
							</svg>
						</span>
						<span>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='#CFD8DC'
								xmlns='http://www.w3.org/2000/svg'
								className='star rating-filled'
							>
								<path d='M12.1108 14.2238C12.357 14.0388 12.411 13.7344 12.2609 13.3047L11.0061 9.58649L14.2121 7.30066C14.5844 7.03806 14.7345 6.75756 14.6384 6.46511C14.5424 6.17267 14.2602 6.02943 13.7979 6.0354L9.86538 6.06524L8.67062 2.32914C8.52652 1.89346 8.31039 1.66667 7.99819 1.66667C7.69199 1.66667 7.47586 1.89346 7.33177 2.32914L6.13701 6.06524L2.2045 6.0354C1.74221 6.02943 1.46003 6.17267 1.36397 6.46511C1.26191 6.75756 1.418 7.03806 1.79024 7.30066L4.99628 9.58649L3.74148 13.3047C3.59139 13.7344 3.64542 14.0388 3.89158 14.2238C4.13773 14.4148 4.44993 14.3491 4.82217 14.0806L7.99819 11.7589L11.1802 14.0806C11.5524 14.3491 11.8586 14.4148 12.1108 14.2238Z'></path>
							</svg>
						</span>
						<span>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='#CFD8DC'
								xmlns='http://www.w3.org/2000/svg'
								className='star rating-filled'
							>
								<path d='M12.1108 14.2238C12.357 14.0388 12.411 13.7344 12.2609 13.3047L11.0061 9.58649L14.2121 7.30066C14.5844 7.03806 14.7345 6.75756 14.6384 6.46511C14.5424 6.17267 14.2602 6.02943 13.7979 6.0354L9.86538 6.06524L8.67062 2.32914C8.52652 1.89346 8.31039 1.66667 7.99819 1.66667C7.69199 1.66667 7.47586 1.89346 7.33177 2.32914L6.13701 6.06524L2.2045 6.0354C1.74221 6.02943 1.46003 6.17267 1.36397 6.46511C1.26191 6.75756 1.418 7.03806 1.79024 7.30066L4.99628 9.58649L3.74148 13.3047C3.59139 13.7344 3.64542 14.0388 3.89158 14.2238C4.13773 14.4148 4.44993 14.3491 4.82217 14.0806L7.99819 11.7589L11.1802 14.0806C11.5524 14.3491 11.8586 14.4148 12.1108 14.2238Z'></path>
							</svg>
						</span>
						<span>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='#CFD8DC'
								xmlns='http://www.w3.org/2000/svg'
								className='star rating-filled'
							>
								<path d='M12.1108 14.2238C12.357 14.0388 12.411 13.7344 12.2609 13.3047L11.0061 9.58649L14.2121 7.30066C14.5844 7.03806 14.7345 6.75756 14.6384 6.46511C14.5424 6.17267 14.2602 6.02943 13.7979 6.0354L9.86538 6.06524L8.67062 2.32914C8.52652 1.89346 8.31039 1.66667 7.99819 1.66667C7.69199 1.66667 7.47586 1.89346 7.33177 2.32914L6.13701 6.06524L2.2045 6.0354C1.74221 6.02943 1.46003 6.17267 1.36397 6.46511C1.26191 6.75756 1.418 7.03806 1.79024 7.30066L4.99628 9.58649L3.74148 13.3047C3.59139 13.7344 3.64542 14.0388 3.89158 14.2238C4.13773 14.4148 4.44993 14.3491 4.82217 14.0806L7.99819 11.7589L11.1802 14.0806C11.5524 14.3491 11.8586 14.4148 12.1108 14.2238Z'></path>
							</svg>
						</span>
					</div>
					<div className='product'>
						<div className='product__img-wrapper'>
							<img src={pictures} alt={name} />
						</div>
						<div className='product__desc'>
							<div className='price-big price-wrap'>
								<span className='price_old price_left'>{price}&nbsp;₽</span>
								<span className='price_discount price'>
									{discount ? getPriceWIthDiscount(price, discount) : price}
									&nbsp;₽
								</span>
							</div>
							<div className='product__btn-wrap'>
								<div className='button-count'>
									<button className='button-count__minus' disabled={true}>
										-
									</button>
									<input
										type='number'
										className='button-count__num'
										value='0'
									/>
									<button className='button-count__plus'>+</button>
								</div>
								<a href='/cart' className='button button_type_primary'>
									В корзину
								</a>
							</div>
							<button className='product__favorite product__favorite_active'>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
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
								В избранном
							</button>
							<div className='product__delivery'>
								<img
									src='/images/truck.ea6acb9f2b133040e9f295fbb9f2a3ab.svg'
									alt='truck'
								/>
								<div className='product__right'>
									<h3 className='product__name'>Доставка по всему Миру!</h3>
									<p className='product__text'>
										Доставка курьером — <span className='bold'> от 399 ₽</span>
									</p>
									<p className='product__text'>
										Доставка в пункт выдачи —{' '}
										<span className='product__bold'> от 199 ₽</span>
									</p>
								</div>
							</div>
							<div className='product__delivery'>
								<img
									src='/images/quality.8eb6560a188790582a8aaddc99e116ea.svg'
									alt='quality'
								/>
								<div className='product__right'>
									<h3 className='product__name'>Гарантия качества</h3>
									<p className='product__text'>
										Если Вам не понравилось качество нашей продукции, мы вернем
										деньги, либо сделаем все возможное, чтобы удовлетворить ваши
										нужды.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='product__box'>
						<h2 className='product__title'>Описание</h2>
						<p className='product__subtitle'>{description}</p>
						<h2 className='product__title'>Характеристики</h2>
						<div className='product__grid'>
							<div className='product__naming'>Вес</div>
							<div className='product__description'>{wight}</div>
							<div className='product__naming'>Цена</div>
							<div className='product__description'>
								{price}₽ за {wight}
							</div>
						</div>
					</div>
					<Reviews product={data} />
				</div>
			</main>
			<Footer />
		</>
	)
}

export default ProductPage
