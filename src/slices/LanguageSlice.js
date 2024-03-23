// // LanguageSlice.js
// import { createSlice } from '@reduxjs/toolkit'
// import kril from '../locales/kril.json'
// import lotin from '../locales/lotin.json'
// import ru from '../locales/ru.json'

// const getInitialLanguage = () => {
// 	const defaultLanguage = navigator.language
// 	const savedLang = localStorage.getItem('languagePreference')
// 	if (savedLang) {
// 		return savedLang
// 	} else {
// 		const initialLanguage = defaultLanguage.startsWith('ru') ? 'ru' : 'kril'
// 		localStorage.setItem('languagePreference', initialLanguage)
// 		return initialLanguage
// 	}
// }

// const initialState = {
// 	currentLanguage: getInitialLanguage(),
// 	translations: getInitialLanguage() === 'kril' ? kril : ru,
// }

// const languages = { kril, lotin, ru }

// export const languageSlice = createSlice({
// 	name: 'language',
// 	initialState,
// 	reducers: {
// 		switchLanguage: state => {
// 			const langOrder = ['kril', 'lotin', 'ru']
// 			const currentIndex = langOrder.indexOf(state.currentLanguage)
// 			const newLangIndex = (currentIndex + 1) % langOrder.length
// 			const newLang = langOrder[newLangIndex]
// 			state.currentLanguage = newLang
// 			state.translations = languages[newLang]
// 			localStorage.setItem('languagePreference', newLang)
// 		},
// 	},
// })

// export const { switchLanguage } = languageSlice.actions

// export const selectCurrentLanguage = state => state.language.currentLanguage
// export const selectTranslations = state => state.language.translations

// export default languageSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import kril from '../locales/kril.json'
import lotin from '../locales/lotin.json'
import ru from '../locales/ru.json'

const getInitialLanguage = () => {
	const defaultLanguage = navigator.language
	const savedLang = localStorage.getItem('languagePreference')
	if (savedLang) {
		return savedLang
	} else {
		const initialLanguage = defaultLanguage.startsWith('kril') ? 'ru' : 'kril'
		localStorage.setItem('languagePreference', initialLanguage)
		return initialLanguage
	}
}

const initialState = {
	currentLanguage: getInitialLanguage(),
	translations: getInitialLanguage() === 'kril' ? kril : ru,
}

const languages = { kril, lotin, ru }

export const languageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		switchLanguage: (state, action) => {
			state.currentLanguage = action.payload
			state.translations = languages[action.payload]
			localStorage.setItem('languagePreference', action.payload)
		},
	},
})

export const { switchLanguage } = languageSlice.actions

export const selectCurrentLanguage = state => state.language.currentLanguage
export const selectTranslations = state => state.language.translations

export default languageSlice.reducer
