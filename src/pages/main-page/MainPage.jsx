import { useSelector } from 'react-redux'
import { selectTranslations } from '../../slices/LanguageSlice'
import styles from './MainPage.module.css'
export const MainPage = () => {
	const translations = useSelector(selectTranslations)
	return (
		<div className='container'>
			<div className={styles.main_page}>
				<div className={styles.left}>
					<h2>{translations.mainPage.title}</h2>
					<p>{translations.mainPage.p} </p>
					<button className='btn_full'>{translations.mainPage.button}</button>
				</div>
				<div className={styles.right}>
					<img src='/images/donstroy_building.webp' alt='donstroy building' />
				</div>
			</div>
		</div>
	)
}
