import { AdminPage } from '../pages/admin-page/AdminPage'
import { MainPage } from '../pages/main-page/MainPage'

export const routes = [
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/admin/*',
		element: <AdminPage />,
	},
]
