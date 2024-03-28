import parse from 'html-react-parser'
import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import { useRef, useState } from 'react'
import { applyStyle } from '../../hooks/email-format'
import styles from './EmailEditor.module.css'; // Import CSS Modules

function EmailEditor({ text, setText }) {
	const [selectionStart, setSelectionStart] = useState(0)
	const [selectionEnd, setSelectionEnd] = useState(0)
	const [showPreview, setShowPreview] = useState(false)

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
				<div className={styles.btns_card}>
					<button
						onClick={() => setShowPreview(false)}
						className={!showPreview ? styles.active : ''}
					>
						Text
					</button>
					<button
						onClick={() => setShowPreview(true)}
						className={showPreview ? styles.active : ''}
					>
						Preview
					</button>
				</div>
				<textarea
					className={styles.editor}
					spellCheck='false'
					onSelect={updateSelection}
					ref={textRef}
					value={text}
					onChange={e => setText(e.target.value)}
				/>
				<div className={styles.actions}>
					<div className={styles.tools}>
						<button onClick={() => setText('')}>
							<Eraser size={17} />
						</button>
						<button onClick={() => applyFormat('bold')}>
							<Bold size={17} />
						</button>
						<button onClick={() => applyFormat('italic')}>
							<Italic size={17} />
						</button>
						<button onClick={() => applyFormat('underline')}>
							<Underline size={17} />
						</button>
					</div>
				</div>
				{showPreview && <div className={styles.preview}>{parse(text)}</div>}
			</div>
		</div>
	)
}

export default EmailEditor
