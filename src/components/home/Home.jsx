import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main-page/MainPage';
import { AdminPage } from '../../pages/admin-page/AdminPage';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import StudentPage from '../../pages/student-page/StudentPage';

export const Home = () => {

	return (
		<div className='content'>
			<div>
				<Header />
				<Routes>
					{routes.map(route => (
						<Route key={route.path} {...route} />
					))}
					<Route path='/' element={<Auth />}>
						<Route path='/admin' element={<AdminPage />} />
					</Route>
				</Routes>
			</div>
			<Footer />
		</div>
	)
}
