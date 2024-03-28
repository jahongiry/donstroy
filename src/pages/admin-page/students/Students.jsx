import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/loading/Loading'
import StudentsTable from '../../../components/students-table/StudentsTable'
import { fetchStudents } from '../../../slices/studentSlice'
export const Students = () => {
	const dispatch = useDispatch()
	const students = useSelector(state => state.student.student)

	useEffect(() => {
		dispatch(fetchStudents())
	}, [dispatch])

	if (!students || students.length === 0) {
		return (
			<div>
				<Loading />
			</div>
		)
	}

	return (
		<>
			<StudentsTable />
		</>
	)
}
