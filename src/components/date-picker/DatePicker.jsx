import React from 'react'
import './DatePicker.css'

const DatePicker = ({ selectedDate, setSelectedDate }) => {
	const handleDateChange = event => {
		setSelectedDate(event.target.value)
	}

	return (
		<div className='date-picker-container'>
			<input
				type='date'
				value={selectedDate}
				onChange={handleDateChange}
				required
				className='date-picker-input'
			/>
		</div>
	)
}

export default DatePicker
