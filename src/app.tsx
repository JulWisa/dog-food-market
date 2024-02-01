import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Sort from './sort/Sort'
import Spinner from './spinner/Spinner'
import Cards from './cards/Cards'
import Card from './card/Card'

const App = () => {
	return (
		<>
			<Spinner />
			<Header />
			<Sort />
			<Cards>
				<Card />
				<Card />
				<Card />
			</Cards>
			<Footer />
		</>
	)
}

export default App
