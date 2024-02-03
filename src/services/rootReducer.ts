import { combineReducers } from 'redux'
import userReducer from './user/userSlice'
import productsReducer from './products/productsSlice'

export const rootReducer = combineReducers({
	user: userReducer,
	products: productsReducer,
})
