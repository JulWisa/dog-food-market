import React from 'react'
import './Sort.css'

function Sort() {
	return (
		<div className='sort'>
			<a className='sort__link' href='#'>
				Сначала дешевые
			</a>
			<a className='sort__link' href='#'>
				Сначала дорогие
			</a>
			<a className='sort__link' href='#'>
				По скидке
			</a>
		</div>
	)
}

export default Sort
