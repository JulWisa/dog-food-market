import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PATH_NAME } from '../consts'
import './BackLink.css'

const BackLink = () => {
	const [backLink, setBackLink] = useState(PATH_NAME.BASE)
	const location = useLocation()

	useEffect(() => {
		if (location.state) setBackLink(location.state.prevLocation.pathname)
	}, [location])

	return (
		<Link to={backLink} className='button-back'>
			<svg
				width='14'
				height='14'
				viewBox='0 0 14 14'
				xmlns='http://www.w3.org/2000/svg'
				className='icon-back'
			>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M8.78943 11.0827C9.09566 11.0827 9.33334 10.8433 9.33334 10.5395C9.33334 10.3875 9.27392 10.2494 9.16879 10.1436L5.96932 6.99475L9.16879 3.85514C9.27392 3.74926 9.33334 3.60655 9.33334 3.45923C9.33334 3.1554 9.09566 2.91602 8.78943 2.91602C8.64317 2.91602 8.51519 2.97126 8.41463 3.07254L4.85864 6.57122C4.73066 6.69091 4.66667 6.83823 4.66667 6.99935C4.66667 7.16047 4.73066 7.29858 4.85407 7.42287L8.41006 10.9262C8.51519 11.0274 8.64317 11.0827 8.78943 11.0827Z'
				></path>
			</svg>
			Назад
		</Link>
	)
}

export default BackLink
