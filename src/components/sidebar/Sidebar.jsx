import { motion } from 'framer-motion'
import styles from './Sidebar.module.css'
const menuLinks = [
	'Qurilish mollari',
	'Armatura',
	'Sement',
	'Kraska',
	"Biton G'ist",
	'Forma',
	'Statistika',
]
const Sidebar = ({ setShowSidebar, setLanguage, language }) => {
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
						className={language.includes('Русский') ? 'btn_dark' : 'btn'}
						onClick={() => setLanguage('Русский')}
					>
						Рус
					</button>
					<button
						className={language.includes("O'zbekcha") ? 'btn_dark' : 'btn'}
						onClick={() => setLanguage("O'zbekcha")}
					>
						O'zb
					</button>
				</div>
				<ul>
					{menuLinks.map((link, inx) => (
						<li key={inx}>{link}</li>
					))}
				</ul>
				<button className='btn'>Yo'riqnoma</button>
			</motion.div>
			<div className={styles.dark} onClick={() => setShowSidebar(false)}></div>
		</motion.div>
	)
}
export default Sidebar
