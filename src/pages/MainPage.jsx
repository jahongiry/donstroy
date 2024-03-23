import styles from './MainPage.module.css'
export const MainPage = () => {
	return (
		<div className='container'>
			<div className={styles.main_page}>
				<div className={styles.left}>
					<h2>«Uzluksiz kasbiy ta’lim» elektron platformasi</h2>
					<p>
						Malaka oshirish uchun kurslar endi onlayn. Qulayliklardan
						foydalaning va vaqtingizni tejang.
					</p>
					<button className='btn_full'>Malaka oshirishni boshlash</button>
				</div>
				<div className={styles.right}>
					<img src='/images/donstroy_building.jpg' alt='donstroy building' />
				</div>
			</div>
		</div>
	)
}
