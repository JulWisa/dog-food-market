import React, { BaseSyntheticEvent, useEffect, useState } from 'react'
import './Search.css'
import { useSearchParams } from 'react-router-dom'
import { useDebounce } from '../hooks/useDebounce'

const Search = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [query, setQuery] = useState(() => {
		return searchParams.get('query') ?? ''
	})

	const optimizedValue = useDebounce({ value: { query }, delay: 1000 })

	useEffect(() => {
		setSearchParams(optimizedValue)
	}, [optimizedValue, setSearchParams])

	useEffect(() => {
		if (query) searchParams.set('query', query)
		else searchParams.delete('query')
	}, [query, searchParams, setSearchParams])

	const handleClear = (event: BaseSyntheticEvent) => {
		event.preventDefault()
		event.stopPropagation()
		searchParams.set('query', '')
		setQuery('')
		setSearchParams(searchParams)
	}

	return (
		<form className='search'>
			<input
				type='text'
				className='search__input'
				placeholder='Поиск'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button className='search__btn'>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
					onClick={handleClear}
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M12 20C16.3765 20 20 16.3765 20 12C20 7.63137 16.3686 4 11.9922 4C7.62353 4 4 7.63137 4 12C4 16.3765 7.63137 20 12 20Z'
					></path>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M14.8077 15.4822C14.6195 15.4822 14.4548 15.4038 14.3372 15.2861L11.9921 12.9332L9.6548 15.2861C9.53716 15.4116 9.37245 15.4822 9.18421 15.4822C8.82343 15.4822 8.52539 15.1842 8.52539 14.8156C8.52539 14.6352 8.59598 14.4783 8.72147 14.3607L11.0666 12.0077L8.72147 9.65477C8.59598 9.54497 8.52539 9.38026 8.52539 9.19987C8.52539 8.83909 8.82343 8.54889 9.18421 8.54889C9.37245 8.54889 9.52147 8.61948 9.63912 8.74497L11.9921 11.0901L14.3607 8.73712C14.494 8.59595 14.643 8.5332 14.8156 8.5332C15.1842 8.5332 15.4744 8.83124 15.4744 9.19203C15.4744 9.37242 15.4195 9.52144 15.2783 9.64693L12.9254 12.0077L15.2705 14.345C15.396 14.4705 15.4666 14.6273 15.4666 14.8156C15.4666 15.1842 15.1764 15.4822 14.8077 15.4822Z'
						fill='white'
					></path>
				</svg>
			</button>
		</form>
	)
}

export default Search
