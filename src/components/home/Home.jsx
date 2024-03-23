import { MainPage } from '../../pages/MainPage'
import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import styles from './Home.module.css'

export const Home = () => {
	return (
		<>
			<Header />
			<MainPage />
			<Footer />
			<div className={styles.v_logo}>
				<img src='/images/v_logo.svg' alt='v-logo' />
			</div>
		</>
	)
}
