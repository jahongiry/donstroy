import { useState } from 'react'
import { BiArrowFromRight } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import { routes } from '../../routes/AdminPageRoute'
import { selectTranslations } from '../../slices/LanguageSlice'
import styles from './AdminPage.module.css'
export const AdminPage = () => {
	const [buttonPath, setButtonPath] = useState('')
	const [showSideBar, setShowSideBar] = useState(false)
	localStorage.setItem('yCordinate', buttonPath)
	const cordinate = localStorage.getItem('yCordinate')
	const translations = useSelector(selectTranslations)
	const navigate = useNavigate()
	return (
		<div className={styles.admin}>
			<div className={showSideBar ? styles.small_sidebar : styles.mange_admin}>
				<img
					src='/images/logo.webp'
					alt='logo img'
					onClick={() => navigate('/')}
				/>
				<div className={styles.btns}>
					{translations.adminPanel.buttons.map(button => (
						<NavLink
							key={button.link}
							to={button.link}
							onClick={() => setButtonPath(button.yCordinate)}
						>
							<button>{button.button}</button>
						</NavLink>
					))}
					<BiArrowFromRight style={{ top: cordinate }} />
				</div>
				</div>
			<div className={styles.admin_view}>
				<Routes>
					{routes.map(route => (
						<Route key={route.path} {...route} />
					))}
				</Routes>
			</div>
		</div>
	)
}
