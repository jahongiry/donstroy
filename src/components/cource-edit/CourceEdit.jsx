import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCourses, updateCourse } from '../../slices/courseSlice'
import EmailEditor from '../email-editor/EmailEditor'
import Error from '../error/Error'
import Loading from '../loading/Loading'
import styles from './CourceEdit.module.css'

export const CourceEdit = ({ id, setShowEditModal }) => {
	const dispatch = useDispatch()
	const [cource, setCource] = useState(null)
	const [courcetName, setCourceName] = useState('')
	const [teacher, setTeacher] = useState('')
	const [description, setDescription] = useState('')
	const loading = useSelector(state => state.student.loading)
	const error = useSelector(state => state.student.error)

	useEffect(() => {
		dispatch(fetchCourses())
	}, [dispatch])
	const courses = useSelector(state => state.courses.courses)

	useEffect(() => {
		if (courses) {
			const selectedCource = courses.find(c => c.id === id)
			if (selectedCource) {
				setCource(selectedCource)
				setCourceName(selectedCource.name)
				setTeacher(selectedCource.teacher)
				setDescription(selectedCource.description)
			}
		}
	}, [id, courses])

	const handleEdit = async () => {
		if (!cource) return
		try {
			await dispatch(
				updateCourse({
					id: cource.id,
					courseData: {
						// Pass course data as an object
						name: courcetName,
						description: description,
						teacher: teacher,
					},
				})
			)
			setShowEditModal(false)
		} catch (error) {
			console.error('Error updating course:', error)
		}
	}

	if (loading) {
		return <Loading />
	}

	if (error) {
		return <Error error={error} />
	}
	return (
		<div className={styles.cource_edit}>
			<div className={styles.edit}>
				{cource && <p>ID: {cource.id}</p>}
				<label>
					Course name
					<input
						type='text'
						value={courcetName}
						onChange={e => setCourceName(e.target.value)}
					/>
				</label>
				<label>
					Teacher
					<input
						type='text'
						value={teacher}
						onChange={e => setTeacher(e.target.value)}
					/>
				</label>
				<EmailEditor text={description} setText={setDescription} />
				<button className={styles.edit_btn} onClick={handleEdit}>
					Edit
				</button>
			</div>
			<motion.div
				initial={{ opacity: '0' }}
				animate={{ opacity: '1' }}
				className={styles.dark}
				onClick={() => setShowEditModal(false)}
			></motion.div>
		</div>
	)
}
