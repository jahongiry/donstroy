import axios from 'axios'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { selectTranslations } from '../../slices/LanguageSlice'
import styles from './MainPage.module.css'

const TOKEN = '6691042055:AAGE0rvDXKpi-ILqYdnRcnu7QWrta59NLDc'
const CHAT_ID = '-1002061226813'
export const MainPage = () => {
	const [showCall, setShowCall] = useState()
	const translations = useSelector(selectTranslations)
	const [phoneNumber, setPhoneNumber] = useState('+998')
	const [thought, setThought] = useState('')
	const [isPending, setIsPending] = useState(false)
	const personInfo = `<b>Telefon nomer:</b> ${encodeURIComponent(
		phoneNumber
	)} %0A %0A<b>Izoh:</b> ${encodeURIComponent(thought)}`
	const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${personInfo}&parse_mode=html`
	const fetchData = async () => {
		try {
			const response = await axios.get(URL)
			setIsPending(true)
			toast.success(<p>Success</p>, { autoClose: 3000 })
		} catch (error) {
			toast.error(
				<p className='red-text-important'>internet has disappeared.</p>,
				{ autoClose: 3000 }
			)
			console.error('Error fetching data:', error)
		}
	}
	const params = useParams()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [params])
	const handleSendInfo = () => {
		fetchData()
		setShowCall(false)
		setPhoneNumber('+998')
		setThought('')
	}
	const handleOnChange = value => {
		setPhoneNumber(value)
	}
	return (
		<div className='container'>
			<div className={styles.main_page}>
				<div className={styles.left}>
					<h2>{translations.mainPage.title}</h2>
					<p>{translations.mainPage.p} </p>
					<button
						className='btn_full'
						onClick={() => {
							setIsPending(false)
							setShowCall(true)
						}}
					>
						{translations.mainPage.button}
					</button>
				</div>
				<div className={styles.right}>
					<img src='/images/donstroy_building.webp' alt='donstroy building' />
				</div>
			</div>
			{showCall && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className={styles.call_center}
				>
					<div className={styles.person_info_container}>
						<div className={styles.person_info}>
							<p>{translations.mainPage.callCenter}</p>
							<PhoneInput
								id='phone'
								name='phone'
								country='UZ'
								value={phoneNumber}
								onChange={handleOnChange}
								placeholder='Enter phone number'
								maxLength={17}
							/>
							<textarea
								value={thought}
								onChange={e => setThought(e.target.value)}
								placeholder={translations.mainPage.text}
							></textarea>
							<button
								className='btn'
								disabled={isPending}
								onClick={handleSendInfo}
							>
								{translations.mainPage.button2}
							</button>
						</div>
					</div>
					<div className={styles.dark} onClick={() => setShowCall(false)}></div>
				</motion.div>
			)}
		</div>
	)
}
