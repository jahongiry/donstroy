import { FaRegUser } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { IoMenu } from 'react-icons/io5'
import { useHeader } from '../../hooks/useHeader'
import Sidebar from '../sidebar/Sidebar'
import styles from './Header.module.css'
export const Header = () => {
	const {
		language,
		setLanguage,
		showDropLanguage,
		setShowDropLanguage,
		showSidebar,
		setShowSidebar,
		handleChangeLanguage,
	} = useHeader()
	return (
		<div className={styles.header}>
			<div className='container'>
				<div className={styles.navbar}>
					<div className={styles.left}>
						<img src='/logo.png' alt='logo' />
						<button className='btn'>Yo'riqnoma</button>
					</div>
					<div className={styles.center}>
						<div className={`${styles.search_input}`}>
							<input type='text' placeholder='Qanday qurilishni kormoqchisiz' />
							<FiSearch />
						</div>
					</div>
					<div className={styles.right}>
						<div
							className={styles.language}
							onClick={() => setShowDropLanguage(v => !v)}
						>
							<p>
								{language}
								{showDropLanguage ? <IoIosArrowUp /> : <IoIosArrowDown />}
							</p>
							{showDropLanguage ? (
								<div className={styles.drop_language}>
									<p onClick={() => handleChangeLanguage("O'zbekcha")}>
										O'zbekcha
									</p>
									<p onClick={() => handleChangeLanguage('Русский')}>Русский</p>
								</div>
							) : (
								<></>
							)}
						</div>
						<button>
							<FaRegUser />
							<p>Kirish</p>
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
	)
}
