import { useState } from 'react'

export function useHeader() {
	const [language, setLanguage] = useState("O'zbekcha")
	const [showSidebar, setShowSidebar] = useState(false)
	const handleChangeLanguage = language => {
		setLanguage(language)
	}
	return {
		language,
		setLanguage,
		showSidebar,
		setShowSidebar,
		handleChangeLanguage,
	}
}
