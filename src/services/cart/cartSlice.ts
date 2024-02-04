import { createSlice } from '@reduxjs/toolkit'

export const sliceName = 'cart'

type CartElement = {
	product: Product
	count: number
}

type TCartState = {
	data: Product[]
}

const initialState: TCartState = {
	data: [],
}

const removeOneProduct = (array: Product[], id: string) => {
	const index = array.findIndex((el) => el._id === id)
	if (index > -1) array.splice(index, 1)

	return array
}

const cartSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		add: (state, action) => ({
			data: [...state.data, action.payload],
		}),
		remove: (state, action) => ({
			data: [...removeOneProduct([...state.data], action.payload._id)],
		}),
		removeAll: (state, action) => ({
			data: [...state.data.filter((prod) => prod._id !== action.payload._id)],
		}),
	},
})

export const { add, remove, removeAll } = cartSlice.actions

export default cartSlice.reducer
