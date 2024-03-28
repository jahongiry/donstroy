import { useState } from 'react'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdDriveFileRenameOutline, MdOutlineDescription } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'; // Importing useDispatch
import { deleteCourse } from '../../slices/courseSlice'; // Importing the deleteCourse action
import { CourceEdit } from '../cource-edit/CourceEdit'
import styles from './CourcesTable.module.css'

const CourcesTable = () => {
	const [showEditModal, setShowEditModal] = useState(false)
	const [id, setId] = useState(0)
	const courses = useSelector(state => state.courses.courses)
	const dispatch = useDispatch()

	const handleEdit = courseId => {
		setId(courseId)
		setShowEditModal(true)
	}

	const handleDelete = courseId => {
		dispatch(deleteCourse(courseId))
	}

	return (
		<div className={styles.table_container}>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>ID</th>
						<th>
							Course name
							<MdDriveFileRenameOutline />
						</th>
						<th>
							Description
							<MdOutlineDescription />
						</th>
						<th>
							Teacher
							<FaChalkboardTeacher />
						</th>
						<th>
							Action
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
								{course.description.length > 22
									? course.description.slice(0, 22) + '...'
									: course.description}
							</td>
							<td>{`${course?.teacher.split(' ')[0].slice(0, 12)}`}</td>
							<td>
								<button
									className={styles.action_btn}
									onClick={() => handleEdit(course.id)}
								>
									Edit
								</button>
								{/* Calling handleDelete function on click and passing course.id */}
								<button
									className={styles.action_btn}
									onClick={() => handleDelete(course.id)}
								>
									Delete
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
