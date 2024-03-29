import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Error from '../../../components/error/Error'
import Loading from '../../../components/loading/Loading'
import { addStudent } from '../../../slices/studentSlice'
import styles from './AddStudent.module.css'

export const AddStudent = () => {
	const dispatch = useDispatch()
	const courses = useSelector(state => state.courses.courses)
	const loading = useSelector(state => state.student.loading)
	const error = useSelector(state => state.student.error)
	const [sertificateDate, setSertificateDate] = useState('')
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm()

	const [defaultCourseId, setDefaultCourseId] = useState('')

	useEffect(() => {
		if (courses.length > 0) {
			setDefaultCourseId(courses[0].id)
		}
	}, [courses])
	const onSubmit = data => {
		const studentData = {
			name: data.name,
			course_id: data.course_id,
			certificate_date: data.certificate_date,
			hour: data.hour,
			level: data.category,
			control: data.control,
			passport: data.passport,
		}
		dispatch(addStudent(studentData))
			.then(() => {
				navigate('/admin/students')
				reset({
					name: '',
					course_id: '',
					certificate_date: '',
					hour: '',
					category: '',
					control: '',
					passport: '',
				})
			})
			.catch(error => {
				// Handle the error here, such as displaying a message to the user
				console.error('Error submitting student data:', error)
			})
	}
	// const onSubmit = data => {
	// 	const studentData = {
	// 		name: data.name,
	// 		course_id: data.course_id,
	// 		certificate_date: data.certificate_date,
	// 		hour: data.hour,
	// 		level: data.category,
	// 		control: data.control,
	// 		passport: data.passport,
	// 	}
	// 	dispatch(addStudent(studentData))
	// 	reset({
	// 		name: '',
	// 		course_id: '',
	// 		certificate_date: '',
	// 	})
	// }

	if (loading) {
		return <Loading />
	}

	if (error) {
		return <Error error={error} />
	}

	return (
		<form className={styles.add_student} onSubmit={handleSubmit(onSubmit)}>
			<input
				type='text'
				placeholder='Studentning ismi'
				{...register('name', { required: true })}
			/>
			{/* <p className='red_text'>{errors.course_id?.message}</p> */}
			<select
				{...register('course_id', { required: true })}
				defaultValue={defaultCourseId}
			>
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
				placeholder='Soatini kiriting'
				{...register('hour', { required: true })}
			/>
			<input
				type='text'
				placeholder='Toifasini kiriting'
				{...register('category')}
			/>
			{/* <p className='red_text'>{errors.control?.message}</p> */}
			<input type='text' placeholder='Nazorat' {...register('control')} />
			{/* <p className='red_text'>{errors.passport?.message}</p> */}
			<input
				type='text'
				placeholder='JSHI'
				{...register('passport', { required: true })}
			/>
			{/* <p className='red_text'>{errors.certificate_date?.message}</p> */}
			<input
				type='date'
				{...register('certificate_date', { required: true })}
			/>
			<button type='submit' className={styles.create_btn}>
				Create
			</button>
		</form>
	)
}
