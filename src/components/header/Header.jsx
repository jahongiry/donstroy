import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { IoMenu } from 'react-icons/io5'
import { TbX } from 'react-icons/tb'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { useHeader } from '../../hooks/useHeader'
import { pathToArray, prohibited } from '../../routes/ProhibitedPath'
import { selectTranslations } from '../../slices/LanguageSlice'
import { Login } from '../login/Login'
import Sidebar from '../sidebar/Sidebar'
import styles from './Header.module.css'
import LanguageSwitcher from './LanguageSwitcher'
export const Header = () => {
	const { language, setLanguage, showSidebar, setShowSidebar } = useHeader()
	const [showCourcesTable, setShowCourcesTable] = useState(false)
	const [showLogin, setShowLogin] = useState(false)
	const { pathname } = useLocation()
	const translations = useSelector(selectTranslations)
	const navigate = useNavigate()
	if (pathToArray(pathname).some(path => path.startsWith(prohibited))) return
	return (
		<>
			<div className={styles.header}>
				<div className='container'>
					<div className={styles.navbar}>
						<div className={styles.left}>
							<img
								src='/images/logo.webp'
								className='logo_img'
								alt='logo'
								onClick={() => navigate('/')}
							/>
							<p>Don Stroy Project</p>
							<button className='btn'>{translations.header.button1}</button>
						</div>
						<div className={styles.center}>
							<div className={`${styles.cources}`}>
								<p onClick={() => setShowCourcesTable(true)}>
									{translations.header.cources}
								</p>
							</div>
						</div>
						<div className={styles.right}>
							<LanguageSwitcher />
							<button className='btn_full' onClick={() => setShowLogin(true)}>
								<FaRegUser />
								<p>{translations.header.button2}</p>
							</button>
							<div className={styles.menu} onClick={() => setShowSidebar(true)}>
								<button>
									<IoMenu />
								</button>
							</div>
						</div>
					</div>
				</div>
				{showSidebar && (
					<Sidebar
						setShowSidebar={setShowSidebar}
						language={language}
						setLanguage={setLanguage}
					/>
				)}
			</div>
			<div className={styles.header_space}></div>
			{showCourcesTable && (
				<motion.div
					initial={{ opacity: '0', top: '-100%' }}
					animate={{ opacity: '1', top: 0 }}
					className={`${styles.drop_cources} ${
						showCourcesTable ? styles.show_drop : ''
					}`}
				>
					<div
						className={styles.x_btn}
						onClick={() => setShowCourcesTable(false)}
					>
						<TbX />
					</div>
					<div className={styles.drop_btns}>
						{translations.header.drop_cources.map(cource => (
							<button
								className='btn'
								onClick={() => navigate('/admin/students')}
								key={cource}
							>
								{cource}
							</button>
						))}
					</div>
					<motion.div
						initial={{ opacity: '0' }}
						animate={{ opacity: '1' }}
						className={styles.dark}
						onClick={() => setShowCourcesTable(false)}
					></motion.div>
				</motion.div>
			)}
			{showLogin && <Login setShowLogin={setShowLogin} />}
		</>
	)
}
