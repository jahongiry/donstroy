import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Error from '../../components/error/Error'
import Loading from '../../components/loading/Loading'
import { selectTranslations } from '../../slices/LanguageSlice'
import { SUB_URL } from '../../urls/MainUrl'
import styles from './CourcePage.module.css'

export const Cource = () => {
	const translations = useSelector(selectTranslations)
	const { id } = useParams()
	const params = useParams()
	const navigate = useNavigate()
	const courses = useSelector(state => state.courses.courses)
	const loading = useSelector(state => state.student.loading)
	const error = useSelector(state => state.student.error)
	const [viewImg, setViewImg] = useState(false)
	const [imgId, setImgId] = useState(0)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [params])

	if (!courses || courses.length === 0) {
		return (
			<div>
				<Loading />
			</div>
		)
	}

	const course = courses.find(course => course.id === parseInt(id))

	if (!course) {
		return <div>Course not found</div>
	}

	const handleClick = id => {
		setImgId(id)
		setViewImg(true)
	}
	const selectedImg = course.images[imgId]

	if (loading) {
		return <Loading />
	}

	if (error) {
		return <Error error={error} />
	}

	return (
		<div className='container'>
			<div className={styles.cource}>
				<div className={styles.course_name}>
					<h3>Kurs nomi:</h3>
					<h4>{course?.name}</h4>
				</div>
				<div className={styles.teachers}>
					<h3>Ustozlar:</h3>
					<p>{course?.teacher}</p>
				</div>
				<div className={styles.images}>
					{course.images.map((img, index) => (
						<img
							key={index}
							onClick={() => handleClick(index)}
							src={`${SUB_URL}${img}`}
							alt='img'
						/>
					))}
				</div>
			</div>
			{viewImg && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className={styles.zoom_img}
				>
					<img
						src={`${SUB_URL}${selectedImg}`}
						alt='img'
						onClick={() => setViewImg(false)}
					/>
					<div className={styles.dark} onClick={() => setViewImg(false)}></div>
				</motion.div>
			)}
		</div>
	)
}
