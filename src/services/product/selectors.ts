import { RootState } from '../types'
import { sliceName } from './productSlice'

export const selectProduct = (state: RootState) => state[sliceName].data
export const selectProductLoading = (state: RootState) =>
	state[sliceName].loading
