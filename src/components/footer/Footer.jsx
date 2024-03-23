import styles from './Footer.module.css'
const linksLeft = ['Aniq fanlar', 'Tabiiy fanlar', 'Xorijiy tillar', 'PISA']
const linksCeneter = ['Akkaunt', 'Sozlamalar', "E'lonlar"]
const linksRight = [
	'Biz haqimizda',
	'Konfidensiallik siyosati',
	'Yordam',
	'Malaka oshirishni tashkil etishga ariza topshirish',
	'FAQ',
]
export const Footer = () => {
	return (
		<div className={styles.main_footer}>
			<div className='container'>
				<div className={styles.footer}>
					<div className={styles.image}>
						<img src='/images/logo.png' className='logo_img' alt='logo img' />
					</div>
					<div className={styles.links}>
						<div className={styles.left}>
							<p>KURSLAR</p>
							<ul>
								{linksLeft.map((link, inx) => (
									<li key={inx}>
										<a href=''>{link}</a>
									</li>
								))}
							</ul>
						</div>
						<div className={styles.center}>
							<p>MENING PROFILIM</p>
							<ul>
								{linksCeneter.map((link, inx) => (
									<li key={inx}>
										<a href=''>{link}</a>
									</li>
								))}
							</ul>
						</div>
						<div className={styles.right}>
							<p>ALOQA</p>
							<ul>
								{linksRight.map((link, inx) => (
									<li key={inx}>
										<a href=''>{link}</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<footer>
				<div className='container'>
					<p>
						&copy;2020-2023 Copyright.
						<span>Barcha huquqlar himoyalangan.</span>
					</p>
				</div>
			</footer>
		</div>
	)
}
