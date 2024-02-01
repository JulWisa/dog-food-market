import React from 'react'
import './Logo.css'
const logo: string = require('../../assets/logo.svg').default

const Logo = () => {
	return <img src={logo} alt='Логотип компании' className='logo__pic' />
}

export default Logo
