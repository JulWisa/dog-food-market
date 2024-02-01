import React, { useState } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Sort from './sort/Sort'
import Cards from './cards/Cards'
import jsonData from '../assets/data.json'

const App = () => {
	const [filteredData, setFilteredData] = useState(jsonData)
	return (
		<>
			<Header data={jsonData} onSearch={setFilteredData} />
			<Sort />
			<Cards data={filteredData} />
			<Footer />
		</>
	)
}

export default App
