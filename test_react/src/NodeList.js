import React from 'react';
import Node from './Node';

const NodeList = ({ num_nodes }) => {

	// do computations here to get the centers of Node
	// for now it just uses iterator i in the for loop
	// MIGHT NEED RADIUS RETURNED FROM THIS FUNCTION
	/*function coordinates(num_nodes){
	    var coords = [];

    	var sizeOfWindow = Math.min(window.innerHeight,window.innerWidth);
    	var centerX = sizeOfWindow/2;
	    var centerY = sizeOfWindow/2;

    	var degreesInBetween = 360/num_nodes;
    	var degree = 90;//start from 90
    	var radius = 0.419*sizeOfWindow;
    	for(var i = 0;i<num_nodes ;i++, degree+=degreesInBetween){
        	var coordX = centerX + Math.cos(degree)*radius;
        	var coordY = centerY + Math.sin(degree)*radius;
        	coords.push({coordX,coordY});
    	}
    	return coords;
	}

	var serverCoords = coordinates(num_nodes);*/
	const list = []

	// hardcoded centers for 5 circles
	var serverCoords = [{ coordX: 300 , coordY: 100 }, 
						{ coordX: 500 , coordY: 100 },
						{ coordX: 400 , coordY: 100 },
						{ coordX: 200 , coordY: 100 },
						{ coordX: 100 , coordY: 100 }];


	for (var i=0; i<num_nodes; i++) {
		list.push(<Node key={i+1} 
						centX = {serverCoords[i].coordX} 
						centY = {serverCoords[i].coordY} />)
	}

	return (
		<div>			
			<svg width= {window.innerHeight} height= {window.innerHeight}>
				{list}
    		</svg>
		</div>
	);
}

export default NodeList;

