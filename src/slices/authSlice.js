import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import MAIN_URL from '../urls/MainUrl'

const initialState = {
	user: null,
	status: 'idle',
	error: null,
	token: null,
}

export const logIn = createAsyncThunk(
	'auth/logIn',
	async (credentials, thunkAPI) => {
		try {
			const response = await axios.post(`${MAIN_URL}/login`, credentials)
			if (response.data.token) {
				localStorage.setItem('token', response.data.token)
				console.log()(localStorage.setItem('token', response.data.token))
			}
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data)
		}
	}
)

export const checkLogIn = createAsyncThunk(
	'auth/checkLogIn',
	async (_, thunkAPI) => {
		const state = thunkAPI.getState()
		if (state.auth.user) {
			return state.auth.user
		}
		try {
			const token = localStorage.getItem('token')
			if (!token) {
				return thunkAPI.rejectWithValue('No token found, user not logged in')
			}
			const userResponse = await axios.get('/profile', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			return userResponse.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.detail)
		}
	}
)
export const logOutUser = createAsyncThunk('auth/logOutUser', async () => {
	localStorage.removeItem('token')
	return 'Logged out successfully'
})

export const selectCurrentUser = state => state.auth.user
export const errorState = state => state.auth.error
