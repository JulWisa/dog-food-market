import { GET_USER } from '../types/userTypes'

const initialState = {}

export function userReducers(state = initialState, action: any) {
	switch (action.type) {
		case GET_USER:
			return { ...state }
		default:
			return state
	}
}
export default userReducers
