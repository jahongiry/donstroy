import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentLanguage } from '../slices/LanguageSlice'
export function useLanguageSwitcher() {
	const dispatch = useDispatch()
	const currentLanguage = useSelector(selectCurrentLanguage)
	const [showDropdown, setShowDropdown] = useState(false)

	const handleDropdownClick = () => {
		setShowDropdown(!showDropdown)
	}

	const languageOptions = [
		{ value: 'ru', label: 'Русский' },
		{ value: 'kril', label: 'Кириллча' },
		{ value: 'lotin', label: 'Lotincha' },
	]

	const languages1 = 'ru'
	const languages2 = 'kril'
	const languages3 = 'lotin'

	let languageElement1 = null
	let languageElement2 = null
	let languageElement3 = null

	return {
		showDropdown,
		setShowDropdown,
		handleDropdownClick,
		languageElement1,
		languageElement2,
		languageElement3,
		languages1,
		languages2,
		languages3,
		currentLanguage,
	}
}
