export const applyStyle = (type, selectedText) => {
	let formattedText = selectedText
	switch (type) {
		case 'bold':
			formattedText = '<b>' + selectedText + '</b>'
			break
		case 'italic':
			formattedText = '<i>' + selectedText + '</i>'
			break
		case 'underline':
			formattedText = '<u>' + selectedText + '</u>'
			break
		default:
			formattedText = selectedText
			break
	}
	return formattedText
}
