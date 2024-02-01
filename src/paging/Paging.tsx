import React, { useEffect, useState } from 'react'
import { PagingPropsType } from '../types/types'
import './Paging.css'

const Paging = ({ itemsPerPage, onChange, data }: PagingPropsType) => {
	const [currentPage, setCurrentPage] = useState(1)
	const lastPageNumber = Math.floor(data.length / itemsPerPage)
	const pageNumbers = Array.from({ length: lastPageNumber }, (_, i) => i + 1)

	useEffect(() => {
		setCurrentPage(1)
	}, [data])

	return (
		<div>
			{pageNumbers.map((number) => (
				<button
					key={number}
					onClick={() => {
						onChange(number)
						setCurrentPage(number)
					}}
					className={`paging ${currentPage === number ? 'paging-current' : ''}`}
				>
					{number}
				</button>
			))}
		</div>
	)
}

export default Paging
