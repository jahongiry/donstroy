import { LogOut } from 'lucide-react'
import { useState } from 'react'
import { BiArrowFromRight } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import { routes } from '../../routes/AdminPageRoute'
import { selectTranslations } from '../../slices/LanguageSlice'
import { logOutUser } from '../../slices/loginSlice'
import styles from './AdminPage.module.css'

export const AdminPage = () => {
	const [buttonPath, setButtonPath] = useState('')
	localStorage.setItem('yCordinate', buttonPath)
	const cordinate = localStorage.getItem('yCordinate')
	const translations = useSelector(selectTranslations)
	const dispatch = useDispatch() // Get dispatch function
	const navigate = useNavigate()

	const handleLogout = async () => {
		try {
			await dispatch(logOutUser()) // Dispatch logOutUser action
			navigate('/') // Redirect to main page upon successful logout
		} catch (error) {
			console.error('Logout failed:', error)
		}
	}

	return (
		<div className={styles.admin}>
			<div className={styles.mange_admin}>
				<img
					src='/images/logo.webp'
					alt='logo img'
					onClick={() => navigate('/')}
				/>
				<button onClick={handleLogout} className={styles.logout}>
					<LogOut />
				</button>
				{/* Logout button */}
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
