import { motion } from 'framer-motion'
import { useState } from 'react'
import { data } from '../../pages/admin-page/students/Students'
import DatePicker from '../date-picker/DatePicker'
import EmailEditor from '../email-editor/EmailEditor'
import styles from './StudentEdit.module.css'
export const StudentEdit = ({ id, setShowEditModal }) => {
	const student = data.find(student => student.id == id)
	const [studentName, setStudentName] = useState(student.studentName)
	const [courceName, setCourceName] = useState(student.courseName)
	const [selectedDate, setSelectedDate] = useState(student.date)
	const [imgUrl, setImgUrl] = useState(student.certificate)
	const [text, setText] = useState(student.description)
	const [img, setImg] = useState(null)
	const [selectedFile, setSelectedFile] = useState(null)
	const [imagePreview, setImagePreview] = useState('')

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
				<input
					type='text'
					value={courceName}
					onChange={e => setCourceName(e.target.value)}
				/>
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
				<EmailEditor text={text} setText={setText} />
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
