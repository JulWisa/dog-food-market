import React, { BaseSyntheticEvent, useState } from 'react'
import './Search.css'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [query, setQuery] = useState('')
	const handleSearch = (event: BaseSyntheticEvent) => {
		event.preventDefault()
		searchParams.set('query', query)
		setSearchParams(searchParams)
	}
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
			<button className='search__btn' onClick={handleSearch}>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
					onClick={handleSearch}
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M19.0568 20C19.6091 20 20 19.5792 20 19.0405C20 18.788 19.915 18.5523 19.7281 18.3672L15.726 14.3945C16.5672 13.3004 17.0685 11.9453 17.0685 10.4724C17.0685 6.91215 14.1285 4 10.5343 4C6.93999 4 4 6.91215 4 10.4724C4 14.0326 6.93999 16.9448 10.5343 16.9448C11.9533 16.9448 13.2618 16.4903 14.3324 15.7328L18.3601 19.7223C18.547 19.9074 18.7934 20 19.0568 20ZM10.5343 15.5476C7.73022 15.5476 5.41052 13.2499 5.41052 10.4724C5.41052 7.6949 7.73022 5.39716 10.5343 5.39716C13.3383 5.39716 15.658 7.6949 15.658 10.4724C15.658 13.2499 13.3383 15.5476 10.5343 15.5476Z'
					></path>
				</svg>
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
