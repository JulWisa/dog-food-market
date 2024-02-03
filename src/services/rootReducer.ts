import { combineReducers } from 'redux'
import userReducer from './user/userSlice'
import productsReducer from './products/productsSlice'
import productReducer from './product/productSlice'

export const rootReducer = combineReducers({
	user: userReducer,
	products: productsReducer,
	product: productReducer,
})
