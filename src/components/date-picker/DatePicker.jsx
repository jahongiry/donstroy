import React from 'react'
import './DatePicker.css'

const DatePicker = ({ selectedDate, setSelectedDate }) => {
	console.log(selectedDate)
	const handleDateChange = event => {
		setSelectedDate(event.target.value)
	}

	return (
		<div className='date-picker-container'>
			<input
				type='date'
				value={selectedDate}
				onChange={handleDateChange}
				className='date-picker-input'
			/>
		</div>
	)
}

export default DatePicker
