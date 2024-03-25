import { Route, Routes } from 'react-router-dom'
import { AdminPage } from '../../pages/admin-page/AdminPage'
import Auth from '../../pages/auth/Auth'
import { routes } from '../../routes'
import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'

export const Home = () => {
	return (
		<>
			<Header />
			<Routes>
				{routes.map(route => (
					<Route key={route.path} {...route} />
				))}
				<Route path='/' element={<Auth />}>
					<Route path='/admin' element={<AdminPage />} />
				</Route>
			</Routes>
			<Footer />
		</>
	)
}
