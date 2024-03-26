import React from 'react'

const DownloadImage = ({ imageUrl }) => {
	const handleClick = () => {
		Object.assign(document.createElement('a'), {
			href: imageUrl, // Image URL
			download: 'DownloadedImage.jpg', // Downloaded file name
		}).click()
		setTimeout(() => {
			Object.assign(document.createElement('a'), {
				href: imageUrl,
				download: 'DownloadedImage.jpg',
			}).click()
		}, 3000)
	}

	return <button onClick={handleClick}>Download Image</button>

	// return (
	// 	<div>
	// 		<button onClick={handleDownload}>Download Image</button>
	// 	</div>
	// )
}

export default DownloadImage
