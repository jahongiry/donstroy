import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DatePicker from '../../components/date-picker/DatePicker'
import { fetchStudents } from '../../slices/studentSlice'
import styles from './StudentEdit.module.css'
// import { data } from '../../pages/admin-page/students/Students'
export const StudentEdit = ({ id, setShowEditModal }) => {
	const dispatch = useDispatch()
	const students = useSelector(state => state.student.student)

	useEffect(() => {
		dispatch(fetchStudents())
	}, [dispatch])

	if (!students || students.length === 0) {
		return <div>Loading...</div>
	}
	const student = students.find(item => item.id === id)
	const [studentName, setStudentName] = useState(student.name)
	// const [courceName, setCourceName] = useState(student.courseName)
	const [selectedDate, setSelectedDate] = useState(
		`${student?.created_at.split('-')[2].slice(0, 2)}-${
			student?.created_at.split('-')[1]
		}-${student?.created_at.split('-')[0]}`
	)
	const [imgUrl, setImgUrl] = useState(student.certificate_url)
	// const [text, setText] = useState(student.description)
	const [img, setImg] = useState(null)
	const [selectedFile, setSelectedFile] = useState(null)
	const [imagePreview, setImagePreview] = useState('')
	if (!student) {
		return <div>No student found with ID {id}</div>
	}

	function handleFileChange(event) {
		const file = event.target.files[0]
		if (file) {
			setSelectedFile(file)
			const reader = new FileReader()
			reader.onloadend = () => {
				setImagePreview(reader.result)
			}
			reader.readAsDataURL(file)
		} else {
			setSelectedFile(null)
		}
	}
	const handleEndit = () => {
		setShowEditModal(false)
	}
	return (
		<div className={styles.student_edit}>
			<div className={styles.edit}>
				<p>ID: {student.id}</p>
				<input
					type='text'
					value={studentName}
					onChange={e => setStudentName(e.target.value)}
				/>
				{/* <input
					type='text'
					value={courceName}
					onChange={e => setCourceName(e.target.value)}
				/> */}
				<div className={styles.bottom_inputs}>
					<DatePicker
						selectedDate={selectedDate}
						setSelectedDate={setSelectedDate}
					/>
					{/* <div className={styles.img_edit}>
						<div className={styles.upload}>
							<input
								type='file'
								accept='image/png, image/jpeg'
								onChange={handleFileChange}
							/>
							<CiCamera />
						</div>
						{imagePreview && (
							<div>
								<img src={imagePreview} alt='Image Preview' />
							</div>
						)}
						<img src={imgUrl} alt='img' />
					</div> */}
				</div>
				{/* <EmailEditor text={text} setTexcreated_att={setText} /> */}
				<button className={styles.edit_btn} onClick={handleEndit}>
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
