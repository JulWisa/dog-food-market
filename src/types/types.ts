export type TCardsProps = {
	data: Product[]
	loading: boolean
	user?: User | null
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
	user?: User | null
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

export type TFavoriteButtonProps = {
	productId?: string
	likes?: User[]
	userId?: string
}

export type TReviewsProps = {
	product?: Product
}

export type TReviewProps = {
	data: Review
}

export type TRatingProps = {
	rating?: number
}
