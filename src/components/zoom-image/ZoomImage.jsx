export const ZoomImage = ({ data, img }) => {
	return (
		<div className={styles.zoome_img}>
			{data.map(item => (
				<img key={item.id} src={item.img} alt='img' />
			))}
		</div>
	)
}
