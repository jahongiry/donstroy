import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './slices/LanguageSlice'

export const store = configureStore({
	reducer: {
		language: languageReducer,
	},
})
