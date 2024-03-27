// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'
// import MAIN_URL from '../urls/MainUrl'

// export const fetchStudents = createAsyncThunk(
// 	'student/fetchStudentDetails',
// 	async () => {
// 		const response = await axios.get(`${MAIN_URL}/students`)
// 		console.log(response.data)
// 		return response.data
// 	}
// )
// export const fetchStudentDetails = createAsyncThunk(
// 	'student/fetchStudentDetails',
// 	async id => {
// 		const response = await axios.get(`${MAIN_URL}/students/${id}`)
// 		console.log(response.data)
// 		return response.data
// 	}
// )

// const initialState = {
// 	student: null,
// 	loading: false,
// 	error: null,
// }

// const studentSlice = createSlice({
// 	name: 'student',
// 	initialState,
// 	reducers: {},
// 	extraReducers: builder => {
// 		builder
// 			.addCase(fetchStudentDetails.pending, state => {
// 				state.loading = true
// 				state.error = null
// 			})
// 			.addCase(fetchStudentDetails.fulfilled, (state, action) => {
// 				state.loading = false
// 				state.student = action.payload
// 			})
// 			.addCase(fetchStudentDetails.rejected, (state, action) => {
// 				state.loading = false
// 				state.error = action.error.message
// 			})
// 	},
// })

// export default studentSlice.reducer

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import MAIN_URL from '../urls/MainUrl'

export const fetchStudents = createAsyncThunk(
	'student/fetchStudents',
	async () => {
		const response = await axios.get(`${MAIN_URL}/students`)
		console.log(response.data)
		return response.data
	}
)

export const fetchStudentDetails = createAsyncThunk(
	'student/fetchStudentDetails',
	async id => {
		const response = await axios.get(`${MAIN_URL}/students/${id}`)
		console.log(response.data)
		return response.data
	}
)

const initialState = {
	student: null,
	loading: false,
	error: null,
}

const studentSlice = createSlice({
	name: 'student',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchStudentDetails.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchStudentDetails.fulfilled, (state, action) => {
				state.loading = false
				state.student = action.payload
			})
			.addCase(fetchStudentDetails.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message
			})
			.addCase(fetchStudents.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchStudents.fulfilled, (state, action) => {
				state.loading = false
				state.student = action.payload
			})
			.addCase(fetchStudents.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message
			})
	},
})

export default studentSlice.reducer
