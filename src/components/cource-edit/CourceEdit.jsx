import { motion } from 'framer-motion'
import { useState } from 'react'
import { data } from '../../pages/admin-page/cources/Cources'
import EmailEditor from '../email-editor/EmailEditor'
import styles from './CourceEdit.module.css'
export const CourceEdit = ({ id, setShowEditModal }) => {
	const cource = data.find(cource => cource.id == id)
	const [courcetName, setCourceName] = useState(cource.name)
	const [teacher, setTeacher] = useState(cource.teacher)
	const [description, setDescription] = useState(cource.description)
	const handleEndit = () => {
		setShowEditModal(false)
	}
	return (
		<div className={styles.cource_edit}>
			<div className={styles.edit}>
				<p>ID: {cource.id}</p>
				<input
					type='text'
					value={courcetName}
					onChange={e => setCourceName(e.target.value)}
				/>
				<input
					type='text'
					value={teacher}
					onChange={e => setTeacher(e.target.value)}
				/>
				<EmailEditor text={description} setText={setDescription} />
				<button className={styles.edit_btn} onClick={handleEndit}>
					Edit
				</button>
			</div>
			<motion.div
				initial={{ opacity: '0' }}
				animate={{ opacity: '1' }}
				className={styles.dark}
				onClick={() => setShowEditModal(false)}
			></motion.div>
		</div>
	)
}
