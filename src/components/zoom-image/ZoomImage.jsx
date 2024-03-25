import { motion } from 'framer-motion'
import styles from './ZoomImage.module.css'
export const ZoomImage = ({ data, img, setShowZoomImage }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className={styles.zoom_img}
			onClick={() => setShowZoomImage(false)}
		>
			{data.find(item => item.id === img) ? (
				<img
					key={img}
					src={data.find(item => item.id === img).certificate}
					alt='img'
				/>
			) : (
				<p>Home</p>
			)}
		</motion.div>
	)
}
