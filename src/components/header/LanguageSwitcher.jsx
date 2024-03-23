import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectCurrentLanguage,
	switchLanguage,
} from '../../slices/LanguageSlice'
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
	const dispatch = useDispatch()
	const currentLanguage = useSelector(selectCurrentLanguage)
	const [showDropdown, setShowDropdown] = useState(false)
	const handleDropdownClick = () => {
		setShowDropdown(!showDropdown)
	}
	const handleChangeLanguage = newLang => {
		dispatch(switchLanguage(newLang))
		setShowDropdown(false)
	}

	const languageOptions = [
		{ value: 'ru', label: 'Русский', src: '/images/rus_flag.webp' },
		{ value: 'kril', label: 'Ўзбекча', src: '/images/uzb_flag.webp' },
		{ value: 'lotin', label: "O'zbekcha", src: '/images/uzb_flag.webp' },
	]

	const languages1 = 'ru'
	const languages2 = 'kril'
	const languages3 = 'lotin'

	let languageElement1 = null
	let languageElement2 = null
	let languageElement3 = null

	if (languages1.includes(currentLanguage)) {
		languageElement1 = (
			<p>
				<img src='/images/rus_flag.webp' alt='rus flag' />
				Русский
			</p>
		)
	}
	if (languages2.includes(currentLanguage)) {
		languageElement2 = (
			<p>
				<img src='/images/uzb_flag.webp' alt='uzb flag' />
				Ўзбекча
			</p>
		)
	}
	if (languages3.includes(currentLanguage)) {
		languageElement3 = (
			<p>
				<img src='/images/uzb_flag.webp' alt='uzb flag' />
				O'zbekcha
			</p>
		)
	}
	return (
		<>
			<div className='language' onClick={handleDropdownClick}>
				{languageElement1}
				{languageElement2}
				{languageElement3}
				{showDropdown ? <IoIosArrowDown /> : <IoIosArrowUp />}
				{showDropdown && (
					<div className='drop_language'>
						{languageOptions.map(option => {
							if (option.value !== currentLanguage) {
								return (
									<p
										key={option.value}
										onClick={() => handleChangeLanguage(option.value)}
									>
										<img src={option.src} alt={option.label} />
										{option.label}
									</p>
								)
							}
							return null
						})}
					</div>
				)}
			</div>
			{showDropdown && (
				<div
					className={'light__language'}
					onClick={() => setShowDropdown(false)}
				></div>
			)}
		</>
	)
}

export default LanguageSwitcher
