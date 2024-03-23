import { Header } from '../header/Header'
import styles from './Home.module.css'

export const Home = () => {
	return (
		<>
			<Header />
			<div className={styles.v_logo}>
				<img src='/v_logo.svg' alt='v-logo' />
			</div>
		</>
	)
}
