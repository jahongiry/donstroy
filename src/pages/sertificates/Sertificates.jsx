import { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Error from '../../components/error/Error'
import Loading from '../../components/loading/Loading'
import { ZoomImage } from '../../components/zoom-image/ZoomImage'
import { selectTranslations } from '../../slices/LanguageSlice'
import { fetchStudents } from '../../slices/studentSlice'
import { SUB_URL } from '../../urls/MainUrl'
import styles from './Sertificates.module.css'
const Sertificates = () => {
	const [showZoomImage, setShowZoomImage] = useState(false)
	const [id, setId] = useState(0)
	const translations = useSelector(selectTranslations)
	const [searchValue, setSearchValue] = useState('')
	const data = useSelector(state => state.student.student)
	const dispatch = useDispatch()
	// const students = useSelector(state => state.student.student)
	const filteredData = data?.filter(
		el =>
			el?.name.toLowerCase().includes(searchValue.toLowerCase().trim()) ||
			el?.id.toString().includes(searchValue.trim())
	)

	useEffect(() => {
		dispatch(fetchStudents())
	}, [dispatch])
	// const filteredData = useSelector(state => state.student.student)
	// const students = useSelector(state => state.student.student)
	const loading = useSelector(state => state.student.loading)
	const error = useSelector(state => state.student.error)
	const params = useParams()
	console.log(filteredData)
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [params])
	// const filteredData = data?.filter(
	// 	el =>
	// 		el.studentName.toLowerCase().includes(searchValue.toLowerCase().trim()) ||
	// 		el.id.toString().includes(searchValue.trim())
	// )
	const handleView = id => {
		setId(id)
		setShowZoomImage(true)
	}
	if (loading) {
		return <Loading />
	}

	if (error) {
		return <Error error={error} />
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
				{filteredData?.map(student => (
					<div key={student?.id} className={styles.student}>
						{console.log(student)}
						<p>
							<span>ID: {student?.id}.</span> <span>{student?.name}</span>
						</p>
						<img
							src={`${SUB_URL}${student?.certificate_url}`}
							onClick={() => handleView(student?.id)}
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
