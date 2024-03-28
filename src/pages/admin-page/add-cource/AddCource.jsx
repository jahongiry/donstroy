import { useState } from 'react'
import { CiCamera } from 'react-icons/ci'
import { useDispatch } from 'react-redux'
import EmailEditor from '../../../components/email-editor/EmailEditor'
import { addCourse } from '../../../slices/courseSlice'
import styles from './AddCource.module.css'

export const AddCource = () => {
	const dispatch = useDispatch()
	const [courceName, setCourceName] = useState('')
	const [teacherName, setTeacherName] = useState('')
	const [description, setDescription] = useState('')
	const [selectedFiles, setSelectedFiles] = useState([])
	const [imagePreviews, setImagePreviews] = useState([])

	const handleCreate = () => {
		const formData = new FormData()
		formData.append('course[name]', courceName)
		formData.append('course[teacher]', teacherName)
		formData.append('course[description]', description)
		selectedFiles.forEach(file => {
			formData.append('course[images][]', file)
		})
		dispatch(addCourse(formData))

		setCourceName('')
		setTeacherName('')
		setDescription('')
		setSelectedFiles([])
		setImagePreviews([])
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

	return (
		<div className={styles.add_cource}>
			<input
				type='text'
				value={courceName}
				placeholder='Course name'
				onChange={e => setCourceName(e.target.value)}
			/>
			<input
				type='text'
				value={teacherName}
				placeholder='Teacher name'
				onChange={e => setTeacherName(e.target.value)}
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
			<button onClick={handleCreate} className={styles.create_btn}>
				Create
			</button>
		</div>
	)
}
