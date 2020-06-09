import React from 'react'
import './style.css'

const userOutput = (props) =>{
	return(
		<div className="quote">
			<p>Welcome {props.name}: Quisque eleifend nec libero a hendrerit. Ut vitae diam ligula. Proin facilisis commodo accumsan. Maecenas accumsan suscipit velit ut tempor. Sed tristique sollicitudin dolor. Donec vel purus congue, auctor mauris a, lacinia dui. Aliquam nec convallis neque. Aliquam volutpat sem at mi commodo, id scelerisque tortor venenatis. Sed ut consectetur erat.</p>
			<p>Integer lobortis vulputate lacus, at commodo velit vulputate nec. Nulla varius tempus justo, vel efficitur odio sodales ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec pretium turpis ut sem bibendum, id faucibus ex suscipit. Nullam ut placerat metus. Donec iaculis commodo ex vitae commodo. Morbi nec vulputate odio.</p>
		</div>
	)
}

export default userOutput;