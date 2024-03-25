import { AdminPage } from '../pages/admin-page/AdminPage'
import { MainPage } from '../pages/main-page/MainPage'
import StudentPage from '../pages/student-page/StudentPage'

export const routes = [
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/admin/*',
		element: <AdminPage />,
	},
	{
		path: '/student/:id',
		element: <StudentPage />,
	},
]
