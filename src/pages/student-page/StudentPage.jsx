import React, { useEffect } from 'react'
import { MdSimCardDownload } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DownloadImage from '../../components/download-img/DownloadImg'
import { fetchStudentDetails } from '../../slices/studentSlice'
import styles from './StudentPage.module.css'

const StudentPage = () => {
	const { id } = useParams()
	const params = useParams()
	const dispatch = useDispatch()
	const student = useSelector(state => state.student.student)
	const loading = useSelector(state => state.student.loading)
	const error = useSelector(state => state.student.error)
	useEffect(() => {
		dispatch(fetchStudentDetails(id))
	}, [dispatch, id])
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [params])

	if (loading) {
		return (
			<div className='layout_loatder'>
				<div className='loader'></div>
			</div>
		)
	}

	if (error) {
		return (
			<div className='error'>
				<p>Error: {error}</p>
			</div>
		)
	}
	return (
		<div className={styles.student}>
			<p className={styles.student_id}>ID: {id}</p>
			{student && (
				<div className={styles.student_info}>
					<p>{student?.name}</p>
					<img
						src={`https://donstroy-api-production.up.railway.app${student?.certificate_url}`}
						alt='certificate'
					/>
				</div>
			)}
			<button className={styles.download}>
				<MdSimCardDownload />
				<DownloadImage
					imageUrl={`https://donstroy-api-production.up.railway.app${student?.certificate_url}`}
				/>
			</button>
		</div>
	)
}

export default StudentPage
