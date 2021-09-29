import React, { useState } from 'react'

const CustomSelect = () => {
	const [selectedOption, setSelectedOption] = useState(null);
	const [showOptions, setShowOptions] = useState(false);

	const options = ['John Snow', 'Ned Stark', 'Arya Stark', 'Daenerys Targaryen'];

	const showOptionsHandler = () => {
		setShowOptions(!showOptions);
	}

	const optionChangeHandler = (value) => {
		setSelectedOption(value);
		setShowOptions(false)
	}

	return (
		<div className="custom-select">
			<div className="select-header" onClick={showOptionsHandler}>{selectedOption || options[0]}</div>
			{showOptions && <ul className="custom-select-options">
				{options.map(option => <li key={Math.random()} onClick={() => optionChangeHandler(option)}>{option}</li>)}
			</ul>}
		</div>
	)
}

export default CustomSelect
