import React, { useEffect, useState } from 'react'
import jsonData from '../../../assets/data.json'
import { ITEMS_PER_PAGE } from '../../consts'
import Header from '../../header/Header'
import Sort from '../../sort/Sort'
import Paging from '../../paging/Paging'
import Cards from '../../cards/Cards'
import Footer from '../../footer/Footer'

const ProductListPage = () => {
	// filter + pagination
	const [filteredData, setFilteredData] = useState(jsonData)
	const [pageData, setPageData] = useState(filteredData)
	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
		setCurrentPage(1)
	}, [filteredData])

	useEffect(() => {
		const start = (currentPage - 1) * ITEMS_PER_PAGE
		const end = currentPage * ITEMS_PER_PAGE
		const newPageData = filteredData.slice(start, end)

		setPageData(newPageData)
	}, [filteredData, currentPage])

	return (
		<>
			<Header data={jsonData} onSearch={setFilteredData} />
			<Sort />
			<Cards data={pageData} />
			<Paging
				itemsPerPage={ITEMS_PER_PAGE}
				onChange={setCurrentPage}
				data={filteredData}
			/>
			<Footer />
		</>
	)
}

export default ProductListPage
