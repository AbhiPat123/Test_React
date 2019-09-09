import React from 'react';
import './Node.css';

const Node = ({ cx, cy }) => {
	// add the 'px' and convert cx, cy to strings
	var cx_str = cx + 'px';
	var cy_str = cy + 'px';

	// overwrite width, height and border-radius styles
	let circStyles = {
    	width: cx_str,
    	height: cy_str,
	};
	

	return (
		<div className = 'circle' style = {circStyles}>			
		</div>
	);
}

export default Node;
