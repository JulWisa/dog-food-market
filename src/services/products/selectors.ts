import { RootState } from '../types'
import { sliceName } from './productsSlice'

export const selectProducts = (state: RootState) => state[sliceName].data
export const selectProductsLoading = (state: RootState) =>
	state[sliceName].loading
