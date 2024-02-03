import { SerializedError, createSlice } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '../hooks'
import { TProductsResponseDto } from '../../api'

export const sliceName = 'products'

type TProductsState = {
	data: TProductsResponseDto | null
	loading: boolean
	error: SerializedError | null | unknown
}

const initialState: TProductsState = {
	data: null,
	loading: false,
	error: null,
}

export const fetchProducts = createAppAsyncThunk<TProductsResponseDto, string>(
	`${sliceName}/fetchProducts`,
	async function (
		searchParams,
		{ fulfillWithValue, rejectWithValue, extra: api }
	) {
		try {
			const data = await api.getProductsList(searchParams)
			return fulfillWithValue(data)
		} catch (err) {
			return rejectWithValue(err)
		}
	}
)
const productsSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.data = action.payload
				state.loading = false
			})
			.addCase(fetchProducts.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.error = action.payload
				state.loading = false
			})
	},
})

export default productsSlice.reducer
