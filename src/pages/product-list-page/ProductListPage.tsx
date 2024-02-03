import React, { useEffect, useState } from 'react'
import jsonData from '../../../assets/data.json'
import { ITEMS_PER_PAGE } from '../../consts'
import Header from '../../header/Header'
import Sort from '../../sort/Sort'
import Paging from '../../paging/Paging'
import Cards from '../../cards/Cards'
import Footer from '../../footer/Footer'
import { useAppDispath, useAppSelector } from '../../services/hooks'
import { TProductsResponseDto } from '../../api'
import {
	selectProducts,
	selectProductsLoading,
} from '../../services/products/selectors'
import { fetchProducts } from '../../services/products/productsSlice'
import { useParams } from 'react-router-dom'
import { selectUser } from '../../services/user/selectors'
import { fetchUser } from '../../services/user/userSlice'

const ProductListPage = () => {
	const dispatch = useAppDispath()
	const user = useAppSelector(selectUser)
	const data: TProductsResponseDto | null = useAppSelector(selectProducts)
	const loading = useAppSelector(selectProductsLoading)

	const { query } = useParams()

	useEffect(() => {
		dispatch(fetchProducts())
		dispatch(fetchUser())
	}, [])

	useEffect(() => {
		console.log(data)
	}, [data])

	const handleSearch = (prps: any) => {
		console.log(prps)
		// dispatch(fetchProducts()).then(console.log)
	}

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
			<Header data={data?.products || []} onSearch={handleSearch} />
			<Sort />
			<Cards data={data?.products || []} loading={loading} user={user} />
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
