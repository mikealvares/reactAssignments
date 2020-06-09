import React from 'react';
import './style.css';

const validationComponent = (props) => {
	let styleName = 'green';
	let errorMessage = 'Text long Enough';

	if(props.value<5){
		styleName = 'red';
		errorMessage = 'Text Too Short';
	}

	return(
		<span className={styleName}>{props.value.lenght} {errorMessage}</span>
	)
}

export default validationComponent;