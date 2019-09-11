import React from 'react';
import Node from './Node';

const NodeList = ({ num_nodes }) => {

	// returns center coordinates for nodes given a specific number of nodes
	function coordinates(num_nodes){
	    var coords = [];

    	var sizeOfWindow = Math.min(window.innerHeight,window.innerWidth);
    	var centerX = sizeOfWindow/2;
    	var centerY = sizeOfWindow/2.75;
    	var radius = 175;

    	for(var i = 0; i<num_nodes ; i++) {
		// multiplied with 1.5PI makes sure the first circle starts at highest point
        	var coordX = centerX + Math.cos((2 * Math.PI * i / num_nodes) + (1.5*Math.PI))*radius;
        	var coordY = centerY + Math.sin((2 * Math.PI * i / num_nodes) + (1.5*Math.PI))*radius;
        	coords.push({coordX,coordY});
    	}
		return coords;
	}

	var serverCoords = coordinates(num_nodes);
	const list = []

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


	/*// hardcoded centers for 5 circles
	var serverCoords = [{ coordX: 300 , coordY: 100 }, 
						{ coordX: 500 , coordY: 100 },
						{ coordX: 400 , coordY: 100 },
						{ coordX: 200 , coordY: 100 },
						{ coordX: 100 , coordY: 100 }];*/
