import React, { useEffect, useState } from 'react'
import { MdShare, MdSimCardDownload } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Error from '../../components/error/Error'
import Loading from '../../components/loading/Loading'
import { fetchStudentDetails } from '../../slices/studentSlice'
import { SUB_URL } from '../../urls/MainUrl'
import styles from './StudentPage.module.css'

const StudentPage = () => {
	const { id } = useParams()
	const params = useParams()
	const dispatch = useDispatch()
	const student = useSelector(state => state.student.student)
	const loading = useSelector(state => state.student.loading)
	const error = useSelector(state => state.student.error)
	const [imageLoading, setImageLoading] = useState(true)

	useEffect(() => {
		dispatch(fetchStudentDetails(id))
	}, [dispatch, id])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [params])

	const handleDownloadClick = async () => {
		try {
			const imageUrl = `https://donstroy-api-production.up.railway.app${student?.certificate_url}`
			const response = await fetch(imageUrl)
			const blob = await response.blob()

			const link = document.createElement('a')
			link.href = window.URL.createObjectURL(blob)
			link.download = `certificate_${id}.png`
			link.click()

			window.URL.revokeObjectURL(link.href)
		} catch (error) {
			console.error('Error downloading image:', error)
		}
	}
	const handleShareClick = async () => {
		try {
			if (navigator.share) {
				await navigator.share({
					title: 'Certificate Link',
					text: `Sertifikat: ${SUB_URL}${student?.certificate_url} 
					url: ${SUB_URL}${student?.certificate_url}`,
				})
			} else {
				console.log('Web Share API not supported')
				toast.warn(<p>Sharing is not supported on this device or browser.</p>, {
					autoClose: 3000,
				})
			}
		} catch (error) {
			console.error('Error sharing link:', error)
			toast.warn(<p>An error occurred while trying to share the link.</p>, {
				autoClose: 3000,
			})
		}
	}
	if (loading) {
		return <Loading />
	}

	if (error) {
		return <Error error={error} />
	}

	return (
		<div className='container'>
			<div className={styles.student}>
				<div className={styles.btns}>
					<button className={styles.download} onClick={handleDownloadClick}>
						Yuklash
						<MdSimCardDownload />
					</button>
					<button className={styles.share} onClick={handleShareClick}>
						Ulashish <MdShare />
					</button>
				</div>
				{student && (
					<div className={styles.student_info}>
						<p>{student?.name}</p>
						<img
							src={`https://donstroy-api-production.up.railway.app${student?.certificate_url}`}
							alt='certificate'
							onLoad={() => setImageLoading(false)}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default StudentPage
