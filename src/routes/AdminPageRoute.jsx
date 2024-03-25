import { AddCource } from '../pages/admin-page/add-cource/AddCource'
import { AddStudent } from '../pages/admin-page/add-student/AddStudent'
import { Cources } from '../pages/admin-page/cources/Cources'
import { Students } from '../pages/admin-page/students/Students'

export const routes = [
	{ path: 'students', element: <Students /> },
	{ path: 'add-student', element: <AddStudent /> },
	{ path: 'add-cource', element: <AddCource /> },
	{ path: 'cources', element: <Cources /> },
]
