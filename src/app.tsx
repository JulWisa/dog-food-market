import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Sort from './sort/Sort'
import Spinner from './spinner/Spinner'
import Cards from './cards/Cards'
import jsonData from '../assets/data.json'

const App = () => {
	return (
		<>
			<Header />
			<Sort />
			<Cards data={jsonData} />
			<Footer />
		</>
	)
}

export default App
