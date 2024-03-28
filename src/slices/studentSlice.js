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

export const addStudent = createAsyncThunk(
	'student/addStudent',
	async (studentData, { rejectWithValue }) => {
		try {
			console.log('studentData', studentData)
			const token = localStorage.getItem('token')
			if (!token) {
				throw new Error('Token not found')
			}
			console.log(studentData)
			const response = await axios.post(`${MAIN_URL}/students`, studentData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})

			return response.data
		} catch (error) {
			return rejectWithValue(
				error.response ? error.response.data.message : error.message
			)
		}
	}
)

export const deleteStudent = createAsyncThunk(
	'student/deleteStudent',
	async (id, { rejectWithValue }) => {
		try {
			const token = localStorage.getItem('token')
			if (!token) {
				throw new Error('Token not found')
			}

			await axios.delete(`${MAIN_URL}/students/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})

			return id
		} catch (error) {
			return rejectWithValue(
				error.response ? error.response.data.message : error.message
			)
		}
	}
)

const initialState = {
	student: [],
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
			.addCase(deleteStudent.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(deleteStudent.fulfilled, (state, action) => {
				state.loading = false
				state.student = state.student.filter(
					student => student.id !== action.payload
				)
			})
			.addCase(deleteStudent.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message
			})
			.addCase(addStudent.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(addStudent.fulfilled, (state, action) => {
				state.loading = false
				state.student.push(action.payload) // Now state.student is an array, so push works
			})
			.addCase(addStudent.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
	},
})

export default studentSlice.reducer
