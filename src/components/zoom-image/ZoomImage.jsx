import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { data } from '../../pages/admin-page/students/Students'
import styles from './ZoomImage.module.css'
export const ZoomImage = ({ img, setShowZoomImage }) => {
	const navigate = useNavigate()
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className={styles.zoom_img}
		>
			{data.find(item => item.id === img) ? (
				<img
					key={img}
					src={data.find(item => item.id === img).certificate}
					alt='img'
					onClick={() => navigate(`/student/${img}`)}
				/>
			) : (
				<></>
			)}
			<div
				className={styles.dark}
				onClick={() => setShowZoomImage(false)}
			></div>
		</motion.div>
	)
}
