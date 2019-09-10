import React from 'react';
import './Node.css';

const Node = ({ centX, centY }) => {

	var circRadius = 75;

	// add the 'px' and convert cx, cy and circRadiusto strings
	var cx_str = (centX-circRadius) + 'px';
	var cy_str = (centY-circRadius) + 'px';
	var circRadius_str = circRadius + 'px';

	// overwrite width, height and border-radius styles
	var circStyles = {
		marginTop: cy_str,
		marginLeft: cx_str,
		marginBottom: '0px',
		marginRight: '0px',
		padding: '0px',
    	width: circRadius_str,
    	height: circRadius_str,
		borderRadius: '50%',
		background: 'grey',
	};
	

	return (
		<circle cx="50" cy="50" r="10"/>
	);
}

export default Node;
