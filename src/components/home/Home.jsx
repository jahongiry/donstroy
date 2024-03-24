import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../../pages/main-page/MainPage'
import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'

export const Home = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<MainPage />} />
			</Routes>
			<Footer />
		</>
	)
}
