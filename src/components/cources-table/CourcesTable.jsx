import { useState } from 'react'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdDriveFileRenameOutline, MdOutlineDescription } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCourse } from '../../slices/courseSlice'
import { CourceEdit } from '../cource-edit/CourceEdit'
import Error from '../error/Error'
import Loading from '../loading/Loading'
import styles from './CourcesTable.module.css'

const CourcesTable = () => {
	const [showEditModal, setShowEditModal] = useState(false)
	const [id, setId] = useState(0)
	const courses = useSelector(state => state.courses.courses)
	const dispatch = useDispatch()
	const loading = useSelector(state => state.student.loading)
	const error = useSelector(state => state.student.error)

	const handleEdit = courseId => {
		setId(courseId)
		setShowEditModal(true)
	}

	const handleDelete = courseId => {
		dispatch(deleteCourse(courseId))
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
							Yonalish nomi
							<MdDriveFileRenameOutline />
						</th>
						<th>
							Ustozlar
							<FaChalkboardTeacher />
						</th>
						<th>
							Izoh
							<MdOutlineDescription />
						</th>
						<th>
							Ammallar
							<IoSettingsOutline />
						</th>
					</tr>
				</thead>
				<tbody>
					{courses.map(course => (
						<tr key={course.id}>
							<td>{course.id}</td>
							<td>
								{course.name.length > 35
									? course.name.slice(0, 35) + '...'
									: course.name}
							</td>
							<td>
								{course.teacher
									? course.teacher.split(' ')[0].slice(0, 12)
									: ''}
							</td>
							<td>
								{course.description.length > 22
									? course.description.slice(0, 22) + '...'
									: course.description}
							</td>
							<td>
								<button
									className={styles.action_btn}
									onClick={() => handleEdit(course.id)}
								>
									O'zgartirish
								</button>
								<button
									className={styles.action_btn}
									onClick={() => handleDelete(course.id)}
								>
									O'chirish
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{showEditModal && (
				<CourceEdit id={id} setShowEditModal={setShowEditModal} />
			)}
		</div>
	)
}

export default CourcesTable
