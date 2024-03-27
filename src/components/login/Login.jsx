import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { TiWarningOutline } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectTranslations } from '../../slices/LanguageSlice'
import { loginUser } from '../../slices/loginSlice'
import styles from './Login.module.css'

export const Login = ({ setShowLogin }) => {
	const [showPassword, setShowPassword] = useState(false)
	const translations = useSelector(selectTranslations)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		watch,
	} = useForm()

	const onSubmit = async data => {
		try {
			await dispatch(loginUser(data))
			navigate('/admin')
			setShowLogin(false)
		} catch (error) {
			console.error('Login failed:', error)
		}
	}

	return (
		<>
			<motion.form
				initial={{ opacity: '0', top: '-100vh' }}
				animate={{ opacity: '1', top: '50%' }}
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2>{translations.login.login}</h2>
				<div className={styles.input}>
					<span>{translations.login.email}</span>
					<input
						type='text'
						{...register('email', {
							required: translations.login.emailError1,
							validate: value => {
								if (!value.includes('@')) {
									return translations.login.emailError2
								}
								return true
							},
						})}
					/>
					<p>
						{errors.email ? <TiWarningOutline /> : <></>}
						{errors.email?.message}
					</p>
				</div>
				<div className={styles.input}>
					<span>{translations.login.password}</span>
					<input
						type={showPassword ? 'text' : 'password'}
						{...register('password', {
							required: translations.login.passwordError1,
							minLength: {
								value: 4,
								message: translations.login.passwordError2,
							},
						})}
					/>
					<button
						type='button'
						className={styles.show_btn}
						onClick={() => setShowPassword(v => !v)}
					>
						{showPassword ? <FaEyeSlash /> : <FaEye />}
					</button>
					<p>
						{errors.password ? <TiWarningOutline /> : <></>}
						{errors.password?.message}
					</p>
				</div>
				{/* Conditional rendering based on isSubmitting */}
				<button type='submit' className='btn_full' disabled={isSubmitting}>
					{isSubmitting ? 'Submitting...' : translations.login.login}
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
