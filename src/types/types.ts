export type TCardsProps = {
	data: Product[]
	loading: boolean
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
	onSearch: (searchString: string) => void
	data: Product[]
}

export type HeaderPropTypes = {
	onSearch?: (searchString: string) => void
	data?: Product[]
}

export type PagingPropsType = {
	itemsPerPage: number
	onChange: (index: number) => void
	data: any[]
}
