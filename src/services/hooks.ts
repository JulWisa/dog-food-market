import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import Api from '../api'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispath = () => useDispatch<AppDispatch>()

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
	state: RootState
	dispatch: AppDispatch
	extra: typeof Api
}>()
