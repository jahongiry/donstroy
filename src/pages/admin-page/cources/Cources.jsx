import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CourcesTable from '../../../components/cources-table/CourcesTable'
import Loading from '../../../components/loading/Loading'
import { fetchCourses } from '../../../slices/courseSlice'

export const Cources = () => {
	const dispatch = useDispatch()
	const courses = useSelector(state => state.courses.courses)

	useEffect(() => {
		dispatch(fetchCourses())
	}, [dispatch])

	if (!courses || courses.length === 0) {
		return (
			<div>
				<Loading />
			</div>
		)
	}

	return (
		<>
			<CourcesTable />
		</>
	)
}
