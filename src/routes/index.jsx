import NotFound from '../components/not-found/NotFound'
import { AdminPage } from '../pages/admin-page/AdminPage'
import { Cource } from '../pages/cource-page/CourcePage'
import { MainPage } from '../pages/main-page/MainPage'
import Sertificates from '../pages/sertificates/Sertificates'
import StudentPage from '../pages/student-page/StudentPage'

export const routes = [
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/sertificates',
		element: <Sertificates />,
	},
	{
		path: '/cource/:id',
		element: <Cource />,
	},
	{
		path: '/admin/*',
		element: <AdminPage />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
	{
		path: '/student/:id',
		element: <StudentPage />,
	},
]
