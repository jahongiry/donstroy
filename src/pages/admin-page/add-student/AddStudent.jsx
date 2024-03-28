import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DatePicker from '../../../components/date-picker/DatePicker'
import Error from '../../../components/error/Error'
import Loading from '../../../components/loading/Loading'
import { addStudent } from '../../../slices/studentSlice'
import styles from './AddStudent.module.css'

export const AddStudent = () => {
	const dispatch = useDispatch()
	const courses = useSelector(state => state.courses.courses)
	const [studentName, setStudentName] = useState('')
	const [clock, setClock] = useState('')
	const [category, setCategory] = useState('')
	const [control, setControl] = useState('')
	const [passport, setPasssport] = useState('')
	const [courseId, setCourseId] = useState('')
	const loading = useSelector(state => state.student.loading)
	const error = useSelector(state => state.student.error)
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
		setCourseId('')
		setDate('')
		setClock('')
		setCategory('')
		setControl('')
		setPasssport('')
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
	if (loading) {
		return <Loading />
	}

	if (error) {
		return <Error error={error} />
	}
	return (
		<form className={styles.add_student}>
			<input
				type='text'
				value={studentName}
				placeholder='Studentning ismi'
				required
				onChange={e => setStudentName(e.target.value)}
			/>
			<select value={courseId} onChange={e => setCourseId(e.target.value)}>
				<option value='' disabled>
					Yonalish tanlang
				</option>
				{courses.map(course => (
					<option key={course.id} value={course.id}>
						{course.name}
					</option>
				))}
			</select>
			<input
				type='number'
				value={clock}
				placeholder='Soatini kiriting'
				onChange={e => setClock(e.target.value)}
			/>
			<input
				type='text'
				value={category}
				placeholder='Toifasini kiriting'
				onChange={e => setCategory(e.target.value)}
			/>
			<input
				type='text'
				value={control}
				placeholder='Nazorat'
				onChange={e => setControl(e.target.value)}
			/>
			<input
				type='text'
				value={passport}
				placeholder='JSHI'
				onChange={e => setPasssport(e.target.value)}
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
			{/* <EmailEditor text={description} setText={setDescription} /> */}
			<button onClick={handleCreate} className={styles.create_btn}>
				Create
			</button>
		</form>
	)
}
