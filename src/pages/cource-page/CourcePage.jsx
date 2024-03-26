import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectTranslations } from '../../slices/LanguageSlice'
import styles from './CourcePage.module.css'
export const Cource = () => {
	const images = ['/images/document2.jpg']
	const translations = useSelector(selectTranslations)
	const { id } = useParams()
	return (
		<div className='container'>
			<div className={styles.cource}>
				<h3>{translations.header.drop_cources[3]}</h3>
				<div className={styles.teachers}>
					<h3>{translations.cource.title3}:</h3>
					<p>Ana Maxsudova maxmuda mominova mamura Feruza </p>
				</div>
				<div className={styles.images}>
					{images.map(img => (
						<img src={img} alt='img' />
					))}
				</div>
			</div>
		</div>
	)
}
