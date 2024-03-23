import { useSelector } from 'react-redux'
import { selectTranslations } from '../../slices/LanguageSlice'
import styles from './Footer.module.css'
// const linksLeft = ['Aniq fanlar', 'Tabiiy fanlar', 'Xorijiy tillar', 'PISA']
// const linksCeneter = ['Akkaunt', 'Sozlamalar', "E'lonlar"]
// const linksRight = [
// 	'Biz haqimizda',
// 	'Konfidensiallik siyosati',
// 	'Yordam',
// 	'Malaka oshirishni tashkil etishga ariza topshirish',
// 	'FAQ',
// ]

export const Footer = () => {
	const translations = useSelector(selectTranslations)
	return (
		<div className={styles.main_footer}>
			<div className='container'>
				<div className={styles.footer}>
					<div className={styles.image}>
						<img src='/images/logo.png' className='logo_img' alt='logo img' />
					</div>
					<div className={styles.links}>
						<div className={styles.left}>
							<p>{translations.footer.title1.title}</p>
							<ul>
								{translations.footer.title1.lists.map((link, inx) => (
									<li key={inx}>
										<a href=''>{link}</a>
									</li>
								))}
							</ul>
						</div>
						<div className={styles.center}>
							<p>{translations.footer.title2.title}</p>
							<ul>
								{translations.footer.title2.lists.map((link, inx) => (
									<li key={inx}>
										<a href=''>{link}</a>
									</li>
								))}
							</ul>
						</div>
						<div className={styles.right}>
							<p>{translations.footer.title3.title}</p>
							<ul>
								{translations.footer.title3.lists.map((link, inx) => (
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
