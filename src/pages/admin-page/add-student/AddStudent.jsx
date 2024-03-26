import React, { useState } from 'react'
import EmailEditor from '../../../components/email-editor/EmailEditor'

import DatePicker from '../../../components/date-picker/DatePicker'
import styles from './AddStudent.module.css'

export const AddStudent = () => {
	const [studentName, setStudentName] = useState('')
	const [courceName, setCourceName] = useState('')
	const [description, setDescription] = useState('')
	const [date, setDate] = useState('')
	const [selectedFile, setSelectedFile] = useState(null)
	const [imagePreview, setImagePreview] = useState('')

	const handleCreate = () => {
		setStudentName('')
		setCourceName('')
		setDescription('')
		useState('')
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
	return (
		<div className={styles.add_student}>
			<input
				type='text'
				value={studentName}
				placeholder='Student name'
				onChange={e => setStudentName(e.target.value)}
			/>
			<input
				type='text'
				value={courceName}
				placeholder='Cource name'
				onChange={e => setCourceName(e.target.value)}
			/>
			<DatePicker selectedDate={date} setSelectedDate={setDate} />
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
			</div> */}
			<EmailEditor text={description} setText={setDescription} />
			<button onClick={handleCreate} className={styles.create_btn}>
				Create
			</button>
		</div>
	)
}
