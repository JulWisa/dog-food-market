import { RootState } from '../types'
import { sliceName } from './cartSlice'

export const selectCartElements = (state: RootState) => state[sliceName].data
