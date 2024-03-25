import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { pathToArray, prohibited } from '../../routes/ProhibitedPath'
import { selectTranslations } from '../../slices/LanguageSlice'
import styles from './Footer.module.css'
export const Footer = () => {
	const { pathname } = useLocation()
	const arrayPathname = [pathname]
	const translations = useSelector(selectTranslations)
	if (pathToArray(pathname).some(path => path.startsWith(prohibited))) return
	return (
		<div className={styles.main_footer}>
			<div className='container'>
				<div className={styles.footer}>
					<div className={styles.image}>
						<img src='/images/logo.webp' className='logo_img' alt='logo img' />
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
