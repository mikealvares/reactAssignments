import React from 'react';
import './style.css';

const userInput = (props) => {
	const style = {
		width:'90%',
		padding:'5px',
		border:'1px solid #1a1a1a'
	};
	return(
		<div className="userinput">
			<input type="text" onChange={props.change} value={props.value} style={style} />
		</div>
	)
}

export default userInput;