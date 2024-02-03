import { config } from './config'

type TConfigApi = {
	baseUrl: string
	headers: HeadersInit
}

export type UserBodyDto = {
	about: string
	name: string
	avatar: string
}

export type TProductsResponseDto = {
	total: number
	products: Product[]
}

export type TProductResponseDto = Product

export type UserEditBodyDto = {
	about: string
	name: string
	avatar: string
}

export type ProductBodyDto = string

export type LikedProductBodyDto = { productId: string, like: boolean }

type ServerResponse<T> = {
	created_at?: Date
	updated_at?: Date
	__v: number
} & T

export type TUserResponseDto = ServerResponse<User>
export type TPostResponseDto = ServerResponse<Post>
export type TCommentResponseDto = ServerResponse<Comment>

class Api {
	private baseUrl
	private headers
	constructor({ baseUrl, headers }: TConfigApi) {
		this.baseUrl = baseUrl
		this.headers = headers
	}
	private onResponse(res: Response) {
		return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
	}
	private getApiUrl(path: string) {
		return `${this.baseUrl}${path}`
	}

	// User
	getUserInfo() {
		return fetch(this.getApiUrl('/users/me'), {
			headers: this.headers,
		}).then(this.onResponse)
	}

	// Products
	getProductsList() {
		return fetch(this.getApiUrl('/products?limit=15'), {
			headers: this.headers,
		}).then(this.onResponse)
	}

	// Product
	getProduct(productId: ProductBodyDto) {
		return fetch(this.getApiUrl(`/products/${productId}`), {
			headers: this.headers,
			method: 'GET',
		}).then(this.onResponse)
	}

	changeLikeProductStatus(productId: string, like: boolean) {
		return fetch(this.getApiUrl(`/products/likes/${productId}`), {
			method: like ? 'DELETE' : 'PUT',

			headers: this.headers,
		}).then(this.onResponse)
	}

	deleteProductById(productId: string) {
		return fetch(this.getApiUrl(`/products/${productId}`), {
			headers: this.headers,
			method: 'DELETE',
		}).then(this.onResponse)
	}

	getReviews() {
		return fetch(this.getApiUrl('/products/review/'), {
			headers: this.headers,
		}).then(this.onResponse)
	}
	getAllInfo() {
		return Promise.all([
			this.getProductsList(),
			this.getUserInfo(),
			this.getReviews(),
		])
	}

	search(searchQuery: string) {
		return fetch(this.getApiUrl(`/posts/search?query=${searchQuery}`), {
			headers: this.headers,
		}).then(this.onResponse)
	}

	setUserInfo(userData: Pick<User, 'name' | 'about'>) {
		return fetch(this.getApiUrl('/users/me'), {
			method: 'PATCH',
			headers: this.headers,
			body: JSON.stringify({
				name: userData?.name || '',
				about: userData?.about || '',
			}),
		}).then(this.onResponse)
	}

	changeLikePostStatus(postID: string, like: boolean) {
		return fetch(this.getApiUrl(`/posts/likes/${postID}`), {
			method: like ? 'DELETE' : 'PUT',

			headers: this.headers,
		}).then(this.onResponse)
	}
	getPostById(postID: string) {
		return fetch(this.getApiUrl(`/posts/${postID}`), {
			headers: this.headers,
		}).then(this.onResponse)
	}
	getPostComments(postID: string) {
		return fetch(this.getApiUrl(`/posts/comments/${postID}`), {
			headers: this.headers,
		}).then(this.onResponse)
	}
	getInfoPost(postID: string) {
		return Promise.all([this.getPostById(postID), this.getPostComments(postID)])
	}

	deletePostById(postID: string) {
		return fetch(this.getApiUrl(`/posts/${postID}`), {
			headers: this.headers,
			method: 'DELETE',
		}).then(this.onResponse)
	}
	addPost(postData: Pick<Post, 'image' | 'tags' | 'title' | 'text'>) {
		return fetch(this.getApiUrl('/posts'), {
			headers: this.headers,
			method: 'POST',
			body: JSON.stringify(postData),
		}).then(this.onResponse)
	}

	editPost(
		posID: string,
		postData: Pick<Post, 'image' | 'tags' | 'title' | 'text'>
	) {
		return fetch(this.getApiUrl(`/posts/${posID}`), {
			headers: this.headers,
			method: 'PATCH',
			body: JSON.stringify(postData),
		}).then(this.onResponse)
	}
	addComment(postID: string, commentData: Pick<Comment, 'text'>) {
		return fetch(this.getApiUrl(`/posts/comments/${postID}`), {
			headers: this.headers,
			method: 'POST',
			body: JSON.stringify(commentData),
		}).then(this.onResponse)
	}
	getUsers() {
		return fetch(this.getApiUrl('/users'), {
			headers: this.headers,
		}).then(this.onResponse)
	}
	changeUserAvatar(data: Pick<User, 'avatar'>) {
		return fetch(this.getApiUrl('/users/me/avatar'), {
			method: 'PATCH',
			headers: this.headers,
			body: JSON.stringify(data),
		}).then(this.onResponse)
	}
}

const api = new Api({
	baseUrl: config.apiUrl,
	headers: {
		'content-type': 'application/json',
		authorization: `Bearer ${config.apiToken}`,
	},
})

export default api
