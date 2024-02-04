import React, { useEffect } from 'react'
import Logo from '../logo/Logo'
import Search from '../search/Search'
import './Header.css'
import { HeaderPropTypes } from '../types/types'
import { PATH_NAME } from '../consts'
import { Link } from 'react-router-dom'
import { useAppDispath, useAppSelector } from '../services/hooks'
import { selectUser } from '../services/user/selectors'
import { fetchUser } from '../services/user/userSlice'
import { selectCartElements } from '../services/cart/selectors'

const Header = ({ data, onSearch }: HeaderPropTypes) => {
	const dispatch = useAppDispath()
	const user = useAppSelector(selectUser)
	const cartProducts = useAppSelector(selectCartElements)

	// TODO вынести в app
	useEffect(() => {
		if (!user) dispatch(fetchUser())
	}, [user])

	return (
		<header className='header'>
			<div className='container header__wrapper'>
				<span className='undefined logo'>
					<Logo />
				</span>
				{onSearch && data && <Search />}
				<div className='header__icons-menu'>
					<Link className='header__favorites-link' to={PATH_NAME.FAVORITES}>
						<svg
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M12 21C12.2115 21 12.5136 20.8627 12.7351 20.7353C18.4048 17.2059 22 13.098 22 8.92157C22 5.45098 19.5529 3 16.29 3C14.427 3 12.9164 3.86275 12 5.18627C11.1037 3.87255 9.57301 3 7.70997 3C4.44713 3 2 5.45098 2 8.92157C2 13.098 5.59517 17.2059 11.2749 20.7353C11.4864 20.8627 11.7885 21 12 21ZM12 19.3431C11.9597 19.3431 11.8892 19.2941 11.7986 19.2255C7.57905 16.5 3.62135 12.5686 3.62135 8.92157C3.62135 6.31373 5.35347 4.57843 7.68983 4.57843C9.58308 4.57843 10.6707 5.72549 11.3152 6.70588C11.5871 7.09804 11.7583 7.20588 12 7.20588C12.2417 7.20588 12.3927 7.08824 12.6848 6.70588C13.3797 5.7451 14.427 4.57843 16.3102 4.57843C18.6465 4.57843 20.3787 6.31373 20.3787 8.92157C20.3787 12.5686 16.4209 16.5 12.2115 19.2255C12.1108 19.2941 12.0403 19.3431 12 19.3431Z'
								fill='#1A1A1A'
							></path>
						</svg>
						<span className='header__icon-bubble'>4</span>
					</Link>
					<Link className='header__favorites-link' to={PATH_NAME.CART}>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M18.12 22C19.9352 22 21 20.9824 21 18.9667V8.83953C21 6.82387 19.9251 5.80626 17.8158 5.80626H16.1932C16.1425 3.75147 14.2868 2 11.9949 2C9.7031 2 7.84732 3.75147 7.79662 5.80626H6.18423C4.06479 5.80626 3 6.81409 3 8.83953V18.9667C3 20.9922 4.06479 22 6.18423 22H18.12ZM14.5606 5.80626H9.4293C9.48 4.52446 10.5651 3.48728 11.9949 3.48728C13.4248 3.48728 14.5099 4.52446 14.5606 5.80626ZM18.0896 20.4247H6.20451C5.19042 20.4247 4.63268 19.9061 4.63268 18.8885V8.91781C4.63268 7.9002 5.19042 7.3816 6.20451 7.3816H17.7854C18.7893 7.3816 19.3673 7.9002 19.3673 8.91781V18.8885C19.3673 19.9061 18.7893 20.4247 18.0896 20.4247Z'
								fill='#1A1A1A'
							></path>
						</svg>
						<span className='header__icon-bubble'>{cartProducts.length}</span>
					</Link>
					<Link className='header__icons-menu-item' to={PATH_NAME.USER}>
						<img
							src={user?.avatar}
							alt={user?.name || 'user avatar'}
							className='user-avatar'
						/>
						{user?.name}
					</Link>
					<a className='header__icons-menu-item' href='/'>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M11.0532 2.15287C13.6802 1.90928 15.8794 2.60602 17.999 4.11687C18.7787 4.67269 19.6401 6.16805 20.6778 5.64041C21.2472 5.35087 21.3408 4.69973 21.0523 4.17067C20.7952 3.69897 20.3338 3.36048 19.9303 3.02114C16.05 -0.242644 10.9252 -0.992323 6.37474 1.41333C-2.70893 6.2155 -1.91 19.4723 7.65239 23.1933C11.1893 24.5696 15.2622 24.1666 18.4545 22.1237C19.0985 21.7116 20.4499 20.6784 20.8945 20.0902C21.8206 18.8651 20.5225 17.6553 19.3403 18.643C18.9226 18.9921 18.6423 19.4221 18.191 19.7653C15.663 21.6878 12.5612 22.4149 9.45804 21.5927C4.76679 20.3499 1.69 15.9672 2.10513 11.1385C2.51418 6.38089 6.28812 2.59475 11.0531 2.15295L11.0532 2.15287Z'
							></path>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M20.3858 10.9702C18.4547 10.9496 16.5183 10.9778 14.5863 10.9669C13.6309 10.9615 12.671 10.9652 11.7153 10.9665C10.9588 10.9675 9.86473 10.892 9.86037 11.9983C9.856 13.1147 10.9126 13.0528 11.6815 13.0514C12.6493 13.0498 13.6186 13.0489 14.5863 13.0515C16.5206 13.0568 18.4585 13.0371 20.3921 13.0538C19.891 13.6205 18.7513 14.5558 18.3994 15.0945C17.7433 16.0993 19.0386 17.3929 20.1226 16.3073C20.797 15.6319 21.4755 14.9614 22.1489 14.2855C22.6336 13.7991 23.975 12.7158 23.9992 12.0603C24.021 11.469 23.6051 11.1971 23.232 10.8192C22.8982 10.4811 22.5585 10.1403 22.2192 9.80831C21.5322 9.1359 20.8608 8.44494 20.1763 7.7694C18.9998 6.60824 17.8164 7.93814 18.367 8.86677C18.7001 9.42858 19.8933 10.3663 20.3858 10.9702L20.3858 10.9702Z'
							></path>
						</svg>
						Выйти
					</a>
				</div>
			</div>
		</header>
	)
}

export default Header
