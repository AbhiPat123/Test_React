import React from 'react';
import './Node.css';

const Node = ({ centX, centY }) => {

	var nodeRadius = 35;

	return (
		<circle cx={centX} cy={centY} r={nodeRadius.toString()} fill="#8da0cb" />
	);
}

export default Node;


/*
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
*/	