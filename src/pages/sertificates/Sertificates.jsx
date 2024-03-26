import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { ZoomImage } from '../../components/zoom-image/ZoomImage'
import { selectTranslations } from '../../slices/LanguageSlice'
import { data } from '../admin-page/students/Students'
import styles from './Sertificates.module.css'
const Sertificates = () => {
	const [showZoomImage, setShowZoomImage] = useState(false)
	const [id, setId] = useState(0)
	const translations = useSelector(selectTranslations)
	const [searchValue, setSearchValue] = useState('')
	const filteredData = data.filter(
		el =>
			el.studentName.toLowerCase().includes(searchValue.toLowerCase().trim()) ||
			el.id.toString().includes(searchValue.trim())
	)
	console.log(filteredData)
	const handleView = id => {
		setId(id)
		setShowZoomImage(true)
	}
	return (
		<div className='container'>
			<div className={styles.top__sertificates}>
				<div className={styles.search}>
					<input
						type='text'
						placeholder={translations.sertificates.search + '...'}
						value={searchValue}
						onChange={e => setSearchValue(e.target.value)}
					/>
					<BiSearch />
				</div>
				<h2 className={styles.title}>{translations.header.button1}</h2>
			</div>
			<div className={styles.sertificates}>
				{filteredData.map(student => (
					<div key={student.id} className={styles.student}>
						<p>
							ID: {student.id}. {student.studentName}
						</p>
						<img
							src={student.certificate}
							onClick={() => handleView(student.id)}
							alt='sertificate img'
						/>
					</div>
				))}
			</div>
			{showZoomImage && (
				<ZoomImage img={id} setShowZoomImage={setShowZoomImage} />
			)}
		</div>
	)
}

export default Sertificates
