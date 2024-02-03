export type CardsPropsType = {
	data: CardType[]
}

export type CardType = {
	name: string
	price: number
	discount: number
	wight: string
	description: string
	isFavorite: boolean
	isCart: boolean
	available: boolean
	stock: number
	picture: string
}

export type CardPropsType = {
	data: Product
}

export type SearchPropsType = {
	onSearch: (filteredData: CardType[]) => void
	data: CardType[]
}

export type HeaderPropTypes = {
	onSearch?: (filteredData: CardType[]) => void
	data?: CardType[]
}

export type PagingPropsType = {
	itemsPerPage: number
	onChange: (index: number) => void
	data: any[]
}
