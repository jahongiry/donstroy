import { motion } from 'framer-motion'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectTranslations } from '../../slices/LanguageSlice'
import styles from './Login.module.css'
export const Login = ({ setShowLogin }) => {
	const [showPassword, setShowPassword] = useState(false)
	const tranlatioins = useSelector(selectTranslations)
	return (
		<>
			<motion.form
				initial={{ opacity: '0', top: '-100vh' }}
				animate={{ opacity: '1', top: '50%' }}
				className={styles.form}
			>
				<h2>Kirish</h2>
				<label>
					<span>Telefon raqam</span>
					<input type='text' />
				</label>
				<label>
					<span>Parol</span>
					<input type={showPassword ? 'text' : 'password'} />
				</label>
				<button type='submit' className='btn_full'>
					Kirish
				</button>
			</motion.form>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className={styles.dark}
				onClick={() => setShowLogin(false)}
			></motion.div>
		</>
	)
}
