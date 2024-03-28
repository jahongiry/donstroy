import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
	selectCurrentLanguage,
	selectTranslations,
	switchLanguage,
} from '../../slices/LanguageSlice'
import styles from './Sidebar.module.css'

const Sidebar = ({
	setShowSidebar,
	setLanguage,
	language,
	setShowCourcesTable,
}) => {
	const dispatch = useDispatch()
	const currentLanguage = useSelector(selectCurrentLanguage)
	const translations = useSelector(selectTranslations)
	const navigate = useNavigate()
	const courses = useSelector(state => state.courses.courses)
	const links = courses.slice(0, 5)
	const handleChangeLanguage = newLang => {
		dispatch(switchLanguage(newLang))
	}

	const languageOptions = [
		{ value: 'ru', label: 'Русский' },
		{ value: 'kril', label: 'Кириллча' },
		{ value: 'lotin', label: 'Lotincha' },
	]

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className={styles.sidebar}
		>
			<motion.div
				initial={{ transform: 'translateX(-100%)' }}
				animate={{ transform: 'translateX(0)' }}
				className={styles.menu_links}
			>
				<div className={styles.languages}>
					<button
						className={currentLanguage === 'ru' ? 'btn_full' : 'btn'}
						onClick={() => handleChangeLanguage('ru')}
					>
						Рус
					</button>
					<button
						className={currentLanguage === 'kril' ? 'btn_full' : 'btn'}
						onClick={() => handleChangeLanguage('kril')}
					>
						Kiril
					</button>
					<button
						className={currentLanguage === 'lotin' ? 'btn_full' : 'btn'}
						onClick={() => handleChangeLanguage('lotin')}
					>
						Lotin
					</button>
				</div>
				<ul>
					{links.map((link, inx) => (
						<li
							key={inx}
							onClick={() => {
								setShowSidebar(false), setShowCourcesTable(true)
							}}
						>
							<a>{link.name.slice(0, 30)}</a>
						</li>
					))}
				</ul>
				<button
					className='btn'
					onClick={() => {
						navigate('/sertificates'), setShowSidebar(false)
					}}
				>
					{translations.header.button1}
				</button>
			</motion.div>
			<div className={styles.dark} onClick={() => setShowSidebar(false)}></div>
		</motion.div>
	)
}

export default Sidebar
