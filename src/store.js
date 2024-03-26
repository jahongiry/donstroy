import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './slices/LanguageSlice'
import studentSlice from './slices/studentSlice'

export const store = configureStore({
	reducer: {
		// auth: AuthSlice,
		language: languageReducer,
		student: studentSlice,
	},
})
