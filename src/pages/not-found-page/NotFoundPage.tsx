import React from 'react'
const image: string = require('../../../assets/404.png')
import './NotFoundPage.css'

const NotFoundPage = () => {
	return <img src={image} alt='404' className='not-found-img' />
}

export default NotFoundPage
