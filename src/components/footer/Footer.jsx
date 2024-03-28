import { FaTelegramPlane } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { pathToArray, prohibited } from '../../routes/ProhibitedPath'
import { selectTranslations } from '../../slices/LanguageSlice'
import styles from './Footer.module.css'
export const Footer = () => {
	const courses = useSelector(state => state.courses.courses)
	// const courses2 =  courses.name

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
							<p>{translations.header.cources}</p>
							<ul>
								{/* {translations.footer.title1.lists.map((link, inx) => (
									<li key={inx}>
										<a href=''>{link}</a>
									</li>
								))} */}
								<li>
									<Link to={'/sertificates'}>
										{courses[0]?.name.slice(0, 20)}
									</Link>
								</li>
								<li>
									<Link to={'/sertificates'}>
										{courses[1]?.name.slice(0, 20)}
									</Link>
								</li>
								<li>
									<Link to={'/sertificates'}>
										{courses[2]?.name.slice(0, 20)}
									</Link>
								</li>
							</ul>
						</div>
						<div className={styles.center}>
							<p>{translations.footer?.title2.title}</p>
							<ul>
								{translations.footer?.title2.lists.map((link, inx) => (
									<li key={inx}>
										<Link to='/sertificates'>{link}</Link>
									</li>
								))}
							</ul>
						</div>
						<div className={styles.right}>
							<p>{translations.footer.title3?.title}</p>
							<ul>
								{translations.footer.title3?.lists.map((link, inx) => (
									<li key={inx}>
										<Link to='https://t.me/don_stroy_project' target='_blank'>
											{link}
										</Link>
									</li>
								))}
								<li className={styles.telegram}>
									<Link to={'https://t.me/don_stroy_project'} target='_blank'>
										<FaTelegramPlane />
									</Link>
								</li>
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
