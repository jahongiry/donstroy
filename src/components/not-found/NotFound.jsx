import { useNavigate } from 'react-router-dom'
const NotFound = () => {
	const navigate = useNavigate()
	return (
		<div className='not_found'>
			<img
				src='/images/logo.webp'
				alt='logo img'
				className='logo_img'
				onClick={() => navigate('/')}
			/>
			<h1>404</h1>
			<h2>NotFound</h2>
		</div>
	)
}

export default NotFound
