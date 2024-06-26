import { useRef, useState } from 'react'
import { applyStyle } from '../../hooks/email-format'
import styles from './EmailEditor.module.css'; // Import CSS Modules

function EmailEditor({ text, setText }) {
	const [selectionStart, setSelectionStart] = useState(0)
	const [selectionEnd, setSelectionEnd] = useState(0)
	// const [showPreview, setShowPreview] = useState(false)

	const textRef = useRef(null)

	const updateSelection = () => {
		if (!textRef.current) return
		setSelectionStart(textRef.current.selectionStart)
		setSelectionEnd(textRef.current.selectionEnd)
	}

	const applyFormat = type => {
		if (!textRef.current) return
		const selectedText = text.substring(selectionStart, selectionEnd)
		if (!selectedText) return

		const before = text.substring(0, selectionStart)
		const after = text.substring(selectionEnd)
		setText(before + applyStyle(type, selectedText) + after)
	}

	return (
		<div>
			<div className={styles.card}>
				<textarea
					className={styles.editor}
					spellCheck='false'
					onSelect={updateSelection}
					ref={textRef}
					value={text}
					onChange={e => setText(e.target.value)}
				/>
			</div>
		</div>
	)
}

export default EmailEditor
