import { SerializedError, createSlice } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '../hooks'
import {
	LikedProductBodyDto,
	ProductBodyDto,
	ReviewedProductBodyDto,
	TProductResponseDto,
} from '../../api'

export const sliceName = 'product'

type TProductState = {
	data: TProductResponseDto | null
	loading: boolean
	error: SerializedError | null | unknown
}

const initialState: TProductState = {
	data: null,
	loading: false,
	error: null,
}

export const fetchProduct = createAppAsyncThunk<
	TProductResponseDto,
	ProductBodyDto
>(
	`${sliceName}/fetchProduct`,
	async function (
		productId,
		{ fulfillWithValue, rejectWithValue, extra: api }
	) {
		try {
			const data = await api.getProduct(productId)
			return fulfillWithValue(data)
		} catch (err) {
			return rejectWithValue(err)
		}
	}
)

export const fetchLikedProduct = createAppAsyncThunk<
	TProductResponseDto,
	LikedProductBodyDto
>(
	`${sliceName}/fetchLikedProduct`,
	async function (
		{ productId, like },
		{ fulfillWithValue, rejectWithValue, extra: api }
	) {
		try {
			const data = await api.changeLikeProductStatus(productId, like)
			return fulfillWithValue(data)
		} catch (err) {
			return rejectWithValue(err)
		}
	}
)

export const fetchReviewedProduct = createAppAsyncThunk<
	TProductResponseDto,
	ReviewedProductBodyDto
>(
	`${sliceName}/fetchReviewedProduct`,
	async function (
		{ productId, reviewData },
		{ fulfillWithValue, rejectWithValue, extra: api }
	) {
		try {
			const data = await api.addReview(productId, reviewData)
			return fulfillWithValue(data)
		} catch (err) {
			return rejectWithValue(err)
		}
	}
)

const productSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProduct.fulfilled, (state, action) => {
				state.data = action.payload
				state.loading = false
			})
			.addCase(fetchProduct.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchProduct.rejected, (state, action) => {
				state.error = action.payload
				state.loading = false
			})
			.addCase(fetchLikedProduct.fulfilled, (state, action) => {
				state.data = action.payload
				state.loading = false
			})
			.addCase(fetchLikedProduct.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchLikedProduct.rejected, (state, action) => {
				state.error = action.payload
				state.loading = false
			})
			.addCase(fetchReviewedProduct.fulfilled, (state, action) => {
				state.data = action.payload
				state.loading = false
			})
			.addCase(fetchReviewedProduct.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchReviewedProduct.rejected, (state, action) => {
				state.error = action.payload
				state.loading = false
			})
	},
})

export default productSlice.reducer
