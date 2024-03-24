import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { TiWarningOutline } from 'react-icons/ti'
import { useSelector } from 'react-redux'
import { selectTranslations } from '../../slices/LanguageSlice'
import styles from './Login.module.css'
export const Login = ({ setShowLogin }) => {
	const [showPassword, setShowPassword] = useState(false)
	const translatioins = useSelector(selectTranslations)
	const {
		register,
		handleSubmit,
		formState: { errors, isLoading },
		watch,
	} = useForm()
	const onsubmit = data => {
		console.log(data)
	}
	return (
		<>
			<motion.form
				initial={{ opacity: '0', top: '-100vh' }}
				animate={{ opacity: '1', top: '50%' }}
				className={styles.form}
				onSubmit={handleSubmit(onsubmit)}
			>
				<h2>{translatioins.login.login}</h2>
				<div className={styles.input}>
					<span>{translatioins.login.email}</span>
					<input
						type='text'
						{...register('email', {
							required: translatioins.login.emailError1,
							validate: value => {
								if (!value.includes('@')) {
									return translatioins.login.emailError2
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
				{/* <div className={(styles.input, styles.password)}> */}
				<div className={styles.input}>
					<span>{translatioins.login.password}</span>
					<input
						type={showPassword ? 'text' : 'password'}
						{...register('password', {
							required: translatioins.login.passwordError1,
							minLength: {
								value: 4,
								message: translatioins.login.passwordError2,
							},
						})}
					/>
					<button
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
				<button type='submit' className='btn_full' disabled={isLoading}>
					{translatioins.login.login}
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
