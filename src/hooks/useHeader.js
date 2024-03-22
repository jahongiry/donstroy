import { useState } from 'react'

export function useHeader() {
	const [language, setLanguage] = useState("O'zbekcha")
	const [showDropLanguage, setShowDropLanguage] = useState(false)
	const [showSidebar, setShowSidebar] = useState(false)
	const handleChangeLanguage = language => {
		setLanguage(language)
	}
	return {
		language,
		setLanguage,
		showDropLanguage,
		setShowDropLanguage,
		showSidebar,
		setShowSidebar,
		handleChangeLanguage,
	}
}
