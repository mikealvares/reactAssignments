import React from 'react';
import './style.css';

const charComponent = (props) =>{
	return(
		<div className="charBox" onClick={props.click}>
			{props.value}
		</div>
	)
}

export default charComponent;