import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DatePicker from '../../../components/date-picker/DatePicker'
import { addStudent } from '../../../slices/studentSlice'
import styles from './AddStudent.module.css'

export const AddStudent = () => {
	const dispatch = useDispatch()
	const courses = useSelector(state => state.courses.courses)
	const [studentName, setStudentName] = useState('')
	const [courceName, setCourceName] = useState('')
	const [courseId, setCourseId] = useState('')
	// const [description, setDescription] = useState('')
	const [date, setDate] = useState('')
	// const [selectedFile, setSelectedFile] = useState(null)
	// const [imagePreview, setImagePreview] = useState('')

	const handleCreate = () => {
		const studentData = {
			name: studentName,
			course_id: courseId,
			certificate_date: date,
		}
		dispatch(addStudent(studentData))
		setStudentName('')
		setCourceName('')
		setDate('')
	}
	// function handleFileChange(event) {
	// 	const file = event.target.files[0]
	// 	if (file) {
	// 		setSelectedFile(file)
	// 		const reader = new FileReader()
	// 		reader.onloadend = () => {
	// 			setImagePreview(reader.result)
	// 		}
	// 		reader.readAsDataURL(file)
	// 	} else {
	// 		setSelectedFile(null)
	// 	}
	// }
	return (
		<div className={styles.add_student}>
			<input
				type='text'
				value={studentName}
				placeholder='Student name'
				required
				onChange={e => setStudentName(e.target.value)}
			/>
			{/* <input
				type='text'
				value={courceName}
				placeholder='Cource name'
				required
				onChange={e => setCourceName(e.target.value)}
			/> */}
			<select value={courseId} onChange={e => setCourseId(e.target.value)}>
				<option value='' disabled>
					Kursni tanlang
				</option>
				{courses.map(course => (
					<option key={course.id} value={course.id}>
						{course.name}
					</option>
				))}
			</select>
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
			{/* <EmailEditor text={description} setText={setDescription} /> */}
			<button onClick={handleCreate} className={styles.create_btn}>
				Create
			</button>
		</div>
	)
}
