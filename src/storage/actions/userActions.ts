import { GET_USER } from '../types/userTypes'

export function getUser(userId: string) {
	return {
		type: GET_USER,
		userId,
	}
}
