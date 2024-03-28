import { useState } from 'react'
import { BsCalendar2Date } from 'react-icons/bs'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdDriveFileRenameOutline, MdOutlineDescription } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { deleteStudent } from '../../slices/studentSlice'
import { StudentEdit } from '../student-edit/StudentEdit'
import { ZoomImage } from '../zoom-image/ZoomImage'
import styles from './StudentsTable.module.css'

const StudentsTable = ({ data }) => {
	const [showZoomImage, setShowZoomImage] = useState(false)
	const [showEditModal, setShowEditModal] = useState(false)
	const [img, setImg] = useState(0)
	const students = useSelector(state => state.student.student)
	// const handleEdit = courseId => {
	// 	setId(courseId)
	// 	setShowEditModal(true)
	// }

	const handleDelete = courseId => {
		dispatch(deleteStudent(courseId))
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
						{/*<th>
							Description
							<FaChalkboardTeacher />
						</th> */}
						<th>
							Sana
							<BsCalendar2Date />
						</th>
						<th>
							Sertifikat
							<MdOutlineDescription />
						</th>
						<th>
							Action
							<IoSettingsOutline />
						</th>
					</tr>
				</thead>
				<tbody>
					{students.map(student => (
						<tr key={student?.id}>
							<td>{student?.id}</td>
							<td>
								{/* {`${item.studentName.split(' ')[0].slice(0, 12)}${
									item.studentName.split(' ')[0].length >= 12 ? '...' : ''
								} ${item.studentName.split(' ')[1].slice(0, 1)}.`} */}
								{student?.name.slice(0, 26)}
							</td>
							<td>{student.course.name.slice(0, 25)}</td>
							{/*
							<td>{item.description}</td> 
							*/}
							<td>{`${student?.created_at.split('-')[2].slice(0, 2)}-${
								student?.created_at.split('-')[1]
							}-${student?.created_at.split('-')[0]}`}</td>
							<td
								onClick={() => {
									setShowZoomImage(true)
									setImg(student.id)
								}}
							>
								<img
									src={`https://donstroy-api-production.up.railway.app/${student?.certificate_url}`}
									alt='Certificate'
								/>
							</td>
							<td>
								{/* <button
									className={styles.action_btn}
									onClick={() => handleClick(item.id)}
								>
									Edit
								</button> */}
								<button
									className={styles.action_btn}
									onClick={() => handleDelete(student.id)}
								>
									Delete
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
