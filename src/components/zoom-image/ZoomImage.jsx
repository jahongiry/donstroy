import { motion } from 'framer-motion'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SUB_URL } from '../../urls/MainUrl'
import styles from './ZoomImage.module.css'
export const ZoomImage = ({ img, setShowZoomImage }) => {
	const navigate = useNavigate()
	const students = useSelector(state => state.student.student)

	if (!students || students.length === 0) {
		return <div>Loading...</div>
	}
	const student = students.find(item => item.id === img)

	if (!student) {
		return <div>No student found with ID {img}</div>
	}
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className={styles.zoom_img}
		>
			{students.find(item => item.id === img) ? (
				<img
					key={img}
					src={`${SUB_URL}${student.certificate_url}`}
					alt='img'
					onClick={() => navigate(`/student/${img}`)}
				/>
			) : (
				<></>
			)}
			<div
				className={styles.dark}
				onClick={() => setShowZoomImage(false)}
			></div>
		</motion.div>
	)
}
