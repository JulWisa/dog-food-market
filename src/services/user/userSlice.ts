import { SerializedError, createSlice } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '../hooks'
import { UserEditBodyDto } from '../../api'

export const sliceName = 'user'

type TUserState = {
	data: User | null
	loading: boolean
	error: SerializedError | null | unknown
}

const initialState: TUserState = {
	data: null,
	loading: false,
	error: null,
}

export const fetchEditedUser = createAppAsyncThunk<User, UserEditBodyDto>(
	`${sliceName}/editedUser`,
	async function (dataUser, { fulfillWithValue, rejectWithValue, extra: api }) {
		try {
			const data = await api.setUserInfo(dataUser)
			if (data.name) {
				return fulfillWithValue(data)
			} else {
				return rejectWithValue(data)
			}
		} catch (err) {
			return rejectWithValue(err)
		}
	}
)

export const fetchUser = createAppAsyncThunk<User>(
	`${sliceName}/fetchUser`,
	async function (_, { fulfillWithValue, rejectWithValue, extra: api }) {
		try {
			const data = await api.getUserInfo()
			return fulfillWithValue(data)
		} catch (err) {
			return rejectWithValue(err)
		}
	}
)
const userSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.data = action.payload
				state.loading = false
			})
			.addCase(fetchEditedUser.fulfilled, (state, action) => {
				state.data = action.payload
				state.loading = false
			})
			.addCase(fetchUser.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchUser.rejected, (state, action) => {
				state.error = action.payload
				state.loading = false
			})
		.addCase(fetchEditedUser.pending, (state) => {
			state.loading = true
			state.error = null
		})
		.addCase(fetchEditedUser.rejected, (state, action) => {
			state.error = action.payload
			state.loading = false
		})
	},
})
export default userSlice.reducer
