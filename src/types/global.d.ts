export {}

declare global {
	interface Comment {
		_id: string
		text: string
		author?: User
		post?: Post
		updated_at?: string
		created_at?: string
	}

	interface Post {
		image: string
		likes: string[]
		comments: Comment[]
		tags: string[]
		isPublished?: boolean
		_id: string
		title: string
		author: User
		text: string
		created_at?: string
		updated_at?: string
		__v?: number
	}

	interface User {
		name: string
		about: string
		avatar: string
		_id: string
		email: string
		__v?: number
		group?: string
	}

	type PostLikeParam = {
		_id: string
		likes: string[]
	}

	interface Product {
		name: string
		price: number
		description: string
		discount?: number
		stock?: number
		available?: boolean
		pictures?: string
		likes?: User[]
		reviews?: Review[]
		tags?: string[]
		isPublished?: boolean
		_id?: string
		author?: User
		wight?: string
		created_at?: string
		updated_at?: string
	}

	interface Review {
		name?: string
		city?: string
		text: string
		rating?: number
		author?: User
		_id: string
		created_at?: string
		updated_at?: string
	}
}
