import { useState } from 'react'
import { BsCalendar2Date } from 'react-icons/bs'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdDriveFileRenameOutline, MdOutlineDescription } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { deleteStudent } from '../../slices/studentSlice'
import Error from '../error/Error'
import Loading from '../loading/Loading'
import { StudentEdit } from '../student-edit/StudentEdit'
import { ZoomImage } from '../zoom-image/ZoomImage'
import styles from './StudentsTable.module.css'

const StudentsTable = () => {
	const [showZoomImage, setShowZoomImage] = useState(false)
	const [showEditModal, setShowEditModal] = useState(false)
	const [img, setImg] = useState(0)
	const dispatch = useDispatch()
	const students = useSelector(state => state.student.student)
	const loading = useSelector(state => state.student.loading)
	const error = useSelector(state => state.student.error)

	const handleDelete = courseId => {
		dispatch(deleteStudent(courseId))
	}

	if (loading) {
		return <Loading />
	}

	if (error) {
		return <Error error={error} />
	}

	return (
		<div className={styles.table_container}>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>ID</th>
						<th>
							Stdentning Ism
							<MdDriveFileRenameOutline />
						</th>
						<th>
							Kursning nomi
							<MdDriveFileRenameOutline />
						</th>
						<th>
							Sana
							<BsCalendar2Date />
						</th>
						<th>
							Sertifikat
							<MdOutlineDescription />
						</th>
						<th>
							Amal
							<IoSettingsOutline />
						</th>
					</tr>
				</thead>
				<tbody>
					{students.map(student => (
						<tr key={student?.id}>
							<td>{student?.id}</td>
							<td>{student?.name ? student.name.slice(0, 25) : ''}</td>
							<td>
								{student?.course?.name ? student.course.name.slice(0, 25) : ''}
							</td>
							<td>
								{student?.certificate_date
									? `${student.certificate_date.split('-')[2].slice(0, 2)}-${
											student.certificate_date.split('-')[1]
									  }-${student.certificate_date.split('-')[0]}`
									: ''}
							</td>
							<td
								onClick={() => {
									setShowZoomImage(true)
									setImg(student.id)
								}}
							>
								{student?.certificate_url && (
									<img
										src={`https://donstroy-api-production.up.railway.app/${student.certificate_url}`}
										alt='Certificate'
									/>
								)}
							</td>
							<td>
								<button
									className={styles.action_btn}
									onClick={() => handleDelete(student.id)}
								>
									Ochirish
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{showZoomImage && (
				<ZoomImage img={img} setShowZoomImage={setShowZoomImage} />
			)}
			{showEditModal && (
				<StudentEdit id={img} setShowEditModal={setShowEditModal} />
			)}
		</div>
	)
}

export default StudentsTable
