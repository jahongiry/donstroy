import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CiCamera } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import EmailEditor from '../../../components/email-editor/EmailEditor'
import Error from '../../../components/error/Error'
import Loading from '../../../components/loading/Loading'
import { addCourse } from '../../../slices/courseSlice'
import styles from './AddCource.module.css'

export const AddCource = () => {
	const dispatch = useDispatch()
	// const [courceName, setCourceName] = useState('')
	// const [teacherName, setTeacherName] = useState('')
	const [description, setDescription] = useState('')
	const [selectedFiles, setSelectedFiles] = useState([])
	const [imagePreviews, setImagePreviews] = useState([])
	const loading = useSelector(state => state.student.loading)
	const error = useSelector(state => state.student.error)
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm()

	const onSubmit = async data => {
		const formData = new FormData()
		formData.append('course[name]', data.courseName)
		formData.append('course[teacher]', data.teacherName)
		formData.append('course[description]', description)
		selectedFiles.forEach(file => {
			formData.append('course[images][]', file)
		})
		dispatch(addCourse(formData))
		setDescription('')
		setSelectedFiles([])
		setImagePreviews([])
		reset({ courseName: '', teacherName: '' })
		toast.success(<p>Yonalish yaratildi</p>)
	}

	const handleFileChange = event => {
		const files = event.target.files
		const newSelectedFiles = Array.from(files)
		setSelectedFiles(newSelectedFiles)

		const newImagePreviews = []
		newSelectedFiles.forEach(file => {
			const reader = new FileReader()
			reader.onloadend = () => {
				newImagePreviews.push(reader.result)
				if (newImagePreviews.length === newSelectedFiles.length) {
					setImagePreviews(newImagePreviews)
				}
			}
			reader.readAsDataURL(file)
		})
	}
	if (loading) {
		return <Loading />
	}

	if (error) {
		return <Error error={error} />
	}
	return (
		<form className={styles.add_cource} onSubmit={handleSubmit(onSubmit)}>
			<p className='red-text-important'>{errors.courseName?.message}</p>
			<p className='red-text-important'>{errors.teacherName?.message}</p>
			<input
				type='text'
				// value={courceName}
				{...register('courseName', { required: 'Yonalishni kiritish shart' })}
				placeholder='Yonalish nomi'
				// onChange={e => setCourceName(e.target.value)}
			/>
			<input
				type='text'
				// value={teacherName}
				placeholder='Ustozning ismi'
				{...register('teacherName', { required: 'Ustozni kiritish shart' })}
				// onChange={e => setTeacherName(e.target.value)}
			/>
			<div className={styles.img_edit}>
				<div className={styles.upload}>
					<input
						type='file'
						accept='image/png, image/jpeg'
						onChange={handleFileChange}
						multiple
					/>
					<CiCamera />
				</div>
				<div className={styles.images}>
					{imagePreviews.map((preview, index) => (
						<div key={index}>
							<img src={preview} alt={`Image Preview ${index}`} />
						</div>
					))}
				</div>
			</div>
			<EmailEditor text={description} setText={setDescription} />
			{/* <button onClick={handleCreate} className={styles.create_btn}> */}
			<button className={styles.create_btn}>Yaratish</button>
		</form>
	)
}
